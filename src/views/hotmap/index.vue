<template>
  <div class="flex" style="width:100%">
    <el-tabs class="sidebar-menu" type="card" tab-position="left" v-model="activeName">
      <el-tab-pane v-for="item in childMenuData" :key="item.index" :label="item.title" :name="item.index"></el-tab-pane>
    </el-tabs>
    <div class="app-main">
      <filter-form class="form-box" :activeName='activeName' @generateEchart='generateEchart'/>
      <div v-if="isMounted">
        <city-hot-map :ref="'cityHotMap-'+activeName" v-if="activeName=='beijing'" :city="activeName" :formDataParams='formDataParams' />
        <city-hot-map :ref="'cityHotMap-'+activeName" v-if="activeName=='shanghai'" :city="activeName" :formDataParams='formDataParams' />
        <city-hot-map :ref="'cityHotMap-'+activeName" v-if="activeName=='zhengzhou'" :city="activeName" :formDataParams='formDataParams' />
      </div>
    </div>

  </div>
</template>

<script>
import { getLastDay } from '@/util/index'
import FilterForm from './FilterForm.vue'
import CityHotMap from './cityHotMap/index.vue'
export default {
  name: 'userPortrait',
  components: {
    FilterForm,
    CityHotMap,
  },
  data(){
    return{
      childMenuData:[],
      activeName:'',
      viewType:true,
      isMounted:false,
      formDataParams:{}
    }
  },
  mounted(){
    this.getChildMenuData()
    this.isMounted = true
  },
  methods:{
    getChildMenuData(){
      this.childMenuData = [
        {index:'beijing',title:'北京'},
        {index:'shanghai',title:'上海'},
        {index:'zhengzhou',title:'杭州'},
        {index:'xian',title:'西安'},
        {index:'wuhan',title:'武汉'},
      ]
      this.$nextTick(()=>{
        this.setActiveTab()
      })
    },
    setActiveTab(){
      this.activeName = this.childMenuData[0].index
      this.$nextTick(()=>{
        this.$refs['cityHotMap-'+this.activeName].greMap()
      })
    },
    generateEchart(formData){
      // let y,m,lastDay,firstDay
      // if(formData.monthrange){
      //   y = formData.monthrange[1].split('-')[0]
      //   m = formData.monthrange[1].split('-')[1]
      //   lastDay = getLastDay(y,m)
      //   firstDay = formData.monthrange[0].split('-')[0]+'-'+formData.monthrange[0].split('-')[1]+'-01'
      // }
      // this.formDataParams = {
      //   brand:formData.brand.name,
      //   model:formData.model.name,
      //   config:formData.config.name,
      //   market: formData.market,
      //   useType: formData.useType,
      //   guidingPrice: formData.guidingPrice,
      //   range: formData.range,
      //   searchStartDate:formData.monthrange?firstDay:'',
      //   searchEndDate:formData.monthrange?lastDay:'',
      // }
      this.$nextTick(()=>{
        this.$refs['cityHotMap-'+this.activeName].generateEchart()
      })
    },
  }
};
</script>

<style lang="less" scoped>
  .form-box {
    align-items: center;
    background: #fff;
    padding: 12px 15px 0px 15px;
    border-bottom: 1px solid #ddd;
    position: relative;
    z-index: 2;
    .el-form{
        width: 1430px;
    }
    .el-form-item{
        margin-bottom: 5px;
    }
    .el-form--label-top .el-form-item__label {
      padding: 0;
      line-height: 24px;
    }
    .view-type{
      padding-top: 10px;
      margin-bottom: 10px;
    }
  }
</style>