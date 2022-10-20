<template>
  <div
    class="card-border"
    :style="`height: ${cardInfo.height ? cardInfo.height: 430}px;`"
  >
    <div class="charts-title">
      <div class="title">{{ cardInfo.title }}</div>
      <el-tooltip class="item" effect="light" :content="cardInfo.definition.content" placement="bottom-start">
        <img class="mgl-s" :src="img1">
      </el-tooltip>
    </div>
    <!-- charts components -->
    <div class="chart-box" style="width:100%;height:calc(100% - 50px)">
      <div class="sub-title">{{cardInfo.subTitle}}</div>
      <slot class="chart" name="chart"/>
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
    .title {
      font-weight: 700;
      position: relative;
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
  }
}
</style>
