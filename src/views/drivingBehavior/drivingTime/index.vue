<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-1" id="chart-driven-distance-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-2" id="chart-driven-distance-2"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-3" id="chart-driven-distance-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance4" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-4" id="chart-driven-distance-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance5" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-5" id="chart-driven-distance-5"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
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
        drivenDistance1:{
          xAxisData:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'出行时刻分布',
          subTitleNum:'统计出行次数',
          chartTitle:'出行时刻',
          subTitlePercent:'统计出行次数占比',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0:00,2:00,4:00,6:00, 8:00,10:00,12:00,14:00,16:00,18:00,20:00,22:00,24:00',
          coverRate:'90%',
          dataTotal:'34540',
        },
        drivenDistance2:{
          xAxisData:['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'单次行驶时长分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'单次行驶时长',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0:00, 1:00, 2:00, 3:00, 4:00, 5:00, 6:00, 7:00, 8:00',
          coverRate:'90%',
          dataTotal:'30887',
        },
        drivenDistance3:{
          xAxisData:['0','1','2','3','4','5','6','7','8及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日均出行频次分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'日均出行次数(次)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0,1,2,3,4,5,6,7,8及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance4:{
          xAxisData:['0-0.5', '0.5-1', '1-1.5', '1.5-2','2-2.5','2.5-3','3-3.5','3.5-4','4-4.5','4.5-5','5-5.5','5.5-6','6及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日均行驶时长分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'日均行驶时长(小时)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-0.5, 0.5-1, 1-1.5, 1.5-2,2-2.5,2.5-3,3-3.5,3.5-4,4-4.5,4.5-5,5-5.5,5.5-6,6及以上',
          coverRate:'90%',
          dataTotal:'40214',
        },
        drivenDistance5:{
          xAxisData:['0','1','2','3','4','5','6','7','8','9','10','11及以上',],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日累计出行频次分布',
          subTitleNum:'统计出行总天数',
          subTitlePercent:'统计出行总天数占比',
          chartTitle:'日累计出行频次(次)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
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
        this.generateChartDrivenDistance1()
        this.generateChartDrivenDistance2()
        this.generateChartDrivenDistance3()
        this.generateChartDrivenDistance4()
        this.generateChartDrivenDistance5()
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
        this.getDataFuntion().then((res)=>{
          this.drivenDistance1.seriesNumData = [20,20,20,20,20,40,140,120,180,140,120,140,160,120,80,80,100,100,140,140,140,120,60,60]
          this.drivenDistance1.seriesPercentData = [1,1,1,1,1,2,7,6,9,7,6,7,8,6,4,4,5,5,7,7,7,6,3,3]
          this.generateChartDrivenDistance1()
        })
      },
      generateChartDrivenDistance1(){
        let myChart = this.$echarts.init(this.$refs['chart-driven-distance-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance1.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance1.xAxisData,
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.visualMap = {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 5,
              lt: 10,
              color:'rgba(56, 147, 249, 0.4)'
            },
            {
              gt: 18,
              lt: 22,
              color:'rgba(56, 147, 249, 0.4)'
            }
          ]
        },
        chartOption.series = [
            {
              name: '车辆数量',
              type: 'line',
              step: 'end',
              lineStyle: {
                color: '#5470C6',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivenDistance1.seriesPercentData:this.drivenDistance1.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              areaStyle:{},
            }
        ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData2(){
        this.getDataFuntion().then((res)=>{
          this.drivenDistance2.seriesNumData = [160,180,100,90,40,50,30,10]
          this.drivenDistance2.seriesPercentData = [16,18,10,9,4,5,3,1]
          this.generateChartDrivenDistance2()
        })
      },
      generateChartDrivenDistance2(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance2.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance2.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.visualMap = {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 0,
              lt: 4,
              color:'rgba(56, 147, 249, 0.4)'
            },
          ]
        },
        chartOption.series = [
            {
              name: '车辆数量',
              type: 'line',
              step: 'end',
              lineStyle: {
                color: '#5470C6',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivenDistance2.seriesPercentData:this.drivenDistance2.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              areaStyle:{},
            }
        ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData3(){
        this.getDataFuntion().then((res)=>{
          this.drivenDistance3.seriesNumData = [140,170,120,90,40,30,20,10,10]
          this.drivenDistance3.seriesPercentData = [14,17,12,9,4,3,2,1,1]
          this.generateChartDrivenDistance3()
        })
      },
      generateChartDrivenDistance3(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-3']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance3.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance3.xAxisData,
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
            data:this.viewType?this.drivenDistance3.seriesPercentData:this.drivenDistance3.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData4(){
        this.getDataFuntion().then((res)=>{
          this.drivenDistance4.seriesNumData = [200,400,700,1600,1800,1500,700,600,500,400,300,200,100]
          this.drivenDistance4.seriesPercentData = [2,4,7,16,18,15,7,6,5,4,3,2,1]
          this.generateChartDrivenDistance4()
        })
      },
      generateChartDrivenDistance4(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-4']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance4.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance4.xAxisData,
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
            data:this.viewType?this.drivenDistance4.seriesPercentData:this.drivenDistance4.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData5(){
        this.getDataFuntion().then((res)=>{
          this.drivenDistance5.seriesNumData = [20,30,40,80,120,160,130,20,10,10,10,170]
          this.drivenDistance5.seriesPercentData = [2,3,4,8,12,16,13,2,1,1,1,17]
          this.generateChartDrivenDistance5()
        })
      },
      generateChartDrivenDistance5(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-5']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance5.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance5.xAxisData,
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
            data:this.viewType?this.drivenDistance5.seriesPercentData:this.drivenDistance5.seriesNumData,
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