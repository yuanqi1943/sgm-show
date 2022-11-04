<template>
  <div class="flex">
    <div class="hop-map-left" :id="'city-hot-map-1-'+city"></div>
    <div class="hop-map-right">
      <div class="text-bold">充电桩总数:  <strong class="text-big color-blueText">{{chargingPileTotal}}</strong></div>
      <p class="mgt-l text-bold">充电桩类型统计</p>
      <div class="echart-view" :ref="'city-hot-map-2-'+city" :id="'city-hot-map-2-'+city"></div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import heatmapData from '@/mockData/heatmapData'
export default {
    name:'cityHotMap',
    data(){
      return{
        chargingPileTotal:400000,
        pieChartOption:{
          title: {},
            tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '20',
            left: 'center'
          },
          series: []
        },
        cityHotMap2:{
          seriesNumData:[],
        }
      }
    },
    props:['city'],
    mounted(){
      this.$nextTick(()=>{
        this.generateChartUserAnalyze1()
      })
    },
    methods:{
      generateEchart(){
        this.greMap()
        this.getCityHotMap2()
      },
      greMap(){
        AMapLoader.load({
            "key": "bbe6b6fc78308d78842f6c43c06ada3f",              // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": ['AMap.Scale','AMap.ToolBar'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap)=>{
            let map = new AMap.Map('city-hot-map-1-'+this.city,{
              resizeEnable: true,
              center: [116.418261, 39.921984],
                zoom: 12
            });
            map.plugin(["AMap.HeatMap"], function () {
            //初始化heatmap对象
            var heatmap;
            heatmap = new AMap.HeatMap(map, {
                radius: 25, //给定半径
                opacity: [0, 0.8]
                /*,
                gradient:{
                    0.5: 'blue',
                    0.65: 'rgb(117,211,248)',
                    0.7: 'rgb(0, 255, 0)',
                    0.9: '#ffea00',
                    1.0: 'red'
                }
                */
            });
            //设置数据集：该数据为北京部分“公园”数据
            heatmap.setDataSet({
                data: heatmapData,
                max: 100
            });
        });
        }).catch(e => {
            console.log(e);
        })
      },
      getDataFuntion(){
      return new Promise((resolve, reject) => {
        resolve(true)
      })
      },
           //性别占比
      getCityHotMap2(){
        this.getDataFuntion(this.formDataParams).then((res)=>{
        }).finally(()=>{
          if(this.cityHotMap2.seriesNumData.length==0){
            this.cityHotMap2.seriesNumData = [
              {name:'快充',value:160000,prop:40},
              {name:'慢充',value:240000,prop:60},
            ]
          }
          this.generateChartUserAnalyze1()
        })
      },
      generateChartUserAnalyze1(){
        let myChart = this.$echarts.init(this.$refs['city-hot-map-2-'+this.city]);
        // 绘制图表
        let chartOption = this.deepClone(this.pieChartOption)
        // chartOption.legend = {
        //   bottom: '20px',
        //   left: 'center',
        // },
        chartOption.series = [
            {
              name: '类型',
              type: 'pie',
              radius: '70%',
              data: this.cityHotMap2.seriesNumData,
              label:{
                show:true,
                position:'inside',
                formatter: function (params) {
                  console.log(params)
                  return params.data.value +' '+params.data.prop+'%';
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
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
    }
}
</script>
<style lang="less" scoped>
  .flex{
    height:calc(100vh - 170px);
  }
  .hop-map-left{
    flex: 1;
  }
  .hop-map-right{
    width: 390px;
    background: #fff;
    border-left: 1px solid #ddd;
    padding:26px 20px;
  }
  .echart-view{
    width: 100%;
    height: 300px;
  }
</style>