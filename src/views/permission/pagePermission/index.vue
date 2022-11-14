<template>
    <div class="pd-l">
        <div class="pdb-m">
            <el-button type="primary" @click="handleAddRole">新增角色</el-button>
            <el-button type="default" @click="handleDeleteRole">删除</el-button>
        </div>
        <div class="card-border">
            <div class="charts-title">
                <div class="title">用户角色列表</div>
            </div>
            <!-- charts components -->
            <div class="card-box pd-l">
                <el-table  ref="multipleTable"
                    :data="roleList"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column type="index" width="60" label="序号" align="center"></el-table-column>
                    <el-table-column prop="name" label="角色名称" width="200"></el-table-column>
                    <el-table-column prop="description" label="描述" width=""></el-table-column>
                    <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
                    <el-table-column label="操作" width="200" align="center">
                        <template slot-scope="scope">
                            <i class="mgl-m text-big color-blueText el-icon-edit"  @click="handleEditRole(scope.row)"></i>
                            <i class="mgl-m text-big color-blueText el-icon-user"  @click="handleEditPermission(scope.row)"></i>
                            <i class="mgl-m text-big color-danger el-icon-delete"  @click="handleDeleteRole(scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <AddRole ref="addRole" />
        <EditRole ref="editRole" />
        <EditPermission ref="editPermission" />
    </div>
</template>

<script>
import AddRole from './addRole.vue'
import EditRole from './editRole.vue'
import EditPermission from './editPermission.vue'
export default {
    data(){
        return {
            multipleSelection:[],
            roleList:[
                {id:1,name:'SPD',description:'SPD申请人',createTime:'2022-10-24'},
                {id:2,name:'NEV',description:'NEV申请人',createTime:'2022-10-24'},
                {id:3,name:'SGS(Chevrolet)',description:'SGS(Chevrolet)申请人',createTime:'2022-10-24'},
                {id:4,name:'SGS(Buick)',description:'SGS(Buick)申请人',createTime:'2022-10-24'},
                {id:5,name:'SGS(Cadillac)',description:'SGS(Cadillac)申请人',createTime:'2022-10-24'},
                {id:6,name:'PLE',description:'SPD申请人',createTime:'2022-10-24'},
            ]
        }
    },
    components:{
        AddRole,
        EditRole,
        EditPermission
    },
    methods:{
        handleEditRole(){
            this.$refs['editRole'].open()
        },
        handleEditPermission(row){
            this.$refs['editPermission'].open()
        },
        handleAddRole(){
            this.$refs['addRole'].open()
        },
        handleDeleteRole(){
            // this.$confirm
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>

<style lang="less" scoped>
.card-border {
  border: 1px solid #d4d8e3;
  border-radius: 6px;
  background: #fff;
  .charts-title {
    border-bottom: 1px solid #d4d8e3;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    justify-content: space-between;
    .title {
      font-weight: 700;
      position: relative;
      display: inline-block;
    }
    .title::before {
      content: " ";
      position: absolute;
      left: -16px;
      top: 5px;
      height: 8px;
      width: 8px;
      border-radius: 8px;
      border: 2px solid #0c1243;
    }
    .info-icon{
      vertical-align:top;
      margin-left: 5px;
      margin-top: 1px;
    }
    .info-right{
      font-size: 14px;
      color: #aaa;
      padding-right: 20px;
    }
  }
  .card-box{
   min-height: 500px;
  }
  ::v-deep .el-table th.el-table__cell>.cell{
    padding: 0 14px;
  }
  ::v-deep .el-table th.el-table__cell{
    background-color:rgba(56, 147, 249, 0.2);
    height: 48px;
    color: #000;
  }
}
</style>