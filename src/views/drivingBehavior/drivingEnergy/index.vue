<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance6" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-6" id="chart-driven-distance-6"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance7" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-7" id="chart-driven-distance-7"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import {getAverageMileageDistribution, selectAverageDailyMileage, selectDailyAccumulatedMileage, 
  selectMonthlyAccumulatedMileage, selectSingleChargeMileage, selectAnnualMaximumMileage} from '@/api/drivingBehavior'
  export default {
    name: 'drivenDistance',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
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
        drivenDistance6:{
          xAxisData:['8-10', '10-12','12-14', '14-16','16-18', '18-20','20-22', '22-24','24-26', '26及以上'],
          seriesNumData1: [],
          seriesNumData2: [],
          seriesPercentData1: [],
          seriesPercentData2: [],
          title:'次行驶SOC分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'次行驶起始/结束SOC(%)',
          definition:'统计期间内每辆车每次行驶起始/结束时的SOC。',
          range:'8-10:≥8%-<10%,10-12:≥10%-<12%',
          coverRate:'92%',
          dataTotal:'45961',
        },
        drivenDistance7:{
          xAxisData:['8-10', '10-12','12-14', '14-16','16-18', '18-20','20-22', '22-24','24-26', '26及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次驾驶百公里电耗分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'百公里电耗(kWh)',
          definition:'每辆车统计期间内在纯电行驶情况下的百公里耗电量。',
          range:'8-10:≥8kWh-<10kWh,10-12:≥10kWh-<12kWh',
          coverRate:'92%',
          dataTotal:'40214',
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
        this.generateChartDrivenDistance6()
        this.generateChartDrivenDistance7()
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
          this.generateChartDrivenDistance6()
          this.generateChartDrivenDistance7()
        })
      },
      generateEchart(){
        this.getDrivenDistanceData6()
        this.getDrivenDistanceData7()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },

      //次行驶SOC分布
      getDrivenDistanceData6(){
        selectAnnualMaximumMileage().then((res)=>{
          console.log(res)
        }).finally(()=>{
          if(this.drivenDistance6.seriesNumData1.length==0){
            this.drivenDistance6.seriesNumData1 = [0, 20, 280, 480, 550, 580, 340, 280, 180, 260, 160, 130, 120]
            this.drivenDistance6.seriesNumData2 = [1, 10, 180, 410, 450, 520, 440, 380, 190, 180, 120, 80, 50]
            this.drivenDistance6.seriesPercentData1 = [0, 1, 2, 5, 9, 12, 14, 18, 16, 12, 10, 4, 1]
            this.drivenDistance6.seriesPercentData2 = [0, 1, 3, 6, 8, 14, 16, 20, 17, 13, 9, 1, 1]
          }
          this.generateChartDrivenDistance6()
        })
      },
      generateChartDrivenDistance6(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-6']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance6.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance6.xAxisData,
          axisLabel:{interval:'0'},
          type: 'category',
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
          type: 'value'
        }
        chartOption.legend = {
          data: ['次行驶起始SOC', '次行驶结束SOC']
        },
        chartOption.series = [
            {
              name: '次行驶起始SOC',
              type: 'line',
              data:this.viewType?this.drivenDistance6.seriesPercentData1:this.drivenDistance6.seriesNumData1,
              lineStyle:{
                color:'#3893F9'
              },
              itemStyle : {
                normal : {
                  color:'#3893F9'
                }
              },
              symbol:'circle',
              symbolSize:'8',
              areaStyle: {
                opacity: 0.5,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#3893F9' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                  }],
                  global: false
                }
              },
            },
            {
              name: '次行驶结束SOC',
              type: 'line',
              data:this.viewType?this.drivenDistance6.seriesPercentData2:this.drivenDistance6.seriesNumData2,
              lineStyle:{
                color:'#81D82B'
              },
              itemStyle : {
                normal : {
                  color:'#81D82B'
                }
              },
              symbol:'circle',
              symbolSize:'8',
              areaStyle: {
                opacity: 0.5,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#81D82B' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                  }],
                  global: false
                }
              },
            },
          ]
        myChart.setOption(chartOption);
      },

      //次驾驶百公里电耗分布
      getDrivenDistanceData7(){
        this.getDataFuntion().then((res)=>{
          this.drivenDistance7.seriesNumData = [60,120,200,250,200,160,120,80,40,20]
          this.drivenDistance7.seriesPercentData = [6,12,20,25,20,16,12,8,4,2]
          this.generateChartDrivenDistance7()
        })
      },
      generateChartDrivenDistance7(empty){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-7']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance7.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance7.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
            {
              name: '车辆数',
              type: 'bar',
              barWidth:'80%',
              itemStyle: {
                normal: {
                    color:'#4FC7AA'
                }
              },
              data:this.viewType?this.drivenDistance7.seriesPercentData:this.drivenDistance7.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
            }
          ]
        myChart.setOption(chartOption);
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