<template>
  <div class="flex" style="width:100%">
    <el-tabs class="sidebar-menu" type="card" tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in childMenuData" :key="item.index" :label="item.title" :name="item.index"></el-tab-pane>
    </el-tabs>
    <div class="app-main">
      <div class="form-box">
        <filter-form :activeName='activeName' @generateEchart='generateEchart' @resetViewType='resetViewType'/>
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
import FilterForm from './FilterForm.vue'
import ChargingHabits from './chargingHabits/index.vue'
export default {
  name: 'chargeFeature',
  components: {
    FilterForm,
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
    resetViewType(){
      this.viewType = true
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

<style lang="less" scoped>
</style>