<template>
  <div class="flex" style="width:100%">
    <el-tabs class="sidebar-menu" type="card" tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in childMenuData" :key="item.index" :label="item.title" :name="item.index"></el-tab-pane>
    </el-tabs>
    <div class="app-main">
      <div class="form-box">
        <filter-form :activeName='activeName' @generateEchart='generateEchart'/>
        <el-radio-group class="view-type" v-model="viewType">
          <el-radio :label="true">显示百分比</el-radio>
          <el-radio :label="false">显示数量</el-radio>
        </el-radio-group>
      </div>
      <div v-if="isMounted">
        <user-analyze ref="userAnalyze" v-if="activeName=='userAnalyze'" :formDataParams='formDataParams' :viewType="viewType"/>
        <order-analyze ref="orderAnalyze" v-if="activeName=='orderAnalyze'" :formDataParams='formDataParams' :viewType="viewType"/>
      </div>
    </div>

  </div>
</template>

<script>
import { getLastDay } from '@/util/index'
import FilterForm from './FilterForm.vue'
import OrderAnalyze from './orderAnalyze/index.vue'
import UserAnalyze from './userAnalyze/index.vue'
export default {
  name: 'userPortrait',
  components: {
    FilterForm,
    OrderAnalyze,
    UserAnalyze,
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
      let y,m,lastDay,firstDay
      if(formData.monthrange){
        y = formData.monthrange[1].split('-')[0]
        m = formData.monthrange[1].split('-')[1]
        lastDay = getLastDay(y,m)
        firstDay = formData.monthrange[0].split('-')[0]+'-'+formData.monthrange[0].split('-')[1]+'-01'
      }
      this.formDataParams = {
        brand:formData.brand.name,
        model:formData.model.name,
        config:formData.config.name,
        market: formData.market,
        useType: formData.useType,
        guidingPrice: formData.guidingPrice,
        range: formData.range,
        searchStartDate:formData.monthrange?firstDay:'',
        searchEndDate:formData.monthrange?lastDay:'',
      }
      this.$nextTick(()=>{
        this.$refs[this.activeName].generateEchart()
      })
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