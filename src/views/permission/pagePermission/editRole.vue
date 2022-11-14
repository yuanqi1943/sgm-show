<template>
    <el-dialog title="编辑角色" :visible.sync="dialogVisible" width="660px" height="432px">
        <el-form ref="form" :model="editRoleForm" label-width="80px">
            <el-form-item label="角色名称">
                <el-input v-model="editRoleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input type="textarea" v-model="editRoleForm.desc" :autosize="{ minRows: 6, maxRows: 8}"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" >取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">保存</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false,
            editRoleForm:{
                name:'',
                desc:'',
            }
          
        }
    },
    computed:{
    },
    methods:{
        open(){
            this.dialogVisible = true
            this.$nextTick(()=>{
                this.editRoleForm = {
                    name:'kevin',
                    desc:'ddc',
                }
            })
        },
      
    }
}
</script>

<style lang='less' scoped>
.check-box{
    display: block;
}
</style>