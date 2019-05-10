<template>
    <a-modal
            title="新建用户"
            :width="640"
            :visible="visible"
            :confirmLoading="confirmLoading"
            @ok="handleSubmit"
            @cancel="handleCancel"
    >
        <a-spin :spinning="confirmLoading" autocomplete="off">
            <a-form :form="form">
                <a-form-item
                        label="用户登录名"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['username', {rules: [{required: true, min: 5, message: '请输入至少5位'}]}]" />
                </a-form-item>
                <a-form-item
                        label="用户名"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['name', {rules: [{required: true, min: 3, message: '请输入至少3位'}]}]" />
                </a-form-item>
                <a-form-item
                        label="用户登录初始密码"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input type="password" v-decorator="['password', {rules: [{required: true, min: 5, message: '请输入至少5位数密码'}]}]" />
                </a-form-item>
                <a-form-item
                        label="邮箱"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['email', {rules: [{type: 'email', required: false, min: 5, message: '请输入正确邮箱'}]}]" />
                </a-form-item>
                <a-form-item
                        label="手机号"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['mobile', {rules: [{type: 'string', required: false, min:11, max:11, message: '请输入正确手机号'}]}]" />
                </a-form-item>
                <a-form-item
                        label="用户角色"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-select mode="multiple" v-decorator="['roles']" placeholder="Please select">
                        <a-select-option v-for="role in roles" :key="role.id" :value="role.id">{{role.name}}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                        label="头像"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <image-upload :images="[]" ref="avatar" :fileNumber=1 @uploadDone="uploadAvatar"/>
                    <a-input type="hidden"  v-decorator="['avatar']"></a-input>
                </a-form-item>
            </a-form>
        </a-spin>
    </a-modal>
</template>

<script>
    import ImageUpload from '@/components/tools/ImageUpload';
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import {addUser} from "@/api/user";
    import {getRoleOptions} from "@/api/role";

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
                avatar: '',
                is_edit: false,
                roles: []
            }
        },
        mounted() {
            getRoleOptions().then((res) => {
                this.roles = res.data;
            });
        },
        methods: {
            add () {
                this.visible = true
            },
            handleSubmit () {
                const { form: { validateFields } } = this
                this.confirmLoading = true
                validateFields((errors, values) => {
                    if (!errors) {
                        console.log('values', values)
                        addUser(values).then((res) => {
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
                });
            }
        }
    }
</script>
