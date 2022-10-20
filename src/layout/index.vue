<template>
  <div class="app-wrapper">
    <nav-bar ref="navbar"/>
    <div class="main-box flex">
      <!-- <side-bar v-show="childMenuData.length>1" ref="sidebar" :childMenuData='childMenuData'/> -->
      <section class="app-main warp flex">
        <keep-alive>
          <router-view/>
        </keep-alive>  
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '@/layout/components/NavBar'
// import SideBar from '@/layout/components/SideBar'
export default {
  name: 'lay-out',
  components: {
    NavBar,
  },
  data() {
    return {
      // 二级菜单 首页没有二级菜单为空数组
      childMenuData: []
    }
  },
  created(){
    if(this.$route.path != '/dashboard'){
      this.$router.push('/dashboard')
    }
  },
  computed: {},
  watch: {
    // $route(to, from) {
    //   // 输入跳转后将当前路由存起来 刷新的时候获取
    //   sessionStorage.setItem("keyPath", to.path);
    // },
  },
  methods: {
    getChildMenuData(keyPath){
      if(keyPath=='dashboard'){
        this.childMenuData = [
          {index:'/dashboard',title:'首页'},
        ]
      }
      if(keyPath=='drivingBehavior'){
        this.childMenuData = [
          {index:'/drivingBehavior/drivenDistance',title:'行驶里程'},
          {index:'/drivingBehavior/drivingTime',title:'行驶时间'},
          {index:'/drivingBehavior/drivingSpeed',title:'行驶速度'},
          {index:'/drivingBehavior/drivingSpeed',title:'行驶能耗'},
          {index:'/drivingBehavior/drivingSpeed',title:'车辆行为'},
        ]
      }
      if(keyPath=='chargingBehavior'){
        this.childMenuData = [
          {index:'/chargingBehavior/chargingHabits',title:'充电习惯'},
        ]
      }
      if(keyPath=='userPortrait'){
        this.childMenuData = [
          {index:'/userPortrait/userAnalysis',title:'用户分析'},
          {index:'/userPortrait/orderAnalysis',title:'订单分析'},
        ]
      }
      if(keyPath=='userPortrait'){
        this.childMenuData = [
          {index:'/userPortrait/userAnalysis',title:'用户分析'},
          {index:'/userPortrait/orderAnalysis',title:'订单分析'},
        ]
      }
      if(keyPath=='heatmap'){
        this.childMenuData = [
          {index:'/heatmap',title:'热力图'},
        ]
      }
      this.$nextTick(()=>{
        this.setSidebarDefaultActive()
      })
    },
    setSidebarDefaultActive(){
      if(this.childMenuData.length>0){
        this.$refs.sidebar.setDefaultActive()
        this.$router.push({
            path: this.childMenuData[0].index
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>


</style>
