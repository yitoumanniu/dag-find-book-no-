<template>
    <div class="container">
        <h1 class="title">欢迎来到阿狗寻书后台管理系统</h1>
        <div class="login-box">
            <h2 class="login-box-title">请登录</h2>
            <el-form class="form">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                 <el-form-item label="密码">
                    <el-input v-model="formData.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="handleLogin" type="primary" class="login-btn" :loading="isLoading" >
                登录
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               formData:{
                   username:'',
                   password:''
               },
               isLoading: false
           }
       },
      
       methods:{
           handleLogin(){
               this.isLoading = true
               this.$axios.post('/login',this.formData).then(res=>{
                   console.log(res)
                   if(res.code == 200){
                       this.$message.success('登录成功')
                       setTimeout(()=>{
                       this.$router.push('/layout/index')
                       },1000)
                   } else {
                       this.$message.error(res.msg)
                   }
                   this.islosading = false
               }).catch(err => {
                   this.islosading = false
               })
           }
       }
    }
</script>

<style scoped lang ="scss">
.container{ 
  overflow: hidden;
  min-height: 100vh;
  background-color: #545c64;
}
.title{
    margin-top: 80px;
    text-align: center;
    color: #fff;
    font-weight: 400;
}
.login-box{
    width: 400px;
    height: 300px;
    border: 1px solid #f1f1f1;
    background-color: #e8e8e8;
    border-radius: 6px;
    padding: 40px ;
    margin: 20px auto 0;

    .login-box-title{
        text-align: center;
        color: #333;
        font-weight: 400;
    }
    
    .form{
       margin-top: 20px; 
    }

    .login-btn{
        width: 100%;
        box-sizing: border-box
    }
}

</style>