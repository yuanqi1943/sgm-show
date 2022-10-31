<template>
  <div
    class="card-border"
    :style="`height: ${cardInfo.height ? cardInfo.height: 430}px;`"
  >
    <div class="charts-title">
      <div>
        <div class="title">{{ cardInfo.title }}</div>
        <el-popover class="description-info" placement="bottom-start" width="358" trigger="hover">
          <div>
            <p class="mgb-l"><strong class="info-title">指标业务定义:</strong>{{cardInfo.definition}}</p>
            <p v-if="cardInfo.range&&cardInfo.range.length"><strong class="info-title">横轴取值范围:</strong>{{cardInfo.range}}</p>
          </div>
          <img slot="reference" class="info-icon" :src="img1">
        </el-popover>
      </div>
      <div class="info-right">
        <span v-if="cardInfo.dataTotal">数据量:{{cardInfo.dataTotal}};</span>
        <span class="mgl-s" v-if="cardInfo.coverRate">数据覆盖率:{{cardInfo.coverRate}}</span>
      </div>
    </div>
    <!-- charts components -->
    <div class="chart-box" style="width:100%;height:calc(100% - 50px)">
      <div v-if="cardInfo.subTitlePercent||cardInfo.subTitleNum" class="sub-title">{{viewType?cardInfo.subTitlePercent:cardInfo.subTitleNum}}</div>
      <slot v-if="!twoChart" class="chart" name="chart"/>
      <el-row v-if="twoChart" class="">
        <el-col class="" :span="proportion?proportion[0]:8">
          <slot class="chart" name="chart1"/>
        </el-col>
        <el-col class="" :span="proportion?proportion[1]:16">
          <slot class="chart" name="chart2"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "chartsCard",
  props: {
    // 卡片信息
    cardInfo: {
      type: Object,
      required: true,
    },
    //展示方式
    viewType:{
      type: Boolean,
      required: true,
    },
    //多个图表
    twoChart:{
      type: Boolean,
      required: false,
    },
    //多个图表比例
    proportion:{
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      img1: require("@/assets/ques.png")
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.card-border {
  border: 1px solid #d4d8e3;
  border-radius: 6px;
  background: #fff;
  .charts-title {
    border-bottom: 1px solid #d4d8e3;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    justify-content: space-between;
    .title {
      font-weight: 700;
      position: relative;
      display: inline-block;
    }
    .title::before {
      content: " ";
      position: absolute;
      left: -16px;
      top: 5px;
      height: 8px;
      width: 8px;
      border-radius: 8px;
      border: 2px solid #0c1243;
    }
    .info-icon{
      vertical-align:top;
      margin-left: 5px;
    }
    .info-right{
      font-size: 14px;
      color: #aaa;
      padding-right: 20px;
    }
  }
  .chart-box{
    display: flex;
    .sub-title{
      width: 40px;
      writing-mode: vertical-rl;
      text-align: center;
      font-size: 12px;
      letter-spacing:3px;
    }
    .chart{
      flex: 1;
    }
    .el-row{
      width: 100%;
    }
    .el-col{
      height: 100%;
    }
  }
}
  ::v-deep .el-table__cell{
    padding: 4px 0;
    font-size: 12px;
  }
  ::v-deep .el-table th.el-table__cell{
    background-color:rgba(56, 147, 249, 0.2)
  }
  ::v-deep .el-radio-button__inner{
    border-radius: 0 !important;
  }
</style>
