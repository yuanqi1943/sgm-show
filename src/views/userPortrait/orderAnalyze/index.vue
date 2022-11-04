<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="6">
        <charts-card :cardInfo="orderAnalyze1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-order-analyze-1" id="chart-order-analyze-1"></div>
        </charts-card>  
      </el-col>

      <el-col class="" :span="18">
        <charts-card :cardInfo="orderAnalyze2" :viewType='viewType' :twoChart='true' :proportion='[12,12]'>
          <div slot="chart1" class="echart-view" ref="chart-order-analyze-21" id="chart-order-analyze-21"></div>
          <div slot="chart2" class="echart-view" id="chart-order-analyze-22">
            <div class="mgt-l">
              <strong class="mgr-m">地域用户数TOP10</strong> 
              <el-radio-group v-model="orderAnalyze2.areaUser" size="medium" @change="changeAreaType">
                <el-radio-button label="省级"></el-radio-button>
                <el-radio-button label="市级"></el-radio-button>
              </el-radio-group>
            </div>
            <el-table
              :data="orderAnalyze2.areaUserTable"
              class="mgt-m"
              style="width: 100%">
              <el-table-column prop="city" label="城市" width="180"></el-table-column>
              <el-table-column prop="amount" label="用户数量" width="180"></el-table-column>
              <el-table-column prop="proportion" label="用户数量占比">
                <template slot-scope="scope">
                  <div class="flex-proportion">
                    <div>{{scope.row.proportion}}%</div>
                    <el-progress class="area-progress" :stroke-width="12" :percentage="scope.row.localProportion" :show-text='false'></el-progress>
                  </div>
                </template>  
              </el-table-column>
            </el-table>
          </div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="18">
        <charts-card :cardInfo="orderAnalyze3" :viewType='viewType' :twoChart='true' :proportion='[12,12]'>
          <div slot="chart1" class="echart-view" ref="chart-order-analyze-31" id="chart-order-analyze-31"></div>
          <div slot="chart2" class="echart-view" ref="chart-order-analyze-32" id="chart-order-analyze-32"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="6">
        <charts-card :cardInfo="orderAnalyze4" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-order-analyze-4" id="chart-order-analyze-4"></div>
        </charts-card>  
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import chinaMap from "@/assets/map/json/world.json";
  import {selectCarPurchasingCityLevel, selectVehiclePurchasingRegion, selectCarPurchaseAge, selectCarPurchaseTime} from '@/api/userPortrait'
  export default {
    name: 'orderAnalyze',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
        pieChartOption:{
          title: {},
            tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
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
        orderAnalyze1:{
          seriesNumData:[],
          seriesPercentData:[],
          title:'购车城市级别分布',
          subTitleNum:'',
          chartTitle:'',
          subTitlePercent:'',
          definition:'统计每辆车购入城市的城市级别，分为直辖市、副省级市、地级市、副地级市、县级市。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
          height:476,
        },
        orderAnalyze2:{
          areaUser:'市级',
          areaUserCity:[],
          areaUserProv:[],
          areaUserTable:[],
          title:'购车地域分布',
          subTitleNum:'',
          subTitlePercent:'',
          chartTitle:'',
          definition:'统计每辆车购入的省份及城市。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
          height:476,
        },
        orderAnalyze3:{
          xAxisData:['20以下', '21-25', '26-30', '31-35', '36-40', '41-45','46-50','51-55','56-60','61及以上'],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'购车年龄分布',
          subTitleNum:'用户数量',
          subTitlePercent:'用户数量占比',
          chartTitle:'购车年龄(岁)',
          definition:'统计每辆车车主当前的年龄。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        orderAnalyze4:{
          xAxisData:['20以下', '21-25', '26-30', '31-35', '36-40', '41-45','46-50','51-55','56-60','61及以上'],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'购车年龄分布',
          subTitleNum:'用户数量',
          subTitlePercent:'用户数量占比',
          chartTitle:'购车年龄(岁)',
          definition:'统计每辆车车主当前的年龄。',
          range:'',
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
        this.generateEmptyEchart()
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
           this.generateChartOrderAnalyze1()
           this.generateChartOrderAnalyze2()
           this.generateChartOrderAnalyze31()
           this.generateChartOrderAnalyze32()
        })
      },
      generateEchart(){
        this.getOrderAnalyze1()
        this.getOrderAnalyze2()
        this.getOrderAnalyze3()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },
      
      //购车城市级别分布
      getOrderAnalyze1(){
        selectCarPurchasingCityLevel().then((res)=>{
          this.orderAnalyze1.seriesNumData = []
          this.orderAnalyze1.seriesPercentData = []
        }).finally(()=>{
          if(this.orderAnalyze1.seriesNumData.length==0){
            this.orderAnalyze1.seriesNumData = [
              {name:'超一线',value:600},
              {name:'一线',value:400},
              {name:'二线',value:400},
              {name:'三线',value:400},
              {name:'四线',value:400},
            ]
            this.orderAnalyze1.seriesPercentData = [
              {name:'超一线',value:50},
              {name:'一线',value:20},
              {name:'二线',value:15},
              {name:'三线',value:10},
              {name:'四线',value:10},
            ]
          }
          this.generateChartOrderAnalyze1()
        })
      },
      generateChartOrderAnalyze1(){
        let myChart = this.$echarts.init(this.$refs['chart-order-analyze-1']);
        // 绘制图表
        let chartOption = {
          series:[]
        }
        chartOption.series = [
          {
            type: 'treemap',
            left: "center",
            top: "middle",
            width: "90%",
            height: "90%",
            sort: true,
            clipWindow: "origin",
            leafDepth: null,
            animation: true,
            roam: false,
            itemStyle:{
              // borderWidth:4,
              gapWidth:6
            },
            nodeClick: undefined,
            colorAlpha:[0.5,1],
            levels:[
              {color:[
                "rgba(31,134,240,1)",
              ]}
            ],
            breadcrumb: {
              show: false
            },
            data: [
              {
                name: 'nodeA',
                value: 100,
                // children: this.viewType?this.orderAnalyze1.seriesPercentData:this.orderAnalyze1.seriesNumData,
                children:[
                  {name:'超一线',value:50},
                  {name:'一线',value:20},
                  {name:'二线',value:15},
                  {name:'三线',value:10},
                  {name:'四线',value:10},
                ]
              }
            ]
          }
        ]
        myChart.setOption(chartOption);
      },

      //购车地域分布
      getOrderAnalyze2(){
        selectVehiclePurchasingRegion().then((res)=>{
        }).finally(()=>{
          if(this.orderAnalyze2.areaUserCity.length==0){
            let  areaUserCity = [
              {city:'上海',amount:14000,proportion:15},
              {city:'北京',amount:13000,proportion:14},
              {city:'深圳',amount:11000,proportion:13},
              {city:'广州',amount:10000,proportion:13},
              {city:'杭州',amount:6900,proportion:13},
              {city:'成都',amount:6600,proportion:13},
              {city:'苏州',amount:6200,proportion:13},
              {city:'合肥',amount:3900,proportion:13},
              {city:'武汉',amount:3700,proportion:13},
              {city:'长沙',amount:3100,proportion:13},
            ]
            areaUserCity.forEach((item,index)=>{
              if(index == 0){
                item.localProportion = 100 / 2
              }else{
                item.localProportion = item.amount / areaUserCity[0].amount * 100 / 2
              }
            })
            let areaUserProv = [
              {city:'广东',amount:14000,proportion:15},
              {city:'江苏',amount:13000,proportion:14},
              {city:'山东',amount:11000,proportion:13},
              {city:'浙江',amount:10000,proportion:13},
              {city:'上海',amount:6900,proportion:13},
              {city:'北京',amount:6600,proportion:13},
              {city:'四川',amount:6200,proportion:13},
              {city:'河南',amount:3900,proportion:13},
              {city:'山东',amount:3700,proportion:13},
              {city:'附件',amount:3100,proportion:13},
            ]
            areaUserProv.forEach((item,index)=>{
              if(index == 0){
                item.localProportion = 100 / 2
              }else{
                item.localProportion = item.amount / areaUserCity[0].amount * 100 / 2
              }
            })
            this.orderAnalyze2.areaUserCity = areaUserCity,
            this.orderAnalyze2.areaUserProv = areaUserProv,
            this.changeAreaType()
          }
          this.generateChartOrderAnalyze2()
        })
      },
      generateChartOrderAnalyze2(){
        this.$echarts.registerMap("china", { geoJSON: chinaMap });
        var myChart = this.$echarts.init(this.$refs['chart-order-analyze-21']);
        // 绘制图表
        let chartOption = {
            tooltip: {},
            visualMap: {
              min: 0,
              max: 1500,
              left: 'left',
              top: 'bottom',
              text: ['高','低'],
              seriesIndex: [1],
              calculable:false,
              inRange: {
                  color: ['#C5DCFF','#3893F9']
              },
              itemWidth:20,
              itemHeight:80,
              orient:'horizontal',
            },
            geo: {
                map: 'china',
                roam: true,
                label: {
                  normal: {
                    show: false,
                    textStyle: {
                      color: 'rgba(31,134,240,0.4)'
                    }
                  }
                },
                itemStyle: {
                    normal:{
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth:1,
                    },
                },
                scaleLimit:{
                  min:1.25
                } 
            },
                 series : [
                    {
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      symbolSize: 20,
                      symbol: 'none',
                      symbolRotate: 55,
                      label: {
                        normal: {
                          formatter:function(params){
                            return params.value
                          },
                          position: 'right',
                          show: false
                        },
                        emphasis: {
                            show: true
                        }
                      },
                      itemStyle: {
                          normal: {
                            color: '#F06C00'
                          }
                      }
                    },
                    {
                        name: '购车数量(台)',
                        type: 'map',
                        geoIndex: 0,
                        data:[
                            {name: '北京', value: '10'},
                            {name: '天津', value: '111'},
                            {name: '上海', value: '1110'},
                        ]
                    }
                ]
        } 
        myChart.setOption(chartOption);
      },
      changeAreaType(){
        this.orderAnalyze2.areaUserTable = this.orderAnalyze2.areaUser == '市级'? this.orderAnalyze2.areaUserCity : this.orderAnalyze2.areaUserProv
      },

      //购车年龄分布
      getOrderAnalyze3(){
        selectCarPurchaseAge().then((res)=>{
          this.orderAnalyze3.seriesNumData1 = res.data.data.valueData
          this.orderAnalyze3.seriesPercentData1 = res.data.data.propData
          this.orderAnalyze3.seriesNumData2 = res.data.data.yValueDataList
          this.orderAnalyze3.seriesPercentData2 = res.data.data.yPropDataList
        })
        .finally(()=>{
          if(this.orderAnalyze3.seriesNumData1.length==0){
            this.orderAnalyze3.seriesNumData1 = [
              {name:'70后',value:380},
              {name:'80后',value:300},
              {name:'90后',value:170},
              {name:'00后',value:90},
              {name:'其他',value:60},
            ]
            this.orderAnalyze3.seriesPercentData1 = [
              {name:'70后',value:38},
              {name:'80后',value:30},
              {name:'90后',value:17},
              {name:'00后',value:9},
              {name:'其他',value:6},
            ]
            this.orderAnalyze3.seriesNumData2 = [60,130,180,260,240,130,100,50,30,40]
            this.orderAnalyze3.seriesPercentData2 = [6,13,18,26,24,13,10,5,3,4]
          }
          this.generateChartOrderAnalyze31()
          this.generateChartOrderAnalyze32()
        })
      },

      generateChartOrderAnalyze31(){
        let myChart = this.$echarts.init(this.$refs['chart-order-analyze-31']);
        // 绘制图表
        let chartOption = this.deepClone(this.pieChartOption)
        chartOption.series = [
            {
              name: '年龄',
              type: 'pie',
              radius: '50%',
              data: this.viewType?this.orderAnalyze3.seriesPercentData1:this.orderAnalyze3.seriesNumData1,
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

      generateChartOrderAnalyze32(){
        let myChart = this.$echarts.init(this.$refs['chart-order-analyze-32']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.orderAnalyze3.chartTitle
        chartOption.xAxis = {
          data:this.orderAnalyze3.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百人)',
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
            data:this.viewType?this.orderAnalyze3.seriesPercentData:this.orderAnalyze3.seriesNumData,
            label: {
              show: true,
              position: 'top',
              formatter:this.viewType?'{c}%':'{c}'
            },
          },
        ]
        myChart.setOption(chartOption);
      }
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