<template>
  <div class="echart-box">
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="6">
        <charts-card :cardInfo="userAnalyze1" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-user-analyze-1" id="chart-user-analyze-1"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="18">
        <charts-card :cardInfo="userAnalyze2" :viewType='viewType' :twoChart='true'>
          <div slot="chart1" class="echart-view" ref="chart-user-analyze-21" id="chart-user-analyze-21"></div>
          <div slot="chart2" class="echart-view" ref="chart-user-analyze-22" id="chart-user-analyze-22"></div>
        </charts-card>  
      </el-col>
    </el-row>
    <el-row :gutter="20" class="pdl-s pdr-s">
      <el-col class="" :span="6">
        <charts-card :cardInfo="userAnalyze3" :viewType='viewType'>
          <div slot="chart" class="echart-view" ref="chart-user-analyze-3" id="chart-user-analyze-3"></div>
        </charts-card>  
      </el-col>
      <el-col class="" :span="18">
        <charts-card :cardInfo="userAnalyze4" :viewType='viewType' :twoChart='true' :proportion='[12,12]'>
          <div class="inline-block mgl-l" slot="select">
            <span class="color-primary mgr-s">统计维度:</span>
            <el-select class="small-select" v-model="dimension" placeholder="统计维度">
              <el-option label="居住地" value="居住地"></el-option>
            </el-select>
          </div>
          <div slot="chart1" class="echart-view" ref="chart-user-analyze-41" id="chart-user-analyze-41"></div>
          <div slot="chart2" class="echart-view" id="chart-user-analyze-42">
            <div class="mgt-l">
              <strong class="mgr-m">地域用户数TOP10</strong> 
              <el-radio-group v-model="userAnalyze4.areaUser" size="medium" @change="changeAreaType">
                <el-radio-button label="省级"></el-radio-button>
                <el-radio-button label="市级"></el-radio-button>
              </el-radio-group>
            </div>
            <el-table
              :data="userAnalyze4.areaUserTable"
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
  </div>
</template>

