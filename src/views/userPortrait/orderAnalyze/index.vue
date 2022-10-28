<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="6">
        <charts-card :cardInfo="userAnalyze1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-user-analyze-1" id="chart-user-analyze-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="18">
        <charts-card :cardInfo="userAnalyze2" :viewType='viewType' :twoChart='true'>
          <div slot="chart1" class="echart-view" ref="chart-user-analyze-21" id="chart-user-analyze-21"></div>
          <div slot="chart2" class="echart-view" ref="chart-user-analyze-22" id="chart-user-analyze-22"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="18">
        <charts-card :cardInfo="userAnalyze3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-user-analyze-3" id="chart-user-analyze-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="6">
        <charts-card :cardInfo="userAnalyze4" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-user-analyze-4" id="chart-user-analyze-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import {selectCarPurchasingCityLevel, selectVehiclePurchasingRegion, selectVehiclePurchasingRegionTop, selectCarPurchaseAge, selectCarPurchaseTime} from '@/api/userPortrait'
  export default {
    name: 'userAnalyze',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
        pieChartOption:{
          title: {},
            tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: []
        },
        chartOption:{
          title: {
            text: '',
            left: 'center',
            textStyle:{
              color:"#0c1243",
              fontSize:'12',
              fontWeight:'normal'
            },
            bottom:'20',
          },
          tooltip: {},
          grid:{
            left:50,
            right:50
          },
          xAxis: {
            data: []
          },
          yAxis: {
            type: 'value',
            name: '(单位:百辆)',
          },
          series: [
            {
              name: '出行次数',
              type: 'bar',
              data: []
            }
          ]
        },
        userAnalyze1:{
          seriesNumData:[],
          seriesPercentData:[],
          title:'性别占比',
          subTitleNum:'',
          chartTitle:'',
          subTitlePercent:'',
          definition:'统计每辆车车主的性别，分为男性和女性。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        userAnalyze2:{
          xAxisData:['20以下', '21-25', '26-30', '31-35', '36-40', '41-45','46-50','51-55','56-60','61及以上'],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'用户年龄分布',
          subTitleNum:'用户数量',
          subTitlePercent:'用户数量占比',
          chartTitle:'百公里电耗(kWh)',
          definition:'指标业务定义：统计每辆车车主当前的年龄。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        userAnalyze3:{
          xAxisData:['春季','夏季','秋季','冬季'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'用户常驻城市级别分布',
          subTitleNum:'',
          subTitlePercent:'',
          chartTitle:'',
          definition:'统计每辆车购入城市的城市级别，分为直辖市、副省级市、地级市、副地级市、县级市。',
          range:'',
          coverRate:'90%',
          dataTotal:'40214',
        },
        userAnalyze4:{
          xAxisData:[],
          seriesNumData:[],
          seriesPercentData:[],
          title:'用户地域分布',
          subTitleNum:'',
          subTitlePercent:'',
          chartTitle:'',
          definition:'统计每辆车购入的省份及城市。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
      }
    },
    props:['viewType','formData'],
    mounted(){
      this.$nextTick(()=>{
        this.generateEmptyEchart()
      })
    },
    watch:{
      viewType(newVal){
        
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
     
        })
      },
      generateEchart(){
    
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },
    }
  };
</script>

<style lang="less">
  .echart-box{
    padding-top: 15px;
  }

  .el-col {
    border-radius: 4px;
  }
  
  .el-row{
    margin: 0 !important;
    padding-bottom: 15px;
  }
  .echart-view{
    width: 100%;
    height: 100%;
  }
</style>