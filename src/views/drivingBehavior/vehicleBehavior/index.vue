<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="6">
        <charts-card :cardInfo="vehicleBehavior1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-1" id="chart-driven-distance-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="18">
        <charts-card :cardInfo="vehicleBehavior2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-2" id="chart-driven-distance-2"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="vehicleBehavior3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-3" id="chart-driven-distance-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="vehicleBehavior4" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-driven-distance-4" id="chart-driven-distance-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import {selectDrivingStyle, selectPowerConsumptionHundred, selectConversionRatioOfEndurance, selectActualMileage} from '@/api/drivingBehavior'
  export default {
    name: 'vehicleBehavior',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
        pieChartOption:{
          title: {},
          tooltip: {},
          legend: {
            orient: 'vertical',
            top: 'bottom'
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
        vehicleBehavior1:{
          seriesNumData:[],
          seriesPercentData:[],
          title:'驾驶风格分布',
          subTitleNum:'',
          chartTitle:'',
          subTitlePercent:'',
          definition:'依据新能源车主加速、减速频次判定驾驶风格，包括激进型、保守型、稳健型。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        vehicleBehavior2:{
          xAxisData:['10以下', '10-12', '12-14', '14-16', '16-18', '18-20','20-22','22-24','24-26','26及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'百公里电耗分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'百公里电耗(kWh)',
          definition:'每辆车统计期间内在纯电行驶情况下的百公里耗电量。',
          range:'10以下:<10kWh,10-12:≥10kWh-<12kWh',
          coverRate:'90%',
          dataTotal:'45961',
        },
        vehicleBehavior3:{
          xAxisData:['春季','夏季','秋季','冬季'],
          seriesPercentData1:[],
          seriesPercentData2:[],
          title:'续航折算比',
          subTitleNum:'续航折算比',
          subTitlePercent:'续航折算比',
          chartTitle:'季节',
          definition:'每辆车统计期间内实际续航和额定续航的比率。其中春季为3、4、5月，夏季为6、7、8月，秋季为9、10、11月，冬季为12、1、2月。',
          range:'',
          coverRate:'90%',
          dataTotal:'40214',
        },
        vehicleBehavior4:{
          xAxisData:['400以下','400-450','450-500','500-550','550-600','600-650','650-700','700及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'实际续航里程分布',
          subTitleNum:'统计出行车辆',
          subTitlePercent:'统计出行车辆占比',
          chartTitle:'实际续航里程(km)',
          definition:'每辆车统计期间内实际使用表现的电池续航能力。',
          range:'400以下:<400km,400-450:≥400km-<450km',
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
        this.generateChartVehicleBehavior1()
        this.generateChartVehicleBehavior2()
        this.generateChartVehicleBehavior3()
        this.generateChartVehicleBehavior4()
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
          this.generateChartVehicleBehavior1()
          this.generateChartVehicleBehavior2()
          this.generateChartVehicleBehavior3()
          this.generateChartVehicleBehavior4()
        })
      },
      generateEchart(){
        this.getVehicleBehavior1()
        this.getVehicleBehavior2()
        this.getVehicleBehavior3()
        this.getVehicleBehavior4()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },

      //次均行驶里程
      getVehicleBehavior1(){
        selectDrivingStyle().then((res)=>{
          this.vehicleBehavior1.seriesNumData = []
          this.vehicleBehavior1.seriesPercentData = []
        }).finally(()=>{
          if(this.vehicleBehavior1.seriesNumData.length==0){
            this.vehicleBehavior1.seriesNumData = [
              {name:'平稳型',value:600},
              {name:'激进型',value:400},
            ]
            this.vehicleBehavior1.seriesPercentData = [
              {name:'平稳型',value:60},
              {name:'激进型',value:40},
            ]
          }
          this.generateChartVehicleBehavior1()
        })
      },
      generateChartVehicleBehavior1(){
        let myChart = this.$echarts.init(this.$refs['chart-driven-distance-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.pieChartOption)
        // chartOption.title.text = this.vehicleBehavior1.chartTitle
        chartOption.series = [
            {
              name: '驾驶风格',
              type: 'pie',
              radius: '50%',
              data: this.viewType?this.vehicleBehavior1.seriesPercentData:this.vehicleBehavior1.seriesNumData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 1,
                  shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
              }
            }
          ]
        myChart.setOption(chartOption);
      },

      //日均行驶里程
      getVehicleBehavior2(){
        selectPowerConsumptionHundred().then((res)=>{
          this.vehicleBehavior2.seriesNumData = res.data.data.yValueDataList
          this.vehicleBehavior2.seriesPercentData = res.data.data.yPropDataList
        })
        .finally(()=>{
          if(this.vehicleBehavior2.seriesNumData.length==0){
            this.vehicleBehavior2.seriesNumData = [296, 420, 480, 510, 550, 410, 440, 380, 180, 60, 60]
            this.vehicleBehavior2.seriesPercentData = [9, 12, 14, 15, 16, 12, 10, 8, 5, 2, 2]
          }
          this.generateChartVehicleBehavior2()
        })
      },
      generateChartVehicleBehavior2(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.vehicleBehavior2.chartTitle
        chartOption.xAxis = {
          data:this.vehicleBehavior2.xAxisData,
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
              barWidth:'80%',
              itemStyle: {
                normal: {
                    color:'#2BB896'
                }
              },
              data:this.viewType?this.vehicleBehavior2.seriesPercentData:this.vehicleBehavior2.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
            }
          ]
        myChart.setOption(chartOption);
      },

      //续航折算比
      getVehicleBehavior3(){
        selectConversionRatioOfEndurance().then((res)=>{
          this.vehicleBehavior3.seriesPercentData1 = res.data.data.ySouthDataList
          this.vehicleBehavior3.seriesPercentData2 = res.data.data.yNorthDataList
        })
        .finally(()=>{
          if(this.vehicleBehavior3.seriesPercentData1.length==0){
            this.vehicleBehavior3.seriesPercentData1 = [79,83,80,90]
            this.vehicleBehavior3.seriesPercentData2 = [76,80,84,80]
          }
          this.generateChartVehicleBehavior3()
        })
      },
      generateChartVehicleBehavior3(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-3']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.vehicleBehavior3.chartTitle
        chartOption.xAxis = {
          data:this.vehicleBehavior3.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百辆)',
        }
        chartOption.legend = {
          data: ['南方', '北方',]
        },
        chartOption.series = [
            {
              name: '南方',
              type: 'line',
              data:this.vehicleBehavior3.seriesPercentData1,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              itemStyle: {
                normal: {
                    color:'#3893F9'
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
                      offset: 0, color: '#3893F9' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                  }],
                  global: false
                }
              },
            },
            {
              name: '北方',
              type: 'line',
              data:this.vehicleBehavior3.seriesPercentData2,
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
      getVehicleBehavior4(){
        selectActualMileage().then((res)=>{
          this.vehicleBehavior4.seriesNumData = res.data.data.yValueDataList
          this.vehicleBehavior4.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.vehicleBehavior4.seriesNumData.length==0){
            this.vehicleBehavior4.seriesNumData = [60,30,30,50,90,120,180,140]
            this.vehicleBehavior4.seriesPercentData = [6,3,3,5,9,12,18,14]
          }
          this.generateChartVehicleBehavior4()
        })
      },
      generateChartVehicleBehavior4(){
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-4']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.vehicleBehavior4.chartTitle
        chartOption.xAxis = {
          data:this.vehicleBehavior4.xAxisData,
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
              data:this.viewType?this.vehicleBehavior4.seriesPercentData:this.vehicleBehavior4.seriesNumData,
              label: {
                show: true,
                position: 'top',
                formatter:this.viewType?'{c}%':'{c}'
              },
              barWidth:'20',
              itemStyle: {
                normal: {
                    color:'#3893F9'
                }
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