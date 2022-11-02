<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-1" id="chart-charging-habits-1"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits2" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-2" id="chart-charging-habits-2"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-3" id="chart-charging-habits-3"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
    <el-col class="" :span="24">
      <charts-card :cardInfo="chargingHabits4" :viewType='viewType'>
        <div slot="chart" class="echart-view" ref="chart-charging-habits-4" id="chart-charging-habits-4"></div>
      </charts-card>  
    </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits5" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-5" id="chart-charging-habits-5"></div>
        </charts-card>  
      </el-col>
    </el-row>  

    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="chargingHabits6" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-6" id="chart-charging-habits-6"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="chargingHabits7" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-7" id="chart-charging-habits-7"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <strong class="mgl-l mgr-m">充电桩类型</strong> 
      <el-radio-group v-model="chargeType" size="medium" @change="changeChargeType">
        <el-radio-button label="慢充"></el-radio-button>
        <el-radio-button label="快充"></el-radio-button>
      </el-radio-group>
    </el-row>  
    <el-row v-if="chargeType == '慢充'" :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits81" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-81" id="chart-charging-habits-81"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row v-if="chargeType == '快充'" :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits82" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-82" id="chart-charging-habits-82"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row v-if="chargeType == '慢充'" :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits91" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-91" id="chart-charging-habits-91"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row v-if="chargeType == '快充'" :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="chargingHabits92" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-charging-habits-92" id="chart-charging-habits-92"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import {selectSOCDistributionOfSecondaryCharge, selectSecondaryChargeEnergyDistribution, selectTimeDistributionOfSecondaryCharging,
    selectWeeklyChargingFrequency, selectChargingTimesPerDay, selectNumberOfChargingPoints, selectPercentageOfMaximumChargingLocations,
    selectDurationOfEachCharge, selectChargingPower} from '@/api/chargingBehavior'
  export default {
    name: 'chargingHabits',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
        chargeType:'慢充',
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
          title:'次充电电量分布',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
          chartTitle:'次充电电量(度)',
          definition:'统计期间内每辆车每次充电的电量。计算逻辑为统计期间内每辆车每次充电结束时的电量-该次充电开始时的电量。',
          range:'',
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
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
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
          range:'0:每周充电0次,1:每周充电1次',
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
          range:'0:0次,1:1次',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits6:{
          xAxisData:['0-3', '4-6', '7-9', '10-12', '13-15', '16-18','19-21','22-24','25-27','28-30','30及以上'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'充电地点数分布',
          subTitleNum:'统计充电地点',
          subTitlePercent:'统计充电地点占比',
          chartTitle:'充电地点数(个)',
          definition:'统计期间内每辆车使用过的充电地点数量。',
          range:'',
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
        chargingHabits81:{
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
        chargingHabits82:{
          xAxisData:['0-10分钟','10-20分钟','20-30分钟','30-40分钟','40-50分钟','50-60分钟','60-70分钟','70-80分钟','80-90分钟','90-100分钟','100-110分钟','110-120分钟','120分钟及以上',],
          seriesNumData:[],
          seriesPercentData:[],
          title:'次充电时长分布',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
          chartTitle:'快充充电时长(min)',
          definition:'统计期间内每辆车每次充电的时长。',
          range:'0-10分钟:小于10分钟,10-20分钟:≥10min-<20min',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits91:{
          xAxisData:['3.6','7.2','11'],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'次充电时长分布',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
          chartTitle:'慢充充电功率(kw)',
          definition:'统计期间内每辆车每次充电时的峰值/平均功率。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        chargingHabits92:{
          xAxisData:['10','20','30','40','50','60','70','80','90','100','110','120','130','140','150','160','170','180'],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'次充电时长分布',
          subTitleNum:'统计充电次数',
          subTitlePercent:'统计充电次数占比',
          chartTitle:'快充充电功率(kw)',
          definition:'统计期间内每辆车每次充电时的峰值/平均功率。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
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
          this.generateChartChargingHabits1()
          this.generateChartChargingHabits2()
          this.generateChartChargingHabits3()
          this.generateChartChargingHabits4()
          this.generateChartChargingHabits5()
          this.generateChartChargingHabits6()
          this.generateChartChargingHabits7()
          this.generateChartChargingHabits81()
          this.generateChartChargingHabits91()
        })
      },
      generateEchart(){
        this.getChargingHabitsData1()
        this.getChargingHabitsData2()
        this.getChargingHabitsData3()
        this.getChargingHabitsData4()
        this.getChargingHabitsData5()
        this.getChargingHabitsData6()
        this.getChargingHabitsData7()
        this.getChargingHabitsData8()
        this.getChargingHabitsData9()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },

      //次充电SOC分布
      getChargingHabitsData1(){
        selectSOCDistributionOfSecondaryCharge(this.formDataParams).then((res)=>{
          this.chargingHabits1.seriesNumData1 = res.data.data.yStartValueDataList
          this.chargingHabits1.seriesNumData2 = res.data.data.yFortyValueDataList
          this.chargingHabits1.seriesPercentData1 = res.data.data.yEndValueDataList
          this.chargingHabits1.seriesPercentData2 = res.data.data.yEndPropDataList
        }).finally(()=>{
          if(this.chargingHabits1.seriesNumData1.length==0){
            this.chargingHabits1.seriesNumData1 = [110,280,210,170,120,90,30,20,10,10]
            this.chargingHabits1.seriesNumData2 = [140,160,230,270,220,150,100,50,40,10]
            this.chargingHabits1.seriesPercentData1 = [11,28,21,17,12,9,3,2,1,1]
            this.chargingHabits1.seriesPercentData2 = [14,16,23,27,22,15,10,5,4,1]
          }
          this.generateChartChargingHabits1()
        })
      },
      generateChartChargingHabits1(){
        let myChart = this.$echarts.init(this.$refs['chart-charging-habits-1']);
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
        chartOption.legend = {
          data: ['次充电起始SOC', '次充电结束SOC',]
        },
        chartOption.series = [
          {
            name: '次充电起始SOC',
            type: 'line',
            data:this.viewType?this.chargingHabits1.seriesPercentData1:this.chargingHabits1.seriesNumData1,
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
            name: '次充电结束SOC',
            type: 'line',
            data:this.viewType?this.chargingHabits1.seriesPercentData2:this.chargingHabits1.seriesNumData2,
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

      //次充电电量分布
      getChargingHabitsData2(){
        selectSecondaryChargeEnergyDistribution(this.formDataParams).then((res)=>{
          this.chargingHabits2.seriesNumData = res.data.data.yValueDataList
          this.chargingHabits2.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.chargingHabits2.seriesNumData.length==0){
            this.chargingHabits2.seriesNumData = [10,30,40,60,50,70,60,50,40,30,20,30,40,60,90,160,90,80,70,60]
            this.chargingHabits2.seriesPercentData = [1,3,4,6,5,7,6,5,4,3,2,3,4,6,9,16,9,8,7,6]
          }
          this.generateChartChargingHabits2()
        })
      },
      generateChartChargingHabits2(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-2']);
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
              name: '车辆数量',
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

      //次充电时刻分布
      getChargingHabitsData3(){
        selectTimeDistributionOfSecondaryCharging(this.formDataParams).then((res)=>{
          this.chargingHabits3.seriesNumData1 = res.data.data.yStartValueDataList
          this.chargingHabits3.seriesNumData2 = res.data.data.yFortyValueDataList
          this.chargingHabits3.seriesPercentData1 = res.data.data.yEndValueDataList
          this.chargingHabits3.seriesPercentData2 = res.data.data.yEndPropDataList
        }).finally(()=>{
          if(this.chargingHabits3.seriesNumData1.length==0){
            this.chargingHabits3.seriesNumData1 = [110,280,210,170,120,90,30,20,10,10]
            this.chargingHabits3.seriesNumData2 = [140,160,230,270,220,150,100,50,40,10]
            this.chargingHabits3.seriesPercentData1 = [11,28,21,17,12,9,3,2,1,1]
            this.chargingHabits3.seriesPercentData2 = [14,16,23,27,22,15,10,5,4,1]
          }
          this.generateChartChargingHabits3()
        })
      },
      generateChartChargingHabits3(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-3']);
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
        chartOption.legend = {
          data: ['次充电起始时刻', '次充电结束时刻',]
        },
        chartOption.series = [
          {
            name: '次充电起始时刻',
            type: 'line',
            data:this.viewType?this.chargingHabits3.seriesPercentData1:this.chargingHabits3.seriesNumData1,
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
            name: '次充电结束时刻',
            type: 'line',
            data:this.viewType?this.chargingHabits3.seriesPercentData2:this.chargingHabits3.seriesNumData2,
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

      //周充电频次分布
      getChargingHabitsData4(){
        selectWeeklyChargingFrequency(this.formDataParams).then((res)=>{
          this.chargingHabits4.seriesNumData = res.data.data.yValueDataList
          this.chargingHabits4.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.chargingHabits4.seriesNumData.length==0){
            this.chargingHabits4.seriesNumData = [10,30,40,60,50,70,60,50,40,30,20,30,40,60,90,160,90,80,70,60]
            this.chargingHabits4.seriesPercentData = [1,3,4,6,5,7,6,5,4,3,2,3,4,6,9,16,9,8,7,6]
          }
          this.generateChartChargingHabits4()
        })
      },
      generateChartChargingHabits4(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-4']);
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

      //单日充电次数分布
      getChargingHabitsData5(){
        selectChargingTimesPerDay(this.formDataParams).then((res)=>{
          this.chargingHabits5.seriesNumData1 = res.data.data.yMaxValueDataList
          this.chargingHabits5.seriesNumData2 = res.data.data.ySecondValueDataList
          this.chargingHabits5.seriesPercentData1 = res.data.data.yMaxPropDataList
          this.chargingHabits5.seriesPercentData2 = res.data.data.ySecondPropDataList
        }).finally(()=>{
          if(this.chargingHabits5.seriesNumData1.length==0){
            this.chargingHabits5.seriesNumData1 = [110,280,210,170,120,90,30,20,10,10]
            this.chargingHabits5.seriesNumData2 = [140,160,230,270,220,150,100,50,40,10]
            this.chargingHabits5.seriesPercentData1 = [11,28,21,17,12,9,3,2,1,1]
            this.chargingHabits5.seriesPercentData2 = [14,16,23,27,22,15,10,5,4,1]
          }
          this.generateChartChargingHabits5()
        })
      },
      generateChartChargingHabits5(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-5']);
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
         chartOption.legend = {
          data: ['最多单日充电次数', '次多单日充电次数',]
        },
        chartOption.series = [
          {
            name: '最多单日充电次数',
            type: 'line',
            data:this.viewType?this.chargingHabits5.seriesPercentData1:this.chargingHabits5.seriesNumData1,
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
            name: '次多单日充电次数',
            type: 'line',
            data:this.viewType?this.chargingHabits5.seriesPercentData2:this.chargingHabits5.seriesNumData2,
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

      //充电地点数分布
      getChargingHabitsData6(){
        selectNumberOfChargingPoints(this.formDataParams).then((res)=>{
          this.chargingHabits6.seriesNumData = res.data.data.yValueDataList
          this.chargingHabits6.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.chargingHabits6.seriesNumData.length==0){
            this.chargingHabits6.seriesNumData = [10,30,40,60,50,70,60,50,40,30,20,30,40,60,90,160,90,80,70,60]
            this.chargingHabits6.seriesPercentData = [1,3,4,6,5,7,6,5,4,3,2,3,4,6,9,16,9,8,7,6]
          }
          this.generateChartChargingHabits6()
        })
      },
      generateChartChargingHabits6(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-6']);
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
            data:this.viewType?this.chargingHabits6.seriesPercentData:this.chargingHabits6.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      //最多充电地点占比分布
      getChargingHabitsData7(){
        selectPercentageOfMaximumChargingLocations(this.formDataParams).then((res)=>{
          this.chargingHabits7.seriesNumData = res.data.data.yValueDataList
          this.chargingHabits7.seriesPercentData = res.data.data.yPropDataList
        }).finally(()=>{
          if(this.chargingHabits7.seriesNumData.length==0){
            this.chargingHabits7.seriesNumData = [10,30,40,60,50,70,60,50,40,30,20,30,40,60,90,160,90,80,70,60]
            this.chargingHabits7.seriesPercentData = [1,3,4,6,5,7,6,5,4,3,2,3,4,6,9,16,9,8,7,6]
          }
          this.generateChartChargingHabits7()
        })
      },
      generateChartChargingHabits7(empty){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-7']);
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
            name: '车辆数量',
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

      //次充电时长分布
      getChargingHabitsData8(){
        selectDurationOfEachCharge(this.formDataParams).then((res)=>{
          this.chargingHabits81.seriesNumData = res.data.data.ySlowValueDataList
          this.chargingHabits81.seriesPercentData = res.data.data.ySlowPropDataList
          this.chargingHabits82.seriesNumData = res.data.data.yFastValueDataList
          this.chargingHabits82.seriesPercentData = res.data.data.yFastPropDataList
        }).finally(()=>{
          this.generateChartChargingHabits81()
        })
      },
      generateChartChargingHabits81(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-81']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits82.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits81.xAxisData,
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
            data:this.viewType?this.chargingHabits81.seriesPercentData:this.chargingHabits81.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },
      generateChartChargingHabits82(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-82']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits82.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits82.xAxisData,
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
            data:this.viewType?this.chargingHabits82.seriesPercentData:this.chargingHabits82.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      //充电功率分布
      getChargingHabitsData9(){
        selectChargingPower(this.formDataParams).then((res)=>{
          this.chargingHabits91.seriesNumData1 = res.data.data.yMaxValueDataList
          this.chargingHabits91.seriesPercentData1 = res.data.data.yMaxPropDataList
          this.chargingHabits91.seriesNumData2 = res.data.data.yAvgValueDataList
          this.chargingHabits91.seriesPercentData2 = res.data.data.yAvgPropDataList
          this.chargingHabits92.seriesNumData1 = res.data.data.yMaxValueDataList
          this.chargingHabits92.seriesPercentData1 = res.data.data.yMaxPropDataList
          this.chargingHabits92.seriesNumData2 = res.data.data.yAvgValueDataList
          this.chargingHabits92.seriesPercentData2 = res.data.data.yAvgPropDataList
        }).finally(()=>{
          this.generateChartChargingHabits91()
        })
      },
      generateChartChargingHabits91(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-91']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits91.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits91.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.series = [
          {
            name: '充电次数',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#3893F9'
              }
            },
            data:this.viewType?this.chargingHabits91.seriesPercentData1:this.chargingHabits91.seriesNumData1,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          },
          {
            name: '充电次数',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#81D82B'
              }
            },
            data:this.viewType?this.chargingHabits91.seriesPercentData2:this.chargingHabits91.seriesNumData2,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },
      generateChartChargingHabits92(){
        var myChart = this.$echarts.init(this.$refs['chart-charging-habits-92']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.chargingHabits92.chartTitle
        chartOption.xAxis = {
          data:this.chargingHabits92.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百次)',
        }
        chartOption.series = [
          {
            name: '充电次数',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#3893F9'
              }
            },
            data:this.viewType?this.chargingHabits92.seriesPercentData1:this.chargingHabits92.seriesNumData1,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          },
          {
            name: '充电次数',
            type: 'bar',
            barWidth:'20',
            itemStyle: {
              normal: {
                  color:'#81D82B'
              }
            },
            data:this.viewType?this.chargingHabits92.seriesPercentData2:this.chargingHabits92.seriesNumData2,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          }
        ]
        myChart.setOption(chartOption);
      },

      //切换快慢充
      changeChargeType(){
        if(this.chargeType == "慢充"){
          this.generateChartChargingHabits81()
          this.generateChartChargingHabits91()
        }else{
          this.generateChartChargingHabits82()
          this.generateChartChargingHabits92()
        }
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
  .el-radio-button__inner{
    border-radius: 0 !important;
  }
</style>