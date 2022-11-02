<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivingTime1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-time-1" id="chart-driving-time-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivingTime2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-time-2" id="chart-driving-time-2"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivingTime3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-time-3" id="chart-driving-time-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivingTime4" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-time-4" id="chart-driving-time-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivingTime5" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-time-5" id="chart-driving-time-5"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
import ChartsCard from '@/components/chartsCard.vue'
import {selectTravelTime, selectSingleDrivingDuration, selectAverageDailyTravelFrequency, selectAverageDailyDrivingTime, selectDailyAccumulativeTravelFrequency} from '@/api/drivingBehavior'
  export default {
    name: 'drivingTime',
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
        drivingTime1:{
          xAxisData:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'出行时刻分布',
          subTitleNum:'统计出行次数',
          chartTitle:'出行时刻',
          subTitlePercent:'统计出行次数占比',
          definition:'统计期间内每辆车每次驾驶行为的开始时间。',
          range:'0:00-01:00:≥0:00-<01:00,01:00-02:00:≥01:00-<02:00',
          coverRate:'90%',
          dataTotal:'34540',
        },
        drivingTime2:{
          xAxisData:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'单次行驶时长分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'单次行驶时长',
          definition:'统计期间内每辆车每次行驶的时长。计算逻辑为统计期间内每辆车每次驾驶行为的结束时间-开始时间。',
          range:'0:00-01:00:≥0h-<1h,01:00-02:00:≥1h-<2h',
          coverRate:'90%',
          dataTotal:'30887',
        },
        drivingTime3:{
          xAxisData:['0','1','2','3','4','5','6','7','8及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日均出行频次分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'日均出行次数(次)',
          definition:'统计期间内每辆车平均每天行驶的次数。计算逻辑为统计期间内每辆车的总行驶次数/统计期总天数。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivingTime4:{
          xAxisData:['0-0.5', '0.5-1', '1-1.5', '1.5-2','2-2.5','2.5-3','3-3.5','3.5-4','4-4.5','4.5-5','5-5.5','5.5-6','6及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日均行驶时长分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'日均行驶时长(小时)',
          definition:'统计期间内每辆车平均每天行驶的时长。计算逻辑为统计期间内每辆车的总行驶时长/统计期总天数。',
          range:'0-0.5:≥0h-<0.5h,0.5-1:≥0.5h-<1h',
          coverRate:'90%',
          dataTotal:'40214',
        },
        drivingTime5:{
          xAxisData:['0','1','2','3','4','5','6','7','8','9','10','11及以上',],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日累计出行频次分布',
          subTitleNum:'统计出行总天数',
          subTitlePercent:'统计出行总天数占比',
          chartTitle:'日累计出行频次(次)',
          definition:'统计期间内每辆车每天出行的总次数。',
          range:'0:日累计出行0次,1:日累计出行一次',
          coverRate:'90%',
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
      viewType(newVal){
        this.generateEmptyEchart()
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
          this.generateChartDrivenDistance1()
          this.generateChartDrivenDistance2()
          this.generateChartDrivenDistance3()
          this.generateChartDrivenDistance4()
          this.generateChartDrivenDistance5()
        })
      },
      generateEchart(){
        this.getDrivenDistanceData1()
        this.getDrivenDistanceData2()
        this.getDrivenDistanceData3()
        this.getDrivenDistanceData4()
        this.getDrivenDistanceData5()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },
      getDrivenDistanceData1(){
        selectTravelTime(this.formDataParams).then((res)=>{
          this.drivingTime1.seriesNumData = res.data.data.yValueDataList
          this.drivingTime1.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivingTime1.seriesNumData.length==0){
            this.drivingTime1.seriesNumData = [20,20,20,20,20,40,140,120,180,140,120,140,160,120,80,80,100,100,140,140,140,120,60,60]
            this.drivingTime1.seriesPercentData = [1,1,1,1,1,2,7,6,9,7,6,7,8,6,4,4,5,5,7,7,7,6,3,3]
          }
          this.generateChartDrivenDistance1()
        })
      },
      generateChartDrivenDistance1(){
        let myChart = this.$echarts.init(this.$refs['chart-driving-time-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingTime1.chartTitle
        chartOption.xAxis = {
          data:this.drivingTime1.xAxisData,
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
            {
              name: '车辆数量',
              type: 'line',
              step: 'end',
              lineStyle: {
                color: '#3893F9',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivingTime1.seriesPercentData:this.drivingTime1.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              markArea: {
                silent: true,
                itemStyle: {
                  opacity: 0.3,
                  color:'#3893F9',
                },
                data: [
                  [{xAxis:'6:00'},{xAxis:'14:00'}],
                  [{xAxis:'18:00'},{xAxis:'22:00'}]
                ]
              },
            }
        ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData2(){
        selectSingleDrivingDuration(this.formDataParams).then((res)=>{
          this.drivingTime2.seriesNumData = res.data.data.yValueDataList
          this.drivingTime2.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivingTime1.seriesNumData.length==0){
           this.drivingTime2.seriesNumData = [160,180,100,90,40,50,30,10]
            this.drivingTime2.seriesPercentData = [16,18,10,9,4,5,3,1]
          }
          this.generateChartDrivenDistance2()
        })
      },
      generateChartDrivenDistance2(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingTime2.chartTitle
        chartOption.xAxis = {
          data:this.drivingTime2.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
            {
              name: '车辆数量',
              type: 'line',
              step: 'end',
              lineStyle: {
                color: '#3893F9',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivingTime2.seriesPercentData:this.drivingTime2.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              markArea: {
                silent: true,
                itemStyle: {
                  opacity: 0.3,
                  color:'#3893F9',
                },
                data: [
                  [{xAxis:'0:00'},{xAxis:'4:00'}],
                  [{xAxis:'18:00'},{xAxis:'22:00'}]
                ]
              },
            }
        ]
        myChart.setOption(chartOption);
      },

      //日均出行频次分布
      getDrivenDistanceData3(){
        selectAverageDailyTravelFrequency(this.formDataParams).then((res)=>{
          this.drivingTime3.seriesNumData = res.data.data.yValueDataList
          this.drivingTime3.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivingTime3.seriesNumData.length==0){
            this.drivingTime3.seriesNumData = [140,170,120,90,40,30,20,10,10]
            this.drivingTime3.seriesPercentData = [14,17,12,9,4,3,2,1,1]
          }
          this.generateChartDrivenDistance3()
        })
      },
      generateChartDrivenDistance3(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-3']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingTime3.chartTitle
        chartOption.xAxis = {
          data:this.drivingTime3.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
          {
            name: '出行次数',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#3893F9'
              }
            },
            data:this.viewType?this.drivingTime3.seriesPercentData:this.drivingTime3.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      //日均行驶时长分布
      getDrivenDistanceData4(){
        selectAverageDailyDrivingTime(this.formDataParams).then((res)=>{
          this.drivingTime4.seriesNumData = res.data.data.yValueDataList
          this.drivingTime4.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivingTime4.seriesNumData.length==0){
            this.drivingTime4.seriesNumData = [200,400,700,1600,1800,1500,700,600,500,400,300,200,100]
            this.drivingTime4.seriesPercentData = [2,4,7,16,18,15,7,6,5,4,3,2,1]
          }
          this.generateChartDrivenDistance4()
        })
      },
      generateChartDrivenDistance4(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-4']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingTime4.chartTitle
        chartOption.xAxis = {
          data:this.drivingTime4.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
          {
            name: '车辆数量',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#3893F9'
              }
            },
            data:this.viewType?this.drivingTime4.seriesPercentData:this.drivingTime4.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      //日累计出行频次分布
      getDrivenDistanceData5(){
        selectDailyAccumulativeTravelFrequency(this.formDataParams).then((res)=>{
          this.drivingTime5.seriesNumData = res.data.data.yValueDataList
          this.drivingTime5.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivingTime5.seriesNumData.length==0){
            this.drivingTime5.seriesNumData = [20,30,40,80,120,160,130,20,10,10,10,170]
            this.drivingTime5.seriesPercentData = [2,3,4,8,12,16,13,2,1,1,1,17]
          }
          this.generateChartDrivenDistance5()
        })
      },
      generateChartDrivenDistance5(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-5']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivingTime5.chartTitle
        chartOption.xAxis = {
          data:this.drivingTime5.xAxisData,
          axisLabel:{interval:'0'},
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
          {
            name: '车辆数量',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#3893F9'
              }
            },
            data:this.viewType?this.drivingTime5.seriesPercentData:this.drivingTime5.seriesNumData,
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