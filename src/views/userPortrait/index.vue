<template>
  <div class="flex" style="width:100%">
    <el-tabs class="sidebar-menu" type="card" tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in childMenuData" :key="item.index" :label="item.title" :name="item.index"></el-tab-pane>
    </el-tabs>
    <div class="app-main">
      <div class="form-box">
        <filter-from :activeName='activeName' @generateEchart='generateEchart'/>
        <el-radio-group class="view-type" v-model="viewType">
          <el-radio :label="true">显示百分比</el-radio>
          <el-radio :label="false">显示数量</el-radio>
        </el-radio-group>
      </div>
      <div v-if="isMounted">
        <user-analyze ref="userAnalyze" v-if="activeName=='userAnalyze'" :viewType="viewType"/>
        <order-analyze ref="orderAnalyze" v-if="activeName=='orderAnalyze'" :viewType="viewType"/>
      </div>
    </div>

  </div>
</template>

<script>
import FilterFrom from './FilterFrom.vue'
import OrderAnalyze from './orderAnalyze/index.vue'
import UserAnalyze from './userAnalyze/index.vue'
export default {
  name: 'userPortrait',
  components: {
    FilterFrom,
    OrderAnalyze,
    UserAnalyze,
  },
  data(){
    return{
      childMenuData:[],
      activeName:'',
      viewType:true,
      isMounted:false,
    }
  },
  mounted(){
    this.getChildMenuData()
    this.isMounted = true
  },
  methods:{
    getChildMenuData(){
      this.childMenuData = [
        {index:'userAnalyze',title:'用户分析'},
        {index:'orderAnalyze',title:'订单分析'},
      ]
      this.$nextTick(()=>{
        this.setActiveTab()
      })
    },
    setActiveTab(){
      this.activeName = this.childMenuData[0].index
    },
    generateEchart(formData){
      this.$refs[this.activeName].generateEchart(formData)
    },
  }
};
</script>

<style lang="less">
  .form-box {
    align-items: center;
    background: #fff;
    padding: 12px 15px 0 15px;
    .el-form{
        width: 1300px;
    }
    .el-form-item{
        margin-bottom: 5px;
    }
    .el-form--label-top .el-form-item__label {
      padding: 0;
      line-height: 24px;
    }
    .button-box{
      padding-top: 24px;
      width: 260px;
    }
    .view-type{
      padding-top: 10px;
      margin-bottom: 10px;
    }
  }
</style>