<template>
  <div class="page-box dashboard-page">
    <header class="time-scope">
      <p class="default-font lh-36">时间范围：</p>
      <div class="date-box">
        <el-date-picker
          v-model="timeScope"
          type="monthrange"
          range-separator="-"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker>
        <i class="el-icon-date data_icon"></i>
        <el-button @click="selectBaseInfoListTree">selectBaseInfoListTree</el-button>
        <el-button @click="getDictionaryList">getDictionaryList</el-button>
      </div>
    </header>
    <main class="page-content">
      <div>
        <section class="flex">
          <div><img :src="img1"></div>
        </section>
        <section class="flex">
          <div>
            <div class="flex">
            </div>
            <div class="flex">
            </div>
          </div>
          <table></table>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
// import chartsCard from '@/components/chartsCard.vue'
import { selectBaseInfoListTree, getDictionaryList } from '@/api/dictionary'
export default {
  name: "dash-board",
  components: {
  },
  data() {
    return {
      img1: require("@/assets/blankimg/1.png"),
      timeScope: "",
      cardOotion1: {
        title:'次充电SOC分布',
      },
    };
  },
  methods:{
    selectBaseInfoListTree(){
      selectBaseInfoListTree().then(res=>{
        console.log(res)
      })
    },
    getDictionaryList(){
      getDictionaryList().then(res=>{
        console.log(res)
      })
    }
  }
};
</script>

<style lang="less">
  .dashboard-page {
    height: 100%;
    .time-scope {
      display: flex;
      .date-box {
        color: #0c1243;
        .el-input__icon {
          display: none;
        }
        position: relative;
        width: fit-content;
        .data_icon {
          position: absolute;
          top: 50%;
          right: 17px;
          z-index: 9;
          font-size: 14px;
          transform: translateY(-50%);
        }
        ::v-deep .el-range__close-icon {
          position: absolute;
          right: 34px;
          top: 54%;
          transform: translateY(-50%);
        }
      }
    }
    .page-content {
      margin-top: 10px; 
      height: calc(100% - 46px);
    }
  }
</style>
