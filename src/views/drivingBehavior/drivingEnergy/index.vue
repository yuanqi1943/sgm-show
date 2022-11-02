<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivingEnergy1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-energy-1" id="chart-driving-energy-1"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivingEnergy2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-energy-2" id="chart-driving-energy-2"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import {selectSOCDistributionOfTheSecondDrive, selectPowerConsumptionPerHundred} from '@/api/drivingBehavior'
  export default {
    name: 'drivingEnergy',
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
            right:50,
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
        drivingEnergy1:{
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
        drivingEnergy2:{
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
    props:['viewType','formDataParams'],
    mounted(){
      this.$nextTick(()=>{
        this.generateEmptyEchart()
      })
    },
    watch:{
      viewType(){
        this.generateEmptyEchart()
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
          this.generateDrivingEnergyData1()
          this.generateDrivingEnergyData2()
        })
      },
      generateEchart(){
        this.getDrivingEnergyData1()
        this.getDrivingEnergyData2()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },

      //次行驶SOC分布
      getDrivingEnergyData1(){
        selectSOCDistributionOfTheSecondDrive(this.formDataParams).then((res)=>{
          this.drivingEnergy1.seriesNumData1 = res.data.data.yStartValueDataList
          this.drivingEnergy1.seriesPercentData1 = res.data.data.yStartPropDataList
          this.drivingEnergy1.seriesNumData2 = res.data.data.yEndValueDataList
          this.drivingEnergy1.seriesPercentData2 = res.data.data.yEndPropDataList
        }).finally(()=>{
          if(this.drivingEnergy1.seriesNumData1.length==0){
            this.drivingEnergy1.seriesNumData1 = [40,110,80,50,30,20,10,10,10,10]
            this.drivingEnergy1.seriesNumData2 = [60,90,80,70,50,40,30,20,10,10]
            this.drivingEnergy1.seriesPercentData1 = [4,11,8,5,3,2,1,1,1,1]
            this.drivingEnergy1.seriesPercentData2 = [6,9,8,7,5,4,3,2,1,1]
          }
          this.generateDrivingEnergyData1()
        })
      },
      generateDrivingEnergyData1(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-energy-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingEnergy1.chartTitle
        chartOption.xAxis = {
          data:this.drivingEnergy1.xAxisData,
          axisLabel:{interval:'0'},
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.legend = {
          data: ['次行驶起始SOC', '次行驶结束SOC',]
        },
        chartOption.series = [
          {
            name: '次行驶起始SOC',
            type: 'line',
            data:this.viewType?this.drivingEnergy1.seriesPercentData1:this.drivingEnergy1.seriesNumData1,
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
            data:this.viewType?this.drivingEnergy1.seriesPercentData2:this.drivingEnergy1.seriesNumData2,
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
      getDrivingEnergyData2(){
        selectPowerConsumptionPerHundred(this.formDataParams).then((res)=>{
          this.drivingEnergy2.seriesNumData = res.data.data.yValueDataList
          this.drivingEnergy2.seriesPercentData = res.data.data.yPropDataList
          this.generateDrivingEnergyData2()
        }).finally(()=>{
          if(this.drivingEnergy2.seriesNumData.length==0){
            this.drivingEnergy2.seriesNumData = [60,120,200,250,200,160,120,80,40,20]
            this.drivingEnergy2.seriesPercentData = [6,12,20,25,20,16,12,8,4,2]
          }
          this.generateDrivingEnergyData1()
        })
      },
      generateDrivingEnergyData2(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-energy-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingEnergy2.chartTitle
        chartOption.xAxis = {
          data:this.drivingEnergy2.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.series = [
            {
              name: '出行次数',
              type: 'bar',
              barWidth:'80%',
              itemStyle: {
                normal: {
                    color:'#4FC7AA'
                }
              },
              data:this.viewType?this.drivingEnergy2.seriesPercentData:this.drivingEnergy2.seriesNumData,
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