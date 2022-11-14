<template>
    <el-dialog title="登录" :visible.sync="dialogVisible" width="460px" height="432px" append-to-body>
        <el-form ref="form" :model="loginInfo" label-width="80px">
            <el-form-item required label="用户名">
                <el-input v-model="loginInfo.account"></el-input>
            </el-form-item>
            <el-form-item required label="密码">
                <el-input v-model="loginInfo.password"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleLogin">登录</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false,
            loginInfo:{
                account:'',
                password:'',
            }
          
        }
    },
    methods:{
        open(){
            this.dialogVisible = true
            this.$nextTick(()=>{
                this.loginInfo = {
                    account:'administrator',
                    password:'123456',
                }
            })
        },
        handleLogin(){
            this.$store.dispatch("LoginByUsername", this.loginInfo).then((res) => {
                this.dialogVisible = false
            });
        },
    }
}
</script>

<style lang='less' scoped>
.check-box{
    display: block;
}
</style>