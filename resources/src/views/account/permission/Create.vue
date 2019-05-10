<template>
    <a-modal
            title="新建角色"
            :width="640"
            :visible="visible"
            :confirmLoading="confirmLoading"
            @ok="handleSubmit"
            @cancel="handleCancel"
    >
        <a-spin :spinning="confirmLoading">
            <a-form :form="form">
                <a-form-item
                        label="角色标识"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['identify', {rules: [{required: true, min: 3, message: '请输入至少3位'}]}]" />
                </a-form-item>
                <a-form-item
                        label="角色名称"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-input v-decorator="['name', {rules: [{required: true, min: 3, message: '请输入至少3位'}]}]" />
                </a-form-item>
                <a-form-item
                        label="角色描述"
                        :labelCol="labelCol"
                        :wrapperCol="wrapperCol"
                >
                    <a-textarea
                            rows="2"
                            placeholder="角色描述"
                            v-decorator="[
                            'desc'
                      ]" />
                </a-form-item>
            </a-form>
        </a-spin>
    </a-modal>
</template>

<script>
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import { addModel } from "@/api/role";

    export default {
        components: {
            AFormItem,
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
                is_edit: false
            }
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
                        addModel(values).then((res) => {
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
        }
    }
</script>
