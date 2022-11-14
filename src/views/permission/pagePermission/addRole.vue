<template>
    <el-dialog title="新增角色" :visible.sync="dialogVisible" width="660px">
        <div class="center">
            <el-steps class="mgb-l" :space="200" :active="stepActive" finish-status="success" align-center>
                <el-step title="基本信息"></el-step>
                <el-step title="权限配置"></el-step>
            </el-steps>
        </div>
         <el-form v-show="stepActive == 1" ref="form" :model="editRolePermission" label-width="80px">
            <el-form-item label="角色名称">
                <el-input v-model="editRolePermission.name"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input type="textarea" v-model="editRolePermission.desc" :autosize="{ minRows: 6, maxRows: 8}"></el-input>
            </el-form-item>
        </el-form>
        <el-tree ref="tree" v-show="stepActive == 2" :data="allModuleList" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span :class="data.brand?'text-bold':''">{{ node.label }}</span>
            <el-select class="mgl-l" v-if="data.brand" v-model="data.brand" multiple placeholder="请选择">
                <el-option v-for="brand in brandList" :key="brand.value" :label="brand.label" :value="brand.value"></el-option>
            </el-select>
            <br />
            <el-radio-group v-if="data.viewDown" class="mgt-m" v-model="data.viewDown">
                <el-radio :label="1">可见可下载</el-radio>
                <el-radio :label="2">仅可见</el-radio>
            </el-radio-group>
          </span>
        </el-tree>
        <div slot="footer" class="dialog-footer">
            <el-button v-if="stepActive == 1" @click="dialogVisible = false" >取消</el-button>
            <el-button v-if="stepActive == 1" type="primary" @click="changeStep(2)">下一步</el-button>
            <el-button v-if="stepActive == 2" type="primary" @click="changeStep(1)">上一步</el-button>
            <el-button v-if="stepActive == 2" type="primary" @click="dialogVisible = false">保存</el-button>
        </div>
    </el-dialog>
</template>

<script>
import {getModuleTreeList} from '@/api/base'
export default {
    data(){
        return {
            dialogVisible:false,
            stepActive:1,
            brandList:[
                {label:'别克',value:'别克'},
                {label:'雪佛兰',value:'雪佛兰'},
                {label:'凯迪拉克',value:'凯迪拉克'},
            ],
            allModuleList:[
                {
                    id: 1,
                    label: '首页',
                    chcked:true,
                    brand:[],
                    viewDown:1,
                    children: []
                }, 
                {
                    id: 2,
                    label: '驾驶行为分析',
                    chcked:true,
                    brand:[],
                    viewDown:null,
                    children: [{
                        id: 5,
                        label: '里程分析',
                        chcked:true,
                        viewDown:2,
                    }, {
                        id: 6,
                        label: '时间分析',
                        chcked:true,
                        viewDown:2,
                    }]
                }],
            editRolePermission:{
                name:'',
                desc:'',
            }
          
        }
    },
    methods:{
        open(){
            this.dialogVisible = true
            // this.$nextTick(()=>{
            //     this.editRoleForm = {
            //         name:'kevin',
            //         desc:'ddc',
            //     }
            // })
            // this.getModuleTreeList()
            this.$refs.tree.setCheckedKeys([1,2,5,6]);
        },
        //获取权限列表
        getModuleTreeList(){
            let params = {
                roleId:38
            }
            getModuleTreeList(params).then(res=>{
                this.allModuleList = res.data.data.allModuleList
            })
        },
        changeStep(step){
            this.stepActive = step
        }
    }
}
</script>

<style lang='less' scoped>
.check-box{
    display: block;
}
::v-deep .el-tree-node__content{
    height: 72px;
    font-size: 16px;
    align-items: baseline;
    .el-select{
        width: 330px;
    }
}
.el-steps{
    width: 100%;
    justify-content: center;
}
::v-deep .el-dialog__body{
    min-height: 360px;
    max-height: 70%;
}
</style>