<script>
  import ChartsCard from '@/components/chartsCard.vue'
  import chinaMap from "@/assets/map/json/china.json";
  import chinaCities from "@/assets/map/json/china-cities.json";
  import {selectGenderRatio, selectAgeDistribution, selectResidentCityLevel, selectGeographicalDistribution} from '@/api/userPortrait'
  export default {
    name: 'userAnalyze',
    components:{
      ChartsCard
    },
    data(){
      return{
        name:'',
        isNum:false,
        dimension:'居住地',
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
        userAnalyze1:{
          seriesNumData:[],
          seriesPercentData:[],
          title:'性别占比',
          subTitleNum:'',
          chartTitle:'',
          subTitlePercent:'',
          definition:'统计每辆车车主的性别，分为男性和女性。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        userAnalyze2:{
          xAxisData:['20以下', '21-25', '26-30', '31-35', '36-40', '41-45','46-50','51-55','56-60','61及以上'],
          seriesNumData1:[],
          seriesPercentData1:[],
          seriesNumData2:[],
          seriesPercentData2:[],
          title:'用户年龄分布',
          subTitleNum:'用户数量',
          subTitlePercent:'用户数量占比',
          chartTitle:'百公里电耗(kWh)',
          definition:'指标业务定义：统计每辆车车主当前的年龄。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
        },
        userAnalyze3:{
          xAxisData:['春季','夏季','秋季','冬季'],
          seriesNumData:[],
          seriesPercentData:[],
          title:'用户常驻城市级别分布',
          subTitleNum:'',
          subTitlePercent:'',
          chartTitle:'',
          definition:'统计每辆车购入城市的城市级别，分为直辖市、副省级市、地级市、副地级市、县级市。',
          range:'',
          coverRate:'90%',
          dataTotal:'40214',
          height:476,
        },
        userAnalyze4:{
          areaUser:'市级',
          areaUserCity:[],
          areaUserProv:[],
          areaUserTable:[],
          title:'用户地域分布',
          subTitleNum:'',
          subTitlePercent:'',
          chartTitle:'',
          definition:'统计每辆车购入的省份及城市。',
          range:'',
          coverRate:'90%',
          dataTotal:'45961',
          height:476,
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
        this.generateChartUserAnalyze1()
        this.generateChartUserAnalyze21()
        this.generateChartUserAnalyze22()
        this.generateChartUserAnalyze3()
        this.generateChartUserAnalyze4()
      }
    },
    methods:{
      generateEmptyEchart(){
        this.$nextTick(()=>{
          this.generateChartUserAnalyze1()
          this.generateChartUserAnalyze21()
          this.generateChartUserAnalyze22()
          this.generateChartUserAnalyze3()
          this.generateChartUserAnalyze4()
        })
      },
      generateEchart(){
        this.getUserAnalyze1()
        this.getUserAnalyze2()
        this.getUserAnalyze3()
        this.getUserAnalyze4()
      },
      getDataFuntion(){
        return new Promise((resolve, reject) => {
          resolve(true)
        })
      },

      //性别占比
      getUserAnalyze1(){
        selectGenderRatio(this.formDataParams).then((res)=>{
          this.userAnalyze1.seriesNumData = []
          this.userAnalyze1.seriesPercentData = []
        }).finally(()=>{
          if(this.userAnalyze1.seriesNumData.length==0){
            this.userAnalyze1.seriesNumData = [
              {name:'男性',value:600},
              {name:'女性',value:400},
            ]
            this.userAnalyze1.seriesPercentData = [
              {name:'男性',value:60},
              {name:'女性',value:40},
            ]
          }
          this.generateChartUserAnalyze1()
        })
      },
      generateChartUserAnalyze1(){
        let myChart = this.$echarts.init(this.$refs['chart-user-analyze-1']);
        // 绘制图表
        let chartOption = this.deepClone(this.pieChartOption)
        chartOption.legend = {
          bottom: '50px',
          left: 'center',
        },
        chartOption.series = [
            {
              name: '性别',
              type: 'pie',
              radius: '50%',
              data: this.viewType?this.userAnalyze1.seriesPercentData:this.userAnalyze1.seriesNumData,
              label:{
                show:true,
                position:'inside',
                formatter: function (params) {
                  return params.value+'%';
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 2
              }, 
              emphasis: {
                itemStyle: {
                  shadowBlur: 5,
                  shadowOffsetX: 1,
                  shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
              }
            }
          ]
        myChart.setOption(chartOption);
      },

      //用户年龄分布
      getUserAnalyze2(){
        selectAgeDistribution(this.formDataParams).then((res)=>{
          this.userAnalyze2.seriesNumData1 = res.data.data.valueData
          this.userAnalyze2.seriesPercentData1 = res.data.data.propData
          this.userAnalyze2.seriesNumData2 = res.data.data.yValueDataList
          this.userAnalyze2.seriesPercentData2 = res.data.data.yPropDataList
        })
        .finally(()=>{
          if(this.userAnalyze2.seriesNumData1.length==0){
            this.userAnalyze2.seriesNumData1 = [
              {name:'70后',value:380},
              {name:'80后',value:300},
              {name:'90后',value:170},
              {name:'00后',value:90},
              {name:'其他',value:60},
            ]
            this.userAnalyze2.seriesPercentData1 = [
              {name:'70后',value:38},
              {name:'80后',value:30},
              {name:'90后',value:17},
              {name:'00后',value:9},
              {name:'其他',value:6},
            ]
            this.userAnalyze2.seriesNumData2 = [60,130,180,260,240,130,100,50,30,40]
            this.userAnalyze2.seriesPercentData2 = [6,13,18,26,24,13,10,5,3,4]
          }
          this.generateChartUserAnalyze21()
          this.generateChartUserAnalyze22()
        })
      },
      generateChartUserAnalyze21(){
        let myChart = this.$echarts.init(this.$refs['chart-user-analyze-21']);
        // 绘制图表
        let chartOption = this.deepClone(this.pieChartOption)
        chartOption.series = [
            {
              name: '年龄',
              type: 'pie',
              radius: '50%',
              data: this.viewType?this.userAnalyze2.seriesPercentData1:this.userAnalyze2.seriesNumData1,
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
      generateChartUserAnalyze22(){
        var myChart = this.$echarts.init(this.$refs['chart-user-analyze-22']);
        // 绘制图表
        let chartOption = this.deepClone(this.chartOption)
        chartOption.title.text = this.userAnalyze2.chartTitle
        chartOption.xAxis = {
          data:this.userAnalyze2.xAxisData,
          axisLabel:{interval:'0'}
        }
        chartOption.yAxis = {
          axisLabel:{formatter:this.viewType?'{value}%':'{value}'},
          name: this.viewType?'':'(单位:百人)',
        }
        chartOption.series = [
            {
              name: '车辆数量',
              type: 'line',
              data: this.viewType?this.userAnalyze2.seriesPercentData2:this.userAnalyze2.seriesNumData2,
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
          ]
        myChart.setOption(chartOption);
      },

      //用户常驻城市级别分布
      getUserAnalyze3(){
        selectResidentCityLevel(this.formDataParams).then((res)=>{
          this.userAnalyze3.seriesNumData = res.data.data.valueData
          this.userAnalyze3.seriesPercentData = res.data.data.propData
        })
        .finally(()=>{
          if(this.userAnalyze3.seriesNumData.length==0){
            this.userAnalyze3.seriesNumData = [
              {name:'超一线',value:380},
              {name:'一线',value:300},
              {name:'二线',value:170},
              {name:'三线',value:90},
              {name:'四线',value:60},
            ]
            this.userAnalyze3.seriesPercentData = [
              {name:'超一线',value:38},
              {name:'一线',value:30},
              {name:'二线',value:17},
              {name:'三线',value:9},
              {name:'四线',value:6},
            ]
          }
          this.generateChartUserAnalyze3()
        })
      },
      generateChartUserAnalyze3(){
        var myChart = this.$echarts.init(this.$refs['chart-user-analyze-3']);
        // 绘制图表
        let chartOption = this.deepClone(this.pieChartOption)
        chartOption.series = [
            {
              name: '城市级别分布',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                position: 'inner',
                fontSize: 14,
                formatter: function (params) {
                  return params.value+'%';
                },
              },
              labelLine: {
                show: false
              },
              data: this.viewType?this.userAnalyze3.seriesPercentData:this.userAnalyze3.seriesNumData,
            },
          ]
        myChart.setOption(chartOption);
      },

      //用户地域分布
      getUserAnalyze4(){
        selectGeographicalDistribution(this.formDataParams).then((res)=>{
        }).finally(()=>{
          if(this.userAnalyze4.areaUserCity.length==0){
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
            let areaUserCitySum = this.getArrSum(areaUserCity)
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
            let areaUserProvSum = this.getArrSum(areaUserProv)
            areaUserProv.forEach((item,index)=>{
              if(index == 0){
                item.localProportion = 100 / 2
              }else{
                item.localProportion = item.amount / areaUserCity[0].amount * 100 / 2
              }
            })
            this.userAnalyze4.areaUserCity = areaUserCity,
            this.userAnalyze4.areaUserProv = areaUserProv,
            this.changeAreaType()
            console.log(this.userAnalyze4.areaUserTable)
          }
          this.generateChartUserAnalyze4()
        })
      },
      generateChartUserAnalyze4(){
        this.$echarts.registerMap("china", { geoJSON: chinaMap });
        var myChart = this.$echarts.init(this.$refs['chart-user-analyze-41']);
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
        this.userAnalyze4.areaUserTable = this.userAnalyze4.areaUser == '市级'? this.userAnalyze4.areaUserCity : this.userAnalyze4.areaUserProv
      },
      getArrSum(arr){
        let s = 0;
        arr.forEach(function(item) {
          s += item.amount;
        });
        console.log(s)
        return s
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
  .flex-proportion{
    display: flex;
    align-items: center;
    .area-progress{
      padding-left: 8px;
      padding-left: 20px;
      flex: 1;
      border-radius: 0;
      .el-progress-bar__outer{
        background-color:transparent;
        border-radius:0;
      }
      .el-progress-bar__inner{
        background-color:#3893F9;
        border-radius:0;
      }
    }
  }
</style>