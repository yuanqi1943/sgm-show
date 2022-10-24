<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-1" id="chart-driven-distance-1"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-2" id="chart-driven-distance-2"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-3" id="chart-driven-distance-3"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
    <el-col class="" :span="24">
      <charts-card :cardInfo="chargingHabits4" :viewType='viewType'>
        <div slot="chart" class="echart-view" ref="chart-driven-distance-4" id="chart-driven-distance-4"></div>
      </charts-card>  
    </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits5" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-5" id="chart-driven-distance-5"></div>
        </charts-card>  
      </el-col>
    </el-row>  

    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="chargingHabits6" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-6" id="chart-driven-distance-6"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="chargingHabits7" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-7" id="chart-driven-distance-7"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  export default {
    name: 'chargingHabits',
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
        chargingHabits1:{
          xAxisData:['0-10%', '10%-20%', '20%-30%', '40%-50%', '50%-60%', '60%-70%','70%-80%','80%-90%','90%及以上'],
          seriesNumData1: [],
          seriesNumData2: [],
          seriesPercentData1: [],
          seriesPercentData2: [],
          title:'次充电SOC分布',
          subTitleNum:'统计充电次数占比',
          subTitlePercent:'统计充电次数',
          chartTitle:'次充电SOC',
          definition:'统计期间内每辆车每次充电起始/结束时的SOC。',
          range:'0-10%:≥0%-<10%,10%-20%:≥10%-<20%',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits2:{
          xAxisData:['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70-75','75-80','80-85','85-90','95-100'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'统计充电次数占比',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'次充电电量(度)',
          definition:'统计期间内每辆车每次充电的电量。计算逻辑为统计期间内每辆车每次充电结束时的电量-该次充电开始时的电量。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits3:{
          xAxisData:['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19','19-20','20-21','21-22','22-23','23-0','0-1',],
          seriesNumData1: [],
          seriesNumData2: [],
          seriesPercentData1: [],
          seriesPercentData2: [],
          title:'次充电时刻分布',
          subTitleNum:'统计充电次数占比',
          subTitlePercent:'统计充电次数',
          chartTitle:'次充电时刻(时)',
          definition:'统计期间内每辆车每次充电的开始/结束时间。',
          range:'0-1:≥0:00-<01:00,1-2:≥01:00-<02:00',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits4:{
          xAxisData:['0','1','2','3','4','5','6','7次及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'周充电频次分布',
          subTitleNum:'统计车辆',
          subTitlePercent:'统计车辆占比',
          chartTitle:'每周充电频率(次)',
          definition:'统计期间内每辆车每周充电的总次数。',
          range:'0-1:≥0:00-<01:00,1-2:≥01:00-<02:00',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits5:{
          xAxisData:['0','1','2','3','4','5','6次及以上'],
          seriesNumData1: [],
          seriesNumData2: [],
          seriesPercentData1: [],
          seriesPercentData2: [],
          title:'单日充电次数分布',
          subTitleNum:'统计车辆',
          subTitlePercent:'统计车辆占比',
          chartTitle:'单日充电次数(次)',
          definition:'每辆车在统计期间内单日充电次数的最大值/次大值。',
          range:'横轴取值范围:0:0次,1:1次',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits6:{
          xAxisData:['0-3', '4-6', '7-9', '10-12', '13-15', '16-18','19-21','22-24','25-27','28-30','30及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'充电地点数分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'充电地点数(个)',
          definition:'统计期间内每辆车使用过的充电地点数量。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits7:{
          xAxisData:['0-10%', '10%-20%', '20%-30%', '40%-50%', '50%-60%', '60%-70%','70%-80%','80%-90%','90%及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'最多充电地点占比分布',
          subTitleNum:'统计出行车辆数量',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'最多充电地点占比',
          definition:'统计期间内每辆车充电最多的地方的充电次数与该车统计期间内充电总次数的比值。',
          range:'0%-10%:≥0%-<10%,10%-20%:≥10%-<20%',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits8:{
          xAxisData:['4小时以下','4-4.5小时','4.5-5小时','5-5.5小时','5.5-6小时','6-6.5小时','6.5-7小时','7-7.5小时','7.5-8小时','8小时及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次充电时长分布',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
          chartTitle:'慢充充电时长(h)',
          definition:'统计期间内每辆车每次充电的时长。',
          range:'4小时以下:<4h,4-4.5小时:≥4h-<5h',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits9:{
          xAxisData:['0-10分钟', '10-20分钟', '20-30分钟', '40-50分钟', '50-60分钟', '60-70分钟','70-80分钟','80-90分钟','90-100分钟','100-110分钟','110-120分钟','120分钟及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次充电时长分布',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
          chartTitle:'快充充电时长(h)',
          definition:'统计期间内每辆车每次充电的时长。',
          range:'4小时以下:<4h,4-4.5小时:≥4h-<5h',
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
        this.generateChartDrivenDistance1()
        this.generateChartDrivenDistance2()
        this.generateChartDrivenDistance3()
        this.generateChartDrivenDistance4()
        this.generateChartDrivenDistance5()
        this.generateChartDrivenDistance6()
        this.generateChartDrivenDistance7()
        this.generateChartDrivenDistance8()
        this.generateChartDrivenDistance9()
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
          this.generateChartDrivenDistance8()
          this.generateChartDrivenDistance9()
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
        this.getDrivenDistanceData8()
        this.getDrivenDistanceData9()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },
      getDrivenDistanceData1(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits1.seriesNumData = [590, 820, 950, 1100, 1190, 810, 680, 495, 460, 360, 300, 130, 90, 40, 30]
          this.chargingHabits1.seriesPercentData = [6,10,13,14,15,10,8,7,6,4,3,2,1,1,1]
          this.generateChartDrivenDistance1()
        })
      },
      generateChartDrivenDistance1(){
        let myChart = this.$echarts.init(this.$refs['chart-driven-distance-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits1.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits1.xAxisData,
          axisLabel:{interval:'0',}
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
              data:this.viewType?this.chargingHabits1.seriesPercentData:this.chargingHabits1.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
            }
          ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData2(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits2.seriesNumData = [296, 420, 480, 510, 550, 410, 440, 380, 180, 60, 60]
          this.chargingHabits2.seriesPercentData = [9, 12, 14, 15, 16, 12, 10, 8, 5, 2, 2]
          this.generateChartDrivenDistance2()
        })
      },
      generateChartDrivenDistance2(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits2.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits2.xAxisData,
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
              data:this.viewType?this.chargingHabits2.seriesPercentData:this.chargingHabits2.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
            }
          ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData3(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits3.seriesNumData = [20, 100, 380, 410, 820, 630, 700, 600, 60, 370, 300, 10, 140]
          this.chargingHabits3.seriesPercentData = [1, 2, 6, 6, 12, 9, 10, 9, 1, 5, 4, 1, 4]
          this.generateChartDrivenDistance3()
        })
      },
      generateChartDrivenDistance3(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-3']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits3.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits3.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
            {
              name: '行驶里程',
              type: 'line',
              data:this.viewType?this.chargingHabits3.seriesPercentData:this.chargingHabits3.seriesNumData,
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
              areaStyle:{
                color:'#81D82B',
                opacity:0.1,
              },
            }
          ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData4(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits4.seriesNumData = [230, 30, 420, 30, 640, 580, 830, 410, 200, 20]
          this.chargingHabits4.seriesPercentData = [5, 1, 8, 1, 13, 12, 18, 8, 4, 1]
          this.generateChartDrivenDistance4()
        })
      },
      generateChartDrivenDistance4(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-4']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits4.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits4.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.series = [
            {
              name: '行驶里程',
              type: 'line',
              data:this.viewType?this.chargingHabits4.seriesPercentData:this.chargingHabits4.seriesNumData,
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

      getDrivenDistanceData5(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits5.seriesNumData = [90,70,100,40,90,700,900,600,740,140,190,120,390,400,420,400,420,80,100,70]
          this.chargingHabits5.seriesPercentData = [1,1,1,1,1,7,9,6,7,1,2,1,4,4,4,4,4,1,1,1]
          this.generateChartDrivenDistance5()
        })
      },
      generateChartDrivenDistance5(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-5']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits5.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits5.xAxisData,
          axisLabel:{interval:'0'},
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
              gt: 4,
              lt: 8,
              color: 'rgba(0, 0, 180, 0.4)'
            },
            {
              gt: 11,
              lt: 16,
              color: 'rgba(0, 0, 180, 0.4)'
            }
          ]
        },
        chartOption.series = [
            {
              name: '行驶里程',
              type: 'line',
              step: 'start',
              lineStyle: {
                color: '#5470C6',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.chargingHabits5.seriesPercentData:this.chargingHabits5.seriesNumData,
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

      getDrivenDistanceData6(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits6.seriesNumData1 = [0, 20, 280, 480, 550, 580, 340, 280, 180, 260, 160, 130, 120]
          this.chargingHabits6.seriesNumData2 = [1, 10, 180, 410, 450, 520, 440, 380, 190, 180, 120, 80, 50]
          this.chargingHabits6.seriesNumData3 = [2, 40, 180, 310, 350, 410, 540, 480, 230, 160, 90, 60, 30]
          this.chargingHabits6.seriesNumData4 = [3, 50, 100, 210, 310, 480, 640, 580, 300, 100, 60, 40, 10]
          this.chargingHabits6.seriesPercentData1 = [0, 1, 2, 5, 9, 12, 14, 18, 16, 12, 10, 4, 1]
          this.chargingHabits6.seriesPercentData2 = [0, 1, 3, 6, 8, 14, 16, 20, 17, 13, 9, 1, 1]
          this.chargingHabits6.seriesPercentData3 = [1, 2, 4, 8, 12, 16, 19, 23, 20, 16, 10, 1, 1]
          this.chargingHabits6.seriesPercentData4 = [1, 2, 5, 10, 14, 20, 15, 14, 12, 8, 5, 1, 1]
          this.generateChartDrivenDistance6()
        })
      },
      generateChartDrivenDistance6(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-6']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits6.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits6.xAxisData,
          axisLabel:{interval:'0'},
          type: 'category',
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
          type: 'value'
        }
        chartOption.legend = {
          data: ['年度最长行驶里程', '年度第2长行驶里程', '年度第4长行驶里程', '年度第12长行驶里程']
        },
        chartOption.series = [
            {
              name: '年度最长行驶里程',
              type: 'line',
              data:this.viewType?this.chargingHabits6.seriesPercentData1:this.chargingHabits6.seriesNumData1,
              areaStyle:{
                color:'#3893F9',
                opacity:0.1,
              },
              lineStyle:{
                color:'#3893F9'
              },
              itemStyle : {
                normal : {
                  color:'#3893F9'
                }
              },
              symbol:'circle',
              symbolSize:'8'
            },
            {
              name: '年度第2长行驶里程',
              type: 'line',
              data:this.viewType?this.chargingHabits6.seriesPercentData2:this.chargingHabits6.seriesNumData2,
              areaStyle:{
                color:'#81D82B',
                opacity:0.1,
              },
              lineStyle:{
                color:'#81D82B'
              },
              itemStyle : {
                normal : {
                  color:'#81D82B'
                }
              },
              symbol:'circle',
              symbolSize:'8'
            },
            {
              name: '年度第4长行驶里程',
              type: 'line',
              data:this.viewType?this.chargingHabits6.seriesPercentData3:this.chargingHabits6.seriesNumData3,
              areaStyle:{
                color:'#93C602',
                opacity:0.1,
              },
              lineStyle:{
                color:'#93C602'
              },
              itemStyle : {
                normal : {
                  color:'#93C602'
                }
              },
              symbol:'circle',
              symbolSize:'8'
            },
            {
              name: '年度第12长行驶里程',
              type: 'line',
              data:this.viewType?this.chargingHabits6.seriesPercentData4:this.chargingHabits6.seriesNumData4,
              areaStyle:{
                color:'#6C7DA8',
                opacity:0.1,
              },
              lineStyle:{
                color:'#6C7DA8'
              },
              itemStyle : {
                normal : {
                  color:'#6C7DA8'
                }
              },
              symbol:'circle',
              symbolSize:'8'
            }
          ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData7(){
        this.getDataFuntion().then((res)=>{
          this.chargingHabits7.seriesNumData = [296, 420, 480, 510, 550, 410, 440, 380, 180, 60, 60, 30]
          this.chargingHabits7.seriesPercentData = [1,1,2,7,8,7,4,2,2,2,1,1]
          this.generateChartDrivenDistance7()
        })
      },
      generateChartDrivenDistance7(empty){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-7']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits7.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits7.xAxisData,
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
              barWidth:'20',
              itemStyle: {
                normal: {
                    color:'#3893F9'
                }
              },
              data:this.viewType?this.chargingHabits7.seriesPercentData:this.chargingHabits7.seriesNumData,
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