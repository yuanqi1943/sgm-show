<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance1">
          <div slot="chart" class="echart-view" ref="chart-driving-time-1" id="chart-driving-time-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance2">
          <div slot="chart" class="echart-view" ref="chart-driving-time-2" id="chart-driving-time-2"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance3">
          <div slot="chart" class="echart-view" ref="chart-driving-time-3" id="chart-driving-time-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance4">
          <div slot="chart" class="echart-view" ref="chart-driving-time-4" id="chart-driving-time-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance5">
          <div slot="chart" class="echart-view" ref="chart-driving-time-5" id="chart-driving-time-5"></div>
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
        }
      }
    },
    props:['viewType'],
    computed:{
      drivenDistance1(){
        return{
          title:'出行时刻分布',
          subTitle:this.viewType=='percent'?'统计出行车辆占比':'统计出行车辆',
          definition:{
            title:'指标业务定义:',
            content:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          },
          range:{
            title:'横轴取值范围:',
            content:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          },
        }
      },
      drivenDistance2(){
        return{
          title:'单次行驶时长分布',
          subTitle:this.viewType=='percent'?'统计出行车辆占比':'统计出行车辆',
          definition:{
            title:'指标业务定义:',
            content:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          },
          range:{
            title:'横轴取值范围:',
            content:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          },
        }
      },
      drivenDistance3(){
        return{
          title:'日均出行频次分布',
          subTitle:this.viewType=='percent'?'统计出行总天数占比':'统计出行总天数',
          definition:{
            title:'指标业务定义:',
            content:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          },
          range:{
            title:'横轴取值范围:',
            content:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          },
        }
      },
      drivenDistance4(){
        return{
          title:'日均行驶时长分布',
          subTitle:this.viewType=='percent'?'统计出行总天数占比':'统计出行总天数',
          definition:{
            title:'指标业务定义:',
            content:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          },
          range:{
            title:'横轴取值范围:',
            content:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          },
        }
      },
      drivenDistance5(){
        return{
          title:'日累计出行频次分布',
          subTitle:this.viewType=='percent'?'统计出行车辆占比':'统计出行车辆数量',
          definition:{
            title:'指标业务定义:',
            content:'每辆车统计期间内平均每次行驶的里程数。计算逻辑为统计期间内每辆车累计行驶里程/统计期间内行驶次数。',
          },
          range:{
            title:'横轴取值范围:',
            content:'0-5, 5-10, 10-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-65, 65-70, 70及以上',
          },
        }
      },
    },
    watch:{
      viewType(newVal){
        console.log(newVal)
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.generateEmptyEchart()
      })
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
          this.generateChartDrivenDistance1('empty')
          this.generateChartDrivenDistance2('empty')
          this.generateChartDrivenDistance3('empty')
          this.generateChartDrivenDistance4('empty')
          this.generateChartDrivenDistance5('empty')
        })
      },
      generateEchart(formData){
        this.generateChartDrivenDistance1()
        this.generateChartDrivenDistance2()
        this.generateChartDrivenDistance3()
        this.generateChartDrivenDistance4()
        this.generateChartDrivenDistance5()
      },
      generateChartDrivenDistance1(empty){
        let xAxisData = ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20,36, 10, 20,36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '次均行驶里程(km)'
        chartOption.xAxis = {
          data:xAxisData
        }
        chartOption.series = [
            {
              name: '出行次数',
              type: 'bar',
              data: seriesNumData,
              label: {
                show: true,
                position: 'top'
              },
            }
          ]
        myChart.setOption(chartOption);
      },
      generateChartDrivenDistance2(empty){
        let xAxisData = ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20,36, 10, 20,36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-2']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '日均行驶里程(km)'
        chartOption.xAxis = {
          data:xAxisData
        }
        chartOption.series = [
            {
              name: '出行次数',
              type: 'bar',
              data: seriesNumData,
              label: {
                show: true,
                position: 'top'
              },
            }
          ]
        myChart.setOption(chartOption);
      },
      generateChartDrivenDistance3(empty){
        let xAxisData = ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20,36, 10, 20,36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-3']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '日累计行驶里程(km)'
        chartOption.xAxis = {
          data:xAxisData
        }
        chartOption.yAxis = {
          type: 'value',
          name: '(单位:百辆)',
        },
        chartOption.series = [
            {
              name: '行驶里程',
              type: 'line',
              data: seriesNumData,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle:{},
              smooth: true
            }
          ]
        myChart.setOption(chartOption);
      },
      generateChartDrivenDistance4(empty){
        let xAxisData = ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20,36, 10, 20,36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-4']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '月度累计行驶里程(km)'
        chartOption.xAxis = {
          boundaryGap: false,
          data:xAxisData
        }
        chartOption.yAxis = {
          type: 'value',
          name: '(单位:百辆)',
        },
        chartOption.series = [
            {
              name: '行驶里程',
              type: 'line',
              data: seriesNumData,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle:{},
              smooth: true
            }
          ]
        myChart.setOption(chartOption);
      },
      generateChartDrivenDistance5(empty){
        let xAxisData = ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20,36, 10, 20,36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driving-time-5']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '次充电行为间累计行驶里程(km)'
        chartOption.xAxis = {
          data:xAxisData
        }
        chartOption.yAxis = {
          type: 'value',
          name: '(单位:百辆)',
        },
        chartOption.visualMap = {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: 'rgba(0, 0, 180, 0.4)'
            },
            {
              gt: 5,
              lt: 7,
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
              data: seriesNumData,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle:{},
              smooth: true
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