<template>
    <div>
        <h2>修改个人信息</h2>
        <el-for :model="forData"></el-for>
        <el-form-item label="用户名">
            <!-- <el-input v-model="forData.username" :disabled="true">

            </el-input> -->
        </el-form-item>
        <el-form-item label="昵称">
            <el-input v-model="forData.nickname">

            </el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="formData.email">

            </el-input>
        </el-form-item>
        <el-form-item label="用户头像">
            <uploadImg  v-model="formData.avatar"></uploadImg>
        </el-form-item>
        <el-form-item label="个性签名">
             <el-input type="textarea" v-model="formData.desc"></el-input>
        </el-form-item>
    </div>
</template>

<script>
import uploadImg from '@/components/upload-com'

export default {
    components:{
        uploadImg
    },
    data () {
        return{
            formData:{
                username:'',
                nickname:'',
                email   :'',
                desc    :'',
                avatar  :''
            },
            data: {
                token:''
            }
        }
    }
};
</script>

<style scoped>
</style>