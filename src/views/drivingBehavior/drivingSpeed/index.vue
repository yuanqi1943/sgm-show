<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-1" id="chart-driving-speed-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-2" id="chart-driving-speed-2"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-3" id="chart-driving-speed-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance4" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-4" id="chart-driving-speed-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance5" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-5" id="chart-driving-speed-5"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance6" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-6" id="chart-driving-speed-6"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance7" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driving-speed-7" id="chart-driving-speed-7"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
import ChartsCard from '@/components/chartsCard.vue'
import {selectAverageSpeedOfEachDriving, selectMaximumSpeedOfTheSecondDriving, selectMaximumAccelerationOfSecondDriving, 
selectAccumulatedTimesOfRapidAcceleration, selectIdleOrLowSpeedRatio, selectHighSpeedRatio, selectAnnualMaximumSpeed} from '@/api/drivingBehavior'
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
          xAxisData:['0','10','20','30','40','50','60','70','80','90','100','110','120'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次行驶平均速度分布',
          chartTitle:'次行驶平均速度(km/h)',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          definition:'统计期间内每辆车单次驾驶的平均速度。计算逻辑为统计期间内每辆车单次行驶里程/该次行驶时长。',
          range:'0-10:≥0km/h-<10km/h,10-20:≥10km/h-<20km/h',
          coverRate:'90%',
          dataTotal:'34540',
        },
        drivenDistance2:{
          xAxisData:['40','50','60','70','80','90','100','110','120','130','140','150','160'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次行驶最高速度分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'次行驶最高速度(km/h)',
          definition:'统计期间内每辆车每次驾驶期间的最高速度。计算逻辑为取统计期间内每辆车每次驾驶期间速度的最大值。',
          range:'40-50:≥40km/h-<50km/h,50-60:≥50km/h-<60km/h,150-160:≥150km/h',
          coverRate:'92%',
          dataTotal:'30887',
        },
        drivenDistance3:{
          xAxisData:['0.0-0.1','0.1-0.2','0.2-0.3','0.3-0.4','0.4-0.5','0.5-0.6','0.6-0.7','0.7-0.8','0.8-0.9','0.9-1.0'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次行驶最大加速度分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'次行驶最大加速度(g)',
          definition:'统计期间内每辆车每次驾驶期间的最大加速度。计算逻辑为取统计期间内每辆车每次驾驶期间加速度的最大值。',
          range:'0.0-0.1:≥0.0G-<0.1G,0.1-0.2:≥0.1G-<0.2G',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance4:{
          xAxisData:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','14及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次行驶累计急加速次数分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'次行驶累计急加速次数(次)',
          definition:'统计期间内每辆车在每次驾驶期间产生的急加速次数。计算逻辑为Σ统计期间内每辆车在每次驾驶期间的急加速行为。',
          range:'0:急加速0次,1:急加速1次',
          coverRate:'90%',
          dataTotal:'40214',
        },
        drivenDistance5:{
          xAxisData:['0-10%','10%-20%','20%-30%','30%-40%','40%-50%','50%-60%','60%-70%','70%-80%','80%-90%','90%及以上',],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'怠速/低速占比分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'怠速/低速里程占比(%)',
          definition:'怠速占比：统计期间内每辆车每次驾驶期间怠速(速度小于0.5km/h)时长占该次驾驶总时长的比例。低速占比:统计期间内每辆车每次驾驶期间低速(速度小于30km/h)时长占该次驾驶总时长的比例。',
          range:'0-10%:≥0%-<10%,10%-20%:≥10%-<20%',
          coverRate:'90%',
          dataTotal:'40214',
        },
        drivenDistance6:{
          xAxisData:['0-10%','10%-20%','20%-30%','30%-40%','40%-50%','50%-60%','60%-70%','70%-80%','80%-90%','90%及以上',],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          seriesNumData3:[],
          seriesPercentData3:[],
          title:'高速占比分布',
          subTitleNum:'统计出行次数',
          subTitlePercent:'统计出行次数占比',
          chartTitle:'高速里程比例(%)',
          definition:'统计期间内每辆车每次驾驶期间车速连续10min/20min以上达到40/80/120公里/小时以上的里程占该次驾驶总里程的比例。',
          range:'0-10%:≥0%-<10%,10%-20%:≥10%-<20%',
          coverRate:'90%',
          dataTotal:'40214',
        },
        drivenDistance7:{
          xAxisData:['100及以下','100-110','110-120','120-130','130-140','140-150','150-160','160-170','170-180','180-190','190及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'一年最高车速分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'最高车速(km/h)',
          definition:'每辆车近一年车速的最大值。',
          range:'100及以下:≤100km/h100-110:>100km/h-≤110km/h',
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
        this.generateChartDrivenDistance6()
        this.generateChartDrivenDistance7()
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
          this.generateChartDrivenDistance6()
          this.generateChartDrivenDistance7()
        })
      },
      generateEchart(){
        this.getDrivenDistanceData1()
        this.getDrivenDistanceData2()
        this.getDrivenDistanceData3()
        this.getDrivenDistanceData4()
        this.getDrivenDistanceData5()
        this.getDrivenDistanceData6()
        this.getDrivenDistanceData7()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },

      //次行驶平均速度分布
      getDrivenDistanceData1(){
        selectAverageSpeedOfEachDriving().then((res)=>{
          this.drivenDistance1.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance1.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance1.seriesNumData.length==0){
            this.drivenDistance1.seriesNumData = [20,10,20,100,130,100,110,60,70,110,100,40]
            this.drivenDistance1.seriesPercentData = [2,1,2,10,13,10,11,6,7,11,10,4]
          }
          this.generateChartDrivenDistance1()
        })
      },
      generateChartDrivenDistance1(){
        let myChart = this.$echarts.init(this.$refs['chart-driving-speed-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance1.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance1.xAxisData,
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.series = [
            {
              name: '出行次数',
              type: 'line',
              step: 'end',
              lineStyle: {
                color: '#3893F9',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivenDistance1.seriesPercentData:this.drivenDistance1.seriesNumData,
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
                  [{xAxis:'30'},{xAxis:'70'}],
                  [{xAxis:'90'},{xAxis:'110'}]
                ]
              },
            }
        ]
        myChart.setOption(chartOption);
      },

      //次行驶最高速度分布
      getDrivenDistanceData2(){
        selectMaximumSpeedOfTheSecondDriving().then((res)=>{
          this.drivenDistance2.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance2.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance2.seriesNumData.length==0){
            this.drivenDistance2.seriesNumData = [20,30,40,130,110,120,110,100,80,40,20,10]
            this.drivenDistance2.seriesPercentData = [2,3,4,13,11,12,11,10,8,4,2,1]
          }
          this.generateChartDrivenDistance2()
        })
      },
      generateChartDrivenDistance2(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-speed-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance2.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance2.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.series = [
            {
              name: '出行次数',
              type: 'line',
              step: 'end',
              lineStyle: {
                color: '#3893F9',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivenDistance2.seriesPercentData:this.drivenDistance2.seriesNumData,
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
                  [{xAxis:'70'},{xAxis:'130'}],
                ]
              },
            }
        ]
        myChart.setOption(chartOption);
      },

      //次行驶最大加速度分布
      getDrivenDistanceData3(){
        selectMaximumAccelerationOfSecondDriving().then((res)=>{
          this.drivenDistance3.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance3.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance3.seriesNumData.length==0){
            this.drivenDistance3.seriesNumData = [40,20,60,20,10,90,120,70,30,10]
            this.drivenDistance3.seriesPercentData = [4,2,6,2,1,9,12,7,3,1]
          }
          this.generateChartDrivenDistance3()
        })
      },
      generateChartDrivenDistance3(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-speed-3']);
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
              type: 'line',
              data:this.viewType?this.drivenDistance3.seriesPercentData:this.drivenDistance3.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              itemStyle: {
                normal: {
                    color:'#2BB896'
                }
              },
              areaStyle: {
                opacity: 0.5,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#2BB896' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                  }],
                  global: false
                }
              },
            }
        ]
        myChart.setOption(chartOption);
      },

      //次行驶累计急加速次数分布
      getDrivenDistanceData4(){
        selectAccumulatedTimesOfRapidAcceleration().then((res)=>{
          this.drivenDistance4.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance4.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance4.seriesNumData.length==0){
            this.drivenDistance4.seriesNumData = [80,110,110,110,100,80,70,60,50,40,30,10,10,10,10,10]
            this.drivenDistance4.seriesPercentData = [8,11,11,11,10,8,7,6,5,4,3,1,1,1,1,1]
          }
          this.generateChartDrivenDistance4()
        })
      },
      generateChartDrivenDistance4(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-speed-4']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance4.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance4.xAxisData,
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

      //怠速/低速占比分布
      getDrivenDistanceData5(){
        selectIdleOrLowSpeedRatio().then((res)=>{
          this.drivenDistance5.seriesNumData1 = res.data.data.yIdleValueDataList
          this.drivenDistance5.seriesPercentData1 = res.data.data.yIdlePropDataList
          this.drivenDistance5.seriesNumData2 = res.data.data.yLowValueDataList
          this.drivenDistance5.seriesPercentData2 = res.data.data.yLowPropDataList
        }).finally(()=>{
          if(this.drivenDistance5.seriesNumData1.length==0){
            this.drivenDistance5.seriesNumData1 = [40,110,80,50,30,20,10,10,10,10]
            this.drivenDistance5.seriesNumData2 = [60,90,80,70,50,40,30,20,10,10]
            this.drivenDistance5.seriesPercentData1 = [4,11,8,5,3,2,1,1,1,1]
            this.drivenDistance5.seriesPercentData2 = [6,9,8,7,5,4,3,2,1,1]
          }
          this.generateChartDrivenDistance5()
        })
      },
      generateChartDrivenDistance5(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-speed-5']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance5.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance5.xAxisData,
          axisLabel:{interval:'0'},
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.legend = {
          data: ['怠速分布比例', '低速分布比例',]
        },
        chartOption.series = [
          {
            name: '怠速分布比例',
            type: 'line',
            data:this.viewType?this.drivenDistance5.seriesPercentData1:this.drivenDistance5.seriesNumData1,
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
            name: '低速分布比例',
            type: 'line',
            data:this.viewType?this.drivenDistance5.seriesPercentData2:this.drivenDistance5.seriesNumData2,
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

      //高速占比分布
      getDrivenDistanceData6(){
        selectHighSpeedRatio().then((res)=>{
          this.drivenDistance6.seriesNumData1 = res.data.data.yFortyValueDataList
          this.drivenDistance6.seriesNumData2 = res.data.data.yEightValueDataList
          this.drivenDistance6.seriesNumData3 = res.data.data.yFourthValueDataList
          this.drivenDistance6.seriesPercentData1 = res.data.data.yFortyPropDataList
          this.drivenDistance6.seriesPercentData2 = res.data.data.yhTwentyLowValueDataList
          this.drivenDistance6.seriesPercentData3 = res.data.data.yhTwentyPropDataList
        }).finally(()=>{
          if(this.drivenDistance6.seriesNumData1.length==0){
            this.drivenDistance6.seriesNumData1 = [10,10,10,20,40,70,80,60,30,10]
            this.drivenDistance6.seriesNumData2 = [10,10,20,40,80,80,60,40,20,10]
            this.drivenDistance6.seriesNumData3 = [10,10,50,80,80,50,40,30,20,10]
            this.drivenDistance6.seriesPercentData1 = [1,1,1,2,4,7,8,6,3,1]
            this.drivenDistance6.seriesPercentData2 = [1,1,2,4,8,8,6,4,2,1]
            this.drivenDistance6.seriesPercentData3 = [1,1,5,8,8,5,4,3,2,1]
          }
          this.generateChartDrivenDistance6()
        })
      },
      generateChartDrivenDistance6(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-speed-6']);
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
          name: this.viewType?'':'(单位:百次)',
          type: 'value'
        }
        chartOption.legend = {
          data: ['40以上高速占比', '80以上高速占比', '120以上高速占比',]
        },
        chartOption.series = [
            {
              name: '40以上高速占比',
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
              name: '80以上高速占比',
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
            {
              name: '120以上高速占比',
              type: 'line',
              data:this.viewType?this.drivenDistance6.seriesPercentData3:this.drivenDistance6.seriesNumData3,
              lineStyle:{
                color:'#93C602'
              },
              itemStyle : {
                normal : {
                  color:'#93C602'
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
                      offset: 0, color: '#93C602' // 0% 处的颜色
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

      //一年最高车速分布
      getDrivenDistanceData7(){
        selectAnnualMaximumSpeed().then((res)=>{
          this.drivenDistance7.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance7.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance7.seriesNumData.length==0){
            this.drivenDistance7.seriesNumData = [10,10,20,70,80,70,40,20,20,30,10,10]
            this.drivenDistance7.seriesPercentData = [1,1,2,7,8,7,4,2,2,3,1,1]
          }
          this.generateChartDrivenDistance7()
        })
      },
      generateChartDrivenDistance7(){
        var myChart = this.$echarts.init(this.$refs['chart-driving-speed-7']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.drivenDistance4.chartTitle
        chartOption.xAxis = {
          data:this.drivenDistance4.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
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