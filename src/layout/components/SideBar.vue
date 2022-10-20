<template>
  <!-- <el-menu
    class="sidebar-menu"
    :default-active="defaultActive"
    @select="handleSelect"
    router
  >
    <el-menu-item v-for="item in childMenuData" :key="item.index" :index="item.index" >
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
  </el-menu> -->
  <el-tabs class="sidebar-menu" type="card" tab-position="left" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in childMenuData" :key="item.index" :label="item.title" :name="item.index"></el-tab-pane>
  </el-tabs>
</template>

<script>

export default {
  
  computed: {},
  data() {
    return {
      activeName:'',
    }
  },
  props:['childMenuData'],
  methods:{
    handleClick(keyPath) {

    },
    setActiveTab(){
      console.log('set')
      this.activeName = this.childMenuData[0].index
    },
    setDefaultActive(){
      console.log(this.childMenuData)
      this.defaultActive = this.childMenuData[0].index
    }
  }
};
</script>

<style lang="less" scoped>
.app-main {
  background: #f5f5f5;
  height: calc(100% - 40px);
}

</style>