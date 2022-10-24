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
        <charging-habits ref="chargingHabits" v-show="activeName=='chargingHabits'" :viewType="viewType"/>
      </div>
    </div>

  </div>
</template>

<script>
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
        width: 1400px;
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