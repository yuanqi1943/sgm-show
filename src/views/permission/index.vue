<template>
  <div class="flex" style="width:100%">
    <el-tabs class="sidebar-menu" type="card" tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in childMenuData" :key="item.index" :label="item.title" :name="item.index"></el-tab-pane>
    </el-tabs>
    <div class="app-main">
      <div v-if="isMounted">
        <page-permission ref="pagePermission" v-if="activeName=='permissionSetting'"/>
      </div>
    </div>

  </div>
</template>

<script>
import PagePermission from './pagePermission/index.vue'
export default {
  name: 'permission',
  components: {
    PagePermission,
  },
  data(){
    return{
      childMenuData:[],
      activeName:'',
      viewType:true,
      isMounted:false,
      formDataParams:{},
      isLoading:false,
    }
  },
  mounted(){
    this.getChildMenuData()
    this.isMounted = true
  },
  methods:{
    getChildMenuData(){
      this.childMenuData = [
        {index:'permissionSetting',title:'权限设置'},
      ]
      this.$nextTick(()=>{
        this.setActiveTab()
      })
    },
    setActiveTab(){
      this.activeName = this.childMenuData[0].index
    },
  }
};
</script>

<style lang="less" scoped>
  ::v-deep .flex-proportion{
    display: flex;
    align-items: center;
    .area-progress{
      padding-left: 20px;
      flex: 1;
      border-radius: 0;
      .el-progress-bar__outer{
        background-color:transparent;
        border-radius:0;
      }
      .el-progress-bar__inner{
        background-color:#3893F9;
        border-radius:0;
      }
    }
  }
</style>