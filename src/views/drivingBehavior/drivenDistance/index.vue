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
  selectMonthlyAccumulatedMileage, selectSingleChargeMileage, selectAnnualMaximumMileage, selectResidenceAndFarthestChargingDistance} from '@/api/drivingBehavior'
  export default {
    name: 'drivenDistance',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
        formDataParams:{},
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
          xAxisData:['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次均行驶里程分布',
          subTitleNum:'统计出行车辆数量',
          chartTitle:'次均行驶里程(km)',
          subTitlePercent:'统计出行车辆占比',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance2:{
          xAxisData:['0-20', '20-40', '40-60', '60-80', '80-100', '100-120','120-140','140-160','160-180','180-200','200及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日均行驶里程分布',
          subTitleNum:'统计出行车辆数量',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'日均行驶里程(km)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance3:{
          xAxisData:['0-30', '30-60', '60-90', '90-120','120-150','150-180','180-210','210-240','240-270','270-300','300-330','330-360','360及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'日累计行驶里程分布',
          subTitleNum:'统计出行总天数',
          subTitlePercent:'统计出行总天数占比',
          chartTitle:'日累计行驶里程(km)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance4:{
          xAxisData:['0-100', '100-200', '200-300', '300-400','400-500','500-600','600-700','700-800','800-900','900及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'月累计行驶里程分布',
          subTitleNum:'统计出行总天数',
          subTitlePercent:'统计出行总天数占比',
          chartTitle:'月累计行驶里程(km)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance5:{
          xAxisData:[0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次充电行为间累计行驶里程分布',
          subTitleNum:'统计出行车辆数量',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'次充电行为间累计行驶里程(km)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance6:{
          xAxisData:['0-50', '50-100', '100-150', '150-200', '200-250', '250-300','300-350','350-400','400-450','450-500','500-550','550-600','600及以上'],
          seriesNumData1: [],
          seriesNumData2: [],
          seriesNumData3: [],
          seriesNumData4: [],
          seriesPercentData1: [],
          seriesPercentData2: [],
          seriesPercentData3: [],
          seriesPercentData4: [],
          title:'年度长行驶里程分布',
          subTitleNum:'统计出行车辆数量',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'年度最长行驶里程(km)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          coverRate:'90%',
          dataTotal:'45961',
        },
        drivenDistance7:{
          xAxisData:['0-50', '50-100', '100-150', '150-200', '200-250', '250-300','300-350','350-400','400-450','450-500','500-550','550及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'居住地与最远充电距离分布',
          subTitleNum:'统计出行车辆数量',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'居住地与最远充电距离(km)',
          definition:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          range:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
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
        console.log(this.formData)
        this.formDataParams = {}
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

      //次均行驶里程
      getDrivenDistanceData1(){

        getAverageMileageDistribution().then((res)=>{
          this.drivenDistance1.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance1.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance1.seriesNumData.length==0){
            this.drivenDistance1.seriesNumData = [590, 820, 950, 1100, 1190, 810, 680, 495, 460, 360, 300, 130, 90, 40, 30]
            this.drivenDistance1.seriesPercentData = [6,10,13,14,15,10,8,7,6,4,3,2,1,1,1]
          }
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
              data:this.viewType?this.drivenDistance1.seriesPercentData:this.drivenDistance1.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
            }
          ]
        myChart.setOption(chartOption);
      },

      //日均行驶里程
      getDrivenDistanceData2(){
        selectAverageDailyMileage().then((res)=>{
          this.drivenDistance2.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance2.seriesPercentData = res.data.data.yPropDataList
        })
        .finally(()=>{
          if(this.drivenDistance2.seriesNumData.length==0){
            this.drivenDistance2.seriesNumData = [296, 420, 480, 510, 550, 410, 440, 380, 180, 60, 60]
            this.drivenDistance2.seriesPercentData = [9, 12, 14, 15, 16, 12, 10, 8, 5, 2, 2]
          }
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
              data:this.viewType?this.drivenDistance2.seriesPercentData:this.drivenDistance2.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
            }
          ]
        myChart.setOption(chartOption);
      },

      //日累计行驶里程
      getDrivenDistanceData3(){
        selectDailyAccumulatedMileage().then((res)=>{
          this.drivenDistance3.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance3.seriesPercentData = res.data.data.yPropDataList
        })
        .finally(()=>{
          if(this.drivenDistance3.seriesNumData.length==0){
            this.drivenDistance3.seriesNumData = [20, 100, 380, 410, 820, 630, 700, 600, 60, 370, 300, 10, 140]
            this.drivenDistance3.seriesPercentData = [1, 2, 6, 6, 12, 9, 10, 9, 1, 5, 4, 1, 4]
          }
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
              name: '行驶里程',
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

      //月累计行程
      getDrivenDistanceData4(){
        selectMonthlyAccumulatedMileage().then((res)=>{
          this.drivenDistance4.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance4.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance4.seriesNumData.length==0){
            this.drivenDistance4.seriesNumData = [230, 30, 420, 30, 640, 580, 830, 410, 200, 20]
            this.drivenDistance4.seriesPercentData = [5, 1, 8, 1, 13, 12, 18, 8, 4, 1]
          }
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
              name: '行驶里程',
              type: 'line',
              data:this.viewType?this.drivenDistance4.seriesPercentData:this.drivenDistance4.seriesNumData,
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

      //次充电累计行程
      getDrivenDistanceData5(){
        selectSingleChargeMileage().then((res)=>{
          this.drivenDistance5.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance5.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance5.seriesNumData.length==0){
            this.drivenDistance5.seriesNumData = [90,70,100,40,90,700,900,600,740,140,190,120,390,400,420,400,420,80,100,70]
            this.drivenDistance5.seriesPercentData = [1,1,1,1,1,7,9,6,7,1,2,1,4,4,4,4,4,1,1,1]
          }
          this.generateChartDrivenDistance5()
        })
      },
      generateChartDrivenDistance5(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-5']);
        //计算markArea
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
              name: '行驶里程',
              type: 'line',
              step: 'start',
              lineStyle: {
                color: '#3893F9',
                width: 2
              },
              symbol: 'none',
              data:this.viewType?this.drivenDistance5.seriesPercentData:this.drivenDistance5.seriesNumData,
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
                  [{xAxis:'100'},{xAxis:'200'}],
                  [{xAxis:'275'},{xAxis:'400'}]
                ]
              },
            }
        ]
        myChart.setOption(chartOption);
      },

      getDrivenDistanceData6(){
        selectAnnualMaximumMileage().then((res)=>{
          this.drivenDistance6.seriesNumData1 = res.data.data.yMaxValueDataList
          this.drivenDistance6.seriesNumData2 = res.data.data.ySecondValueDataList
          this.drivenDistance6.seriesNumData3 = res.data.data.yFourthValueDataList
          this.drivenDistance6.seriesNumData4 = res.data.data.yTwelfthValueDataList
          this.drivenDistance6.seriesPercentData1 = res.data.data.yMaxPropDataList
          this.drivenDistance6.seriesPercentData2 = res.data.data.ySecondPropDataList
          this.drivenDistance6.seriesPercentData3 = res.data.data.yFourthPropDataList
          this.drivenDistance6.seriesPercentData4 = res.data.data.yTwelfthPropDataList
        }).finally(()=>{
          if(this.drivenDistance6.seriesNumData1.length==0){
            this.drivenDistance6.seriesNumData1 = [0, 20, 280, 480, 550, 580, 340, 280, 180, 260, 160, 130, 120]
            this.drivenDistance6.seriesNumData2 = [1, 10, 180, 410, 450, 520, 440, 380, 190, 180, 120, 80, 50]
            this.drivenDistance6.seriesNumData3 = [2, 40, 180, 310, 350, 410, 540, 480, 230, 160, 90, 60, 30]
            this.drivenDistance6.seriesNumData4 = [3, 50, 100, 210, 310, 480, 640, 580, 300, 100, 60, 40, 10]
            this.drivenDistance6.seriesPercentData1 = [0, 1, 2, 5, 9, 12, 14, 18, 16, 12, 10, 4, 1]
            this.drivenDistance6.seriesPercentData2 = [0, 1, 3, 6, 8, 14, 16, 20, 17, 13, 9, 1, 1]
            this.drivenDistance6.seriesPercentData3 = [1, 2, 4, 8, 12, 16, 19, 23, 20, 16, 10, 1, 1]
            this.drivenDistance6.seriesPercentData4 = [1, 2, 5, 10, 14, 20, 15, 14, 12, 8, 5, 1, 1]
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
          data: ['年度最长行驶里程', '年度第2长行驶里程', '年度第4长行驶里程', '年度第12长行驶里程']
        },
        chartOption.series = [
            {
              name: '年度最长行驶里程',
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
              name: '年度第2长行驶里程',
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
              name: '年度第4长行驶里程',
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
            {
              name: '年度第12长行驶里程',
              type: 'line',
              data:this.viewType?this.drivenDistance6.seriesPercentData4:this.drivenDistance6.seriesNumData4,
              lineStyle:{
                color:'#6C7DA8'
              },
              itemStyle : {
                normal : {
                  color:'#6C7DA8'
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
                      offset: 0, color: '#6C7DA8' // 0% 处的颜色
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

      //居住地与最远充电距离分布
      getDrivenDistanceData7(){
        selectResidenceAndFarthestChargingDistance().then((res)=>{
          this.drivenDistance7.seriesNumData = res.data.data.yValueDataList
          this.drivenDistance7.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.drivenDistance7.seriesNumData.length==0){
            this.drivenDistance7.seriesNumData = [296, 420, 480, 510, 550, 410, 440, 380, 180, 60, 60, 30]
            this.drivenDistance7.seriesPercentData = [1,1,2,7,8,7,4,2,2,2,1,1]
          }
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