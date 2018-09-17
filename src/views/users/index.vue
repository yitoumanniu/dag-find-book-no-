<template>
    <div class="user-manage">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/users/index' }">用户管理</el-breadcrumb-item>
            </el-breadcrumb> 
        </div>

        <el-table :data="tableData">
            <el-table-column
                prop="nickname"
                label="姓名"
                width="130"
                >
            </el-table-column>
            <el-table-column
                prop="creattime" 
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="desc"
                label="个性签名"
                width="500">
            </el-table-column>
             <el-table-column
                prop="desc"
                label="用户头像"
                width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" alt="" class="avatar">
                </template>
            </el-table-column>
            <el-table-column label="操作" width="100px">
                <template slot-scope="scope">
                    <el-button @click="handleDetail" size="small" type="primary">
                        查看详细
                    </el-button>
                    <el-button @click="handleDelete(scope.row._id)" size="small" type="danger">
                        删除
                    </el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[]  
        }
    },
    methods: {
        getData(){
            this.$axios.get('/user').then(res=>{
                if(res.code == 200){
                    this.tableData = res.data
                }
            })
        },
        handleDetail(){
            this.$router.push('/layout/userDetails')
        },
        handleDelete(id){
            this.$confirm('删除一个管理员, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/user/delete',{ userIds:[id]}).then(res =>{  
                  this.$message.success(res.msg)
                  this.getData()

          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }
   },
    created() {
        this.getData()
    },
};
</script>

<style scoped lang="scss">
.user-mange {
 
  .avatar{
      width: 60px;
      height: 60px;
  }
}
</style>