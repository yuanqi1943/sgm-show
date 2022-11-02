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
        <charging-habits ref="chargingHabits" v-show="activeName=='chargingHabits'" :formDataParams="formDataParams" :viewType="viewType"/>
      </div>
    </div>

  </div>
</template>

<script>
import { getLastDay } from '@/util/index'
import FilterFrom from './FilterFrom.vue'
import ChargingHabits from './chargingHabits/index.vue'
export default {
  name: 'chargeFeature',
  components: {
    FilterFrom,
    ChargingHabits,
  },
  data(){
    return{
      childMenuData:[],
      activeName:'',
      viewType:true,
      isMounted:false,
      formDataParams:{},
    }
  },
  mounted(){
    this.getChildMenuData()
    this.isMounted = true
  },
  methods:{
    getChildMenuData(){
      this.childMenuData = [
        {index:'chargingHabits',title:'充电习惯'},
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
        holiday: formData.holiday,
        range: formData.range,
        searchStartDate:formData.monthrange?firstDay:'',
        searchEndDate:formData.monthrange?lastDay:'',
        chargePileType: formData.chargePileType,
      }
      this.$nextTick(()=>{
        this.$refs[this.activeName].generateEchart()
      })
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
        width: 1430px !important;
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