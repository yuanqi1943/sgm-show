<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance1">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-1" id="chart-driven-distance-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance2">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-2" id="chart-driven-distance-2"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance3">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-3" id="chart-driven-distance-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="12">
        <charts-card :cardInfo="drivenDistance4">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-4" id="chart-driven-distance-4"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance5">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-5" id="chart-driven-distance-5"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance6">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-6" id="chart-driven-distance-6"></div>
        </charts-card>  
      </el-col>
    </el-row>  
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="24">
        <charts-card :cardInfo="drivenDistance7">
          <div slot="chart" class="echart-view" ref="chart-driven-distance-7" id="chart-driven-distance-7"></div>
        </charts-card>  
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
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
        }
      }
    },
    props:['viewType'],
    computed:{
      drivenDistance1(){
        return{
          title:'次均行驶里程分布',
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
          title:'日均行驶里程分布',
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
          title:'日累计行驶里程分布',
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
          title:'月累计行驶里程分布',
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
          title:'次充电行为间累计行驶里程分布',
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
      drivenDistance6(){
        return{
          title:'年度长行驶里程分布',
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
      drivenDistance7(){
        return{
          title:'居住地与最远充电距离分布',
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
          this.generateChartDrivenDistance6('empty')
          this.generateChartDrivenDistance7('empty')
        })
      },
      generateEchart(formData){
        this.generateChartDrivenDistance1()
        this.generateChartDrivenDistance2()
        this.generateChartDrivenDistance3()
        this.generateChartDrivenDistance4()
        this.generateChartDrivenDistance5()
        this.generateChartDrivenDistance6()
        this.generateChartDrivenDistance7()
      },
      generateChartDrivenDistance1(empty){
        let xAxisData = ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20,36, 10, 20,36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-1']);
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
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-2']);
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
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-3']);
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
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-4']);
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
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-5']);
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
      generateChartDrivenDistance6(empty){
        let xAxisData = ['0-50', '51-100', '101-150', '151-200', '201-250', '251-300','301-350','351-400','401-450','451-500','501-550','551-600','600及以上']
        let seriesNumData1 = empty?[]:[60, 100, 160, 120, 110, 300, 260, 360, 160, 280, 160, 130, 20]
        let seriesNumData2 = empty?[]:[20, 300, 260, 130, 130, 200, 180, 260, 150, 240, 260, 120, 30]
        let seriesNumData3 = empty?[]:[40, 150, 360, 140, 150, 100, 160, 200, 130, 260, 160, 110, 40]
        let seriesNumData4 = empty?[]:[80, 200, 460, 160, 190, 150, 190, 160, 110, 210, 190, 100, 50]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-6']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '年度最长行驶里程(km)'
        chartOption.xAxis = {
          data:xAxisData
        }
        chartOption.legend = {
          data: ['年度最长行驶里程', '年度第2长行驶里程', '年度第4长行驶里程', '年度第12长行驶里程']
        },
        chartOption.series = [
            {
              name: '年度最长行驶里程',
              type: 'bar',
              data: seriesNumData1,
              label: {
                show: true,
                position: 'top'
              },
            },
            {
              name: '年度第2长行驶里程',
              type: 'bar',
              data: seriesNumData2,
              label: {
                show: true,
                position: 'top'
              },
            },
            {
              name: '年度第4长行驶里程',
              type: 'bar',
              data: seriesNumData3,
              label: {
                show: true,
                position: 'top'
              },
            },
            {
              name: '年度第12长行驶里程',
              type: 'bar',
              data: seriesNumData4,
              label: {
                show: true,
                position: 'top'
              },
            }
          ]
        myChart.setOption(chartOption);
      },
      generateChartDrivenDistance7(empty){
        let xAxisData = ['0-50', '51-100', '101-150', '151-200', '201-250', '251-300','301-350','351-400','401-450','451-500','501-550','551及以上']
        let seriesNumData = empty?[]:[6, 20, 36, 10, 10, 20, 6, 36, 10, 20, 36, 10]
        let seriesPercentData = ['6%','16%', '46%', '6%', '6%', '6%', '6%', '6%', '6%', '6%']
        var myChart = this.$echarts.init(this.$refs['chart-driven-distance-7']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = '居住地与最远充电地距离(km)'
        chartOption.xAxis = {
          data:xAxisData
        }
        chartOption.series = [
            {
              name: '车辆数',
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