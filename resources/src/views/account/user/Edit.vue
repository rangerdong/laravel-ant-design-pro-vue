<template>
    <a-modal
            title="编辑用户"
            :width="640"
            :visible="visible"
            :confirmLoading="confirmLoading"
            @ok="handleSubmit"
            @cancel="handleCancel"
    >
        <a-spin :spinning="confirmLoading">
            <a-form :form="form" autocomplete="off">
                <a-form-item
                        label="用户登录名"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input  v-decorator="['username', { initialValue: user.username, rules: [{required: true, message:'用户登录名必填'}, {min: 5, message: '请输入登录用户名'}]}]" />
                </a-form-item>
                <a-form-item
                        label="用户名"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input  v-decorator="['name', {initialValue: user.name, rules: [{required: true, message:'用户名必填'},{min: 3, message: '请输入至少5位'}]}]" />
                </a-form-item>
                <a-form-item
                        label="用户登录密码"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                        extra="为空表示不更改"
                >
                    <a-input type="password" v-decorator="['password', {rules: [{min: 5, message: '请输入至少5位数密码'}]}]" />
                </a-form-item>
                <a-form-item
                        label="邮箱"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['email', {initialValue: user.email,  rules: [
                    {type: 'email', message:'邮箱格式不正确'}
                    ]
                    }]" />
                </a-form-item>
                <a-form-item
                        label="手机号"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['mobile', {initialValue: user.mobile, rules: [{type: 'string', min:11, max:11, message: '请输入正确手机号'}]}]" />
                </a-form-item>
                <a-form-item
                        label="用户角色"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-select mode="multiple" v-decorator="['roles', {initialValue: user.roles, rules: [{required:false}]}]" placeholder="选择用户所属角色">
                        <a-select-option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                        label="头像"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <image-upload :images="imageList" ref="avatar" :fileNumber=1 @uploadDone="uploadAvatar"/>
                    <a-input type="hidden"  v-decorator="['avatar', {initialValue: user.avatar}]"></a-input>
                </a-form-item>
            </a-form>
        </a-spin>
    </a-modal>
</template>

<script>
    import ImageUpload from '@/components/tools/ImageUpload';
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import { getUser, updateUser } from "@/api/user";
    import {getRoleOptions} from "@/api/role";
    import { getFileName } from "@/utils/helper";

    export default {
        components: {
            AFormItem,
            ImageUpload
        },
        data () {
            return {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 7 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 13 }
                },
                visible: false,
                confirmLoading: false,

                form: this.$form.createForm(this),
                user: {
                    username: '',
                    name: '',
                    mobile: '',
                    email: '',
                    avatar: '',
                    roles: []
                },
                avatar: '',
                roles: [],
                imageList: [],
                userId: 0
            }
        },
        mounted() {
            getRoleOptions().then((res) => {
                this.roles = res.data;
            });
        },
        methods: {
            init (id) {

                this.userId = id;
                getUser(id).then((res) => {
                    let userData = res.data;
                    let roles = [];
                    userData.roles.forEach(function (role) {
                        roles.push(role.id);
                    });
                    this.user.username = userData.username;
                    this.user.name = userData.name;
                    this.user.mobile = userData.mobile;
                    this.user.avatar = userData.avatar;
                    this.user.email = userData.email;
                    this.user.roles = roles;

                    this.avatar = userData.avatar;
                    if (userData.avatar) {
                        this.imageList = [
                            {
                                uid: this.userId,
                                status: 'done',
                                name: getFileName(res.data.avatar),
                                url: res.data.avatar_url
                            }
                        ];
                    } else {
                        this.imageList = [];
                    }

                    this.visible = true;
                });

            },
            handleSubmit () {
                const { form: { validateFields } } = this
                this.confirmLoading = true
                validateFields((errors, values) => {
                    if (!errors) {
                        console.log('values', values)
                        updateUser(this.userId, values).then((res) => {
                            this.visible = false
                            this.confirmLoading = false
                            if (res.status === 200) {
                                this.$emit('ok', values)
                            } else {
                                this.$message.error(res.message);
                            }
                        }).catch((err) => {
                            // this.visible = false
                            this.confirmLoading = false
                        });
                    } else {
                        this.confirmLoading = false
                    }
                })
            },
            handleCancel () {
                this.visible = false
            },
            uploadAvatar(path) {
                this.form.setFieldsValue({
                    avatar: path
                })
            }
        }
    }
</script>
