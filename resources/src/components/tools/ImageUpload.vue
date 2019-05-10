<template>
    <div class="clearfix">
        <a-upload
                :action="postUrl"
                listType="picture-card"
                :fileList="fileList"
                @preview="handlePreview"
                @change="handleChange"
                accept="image/png,image/jpeg,image/jpg"
                :multiple="true"
        >
            <div v-if="fileList.length < fileNumber">
                <a-icon type="plus" />
                <div class="ant-upload-text">Upload</div>
            </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
    </div>
</template>
<script>
    import api from '@/api/tools';
    export default {
        props: ['images', 'fileNumber'],
        data () {
            return {
                postUrl: api.imageUpload,
                previewVisible: false,
                previewImage: '',
                fileList: [],
            }
        },
        watch: {
            images: {
                deep: true,
                handler (nv, ov) {
                    if (nv.length !== 0) {
                        this.setFileList(nv);
                    } else {
                        if (this.fileList.length !== 0) {
                            this.setFileList([]);
                        }
                    }
                }
            }
        },
        mounted() {
            this.setFileList(this.images);
        },
        methods: {
            setFileList(nv) {
                this.fileList = nv;
            },
            handleCancel () {
                this.previewVisible = false
            },
            handlePreview (file) {
                this.previewImage = file.url || file.thumbUrl;
                this.previewVisible = true
            },
            handleChange (info) {
                console.log("info", info);
                let fileList = info.fileList;
                let _this = this;
                fileList.map((file) => {
                    if (file.status === "done") {
                        if (file.response && file.response.status === 200) {
                            file.url = file.response.data[0].url;
                            console.log('emit',  file.response.data[0].url);
                            _this.$emit("uploadDone", file.response.data[0].path);
                        }
                    }
                    return file;
                });
                this.fileList = fileList;
                console.log("fileList", this.fileList);
            }
        },
    }
</script>
<style>
    /* you can make up upload button and sample style by using stylesheets */
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }
</style>
