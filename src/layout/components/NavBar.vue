<template>
  <div class="navbar">
    <div class="navbar-left">
      <div class="logo"></div>
      <div class="title">新能源车数据洞察</div>
      <el-menu
        :default-active="activeIndex"
        class="navmenu"
        mode="horizontal"
        router
      >
        <el-menu-item index="/dashboard">首页</el-menu-item>
        <el-menu-item index="/drivingBehavior">驾驶行为</el-menu-item>
        <el-menu-item index="/chargeFeature">充电特征</el-menu-item>
        <el-menu-item index="/userPortrait">用户画像</el-menu-item>
        <el-menu-item index="/hotmap">热力图</el-menu-item>
      </el-menu>

    </div>
    <div class="navbar-right">
      <div v-if="!access_token" class="userinfo" @click="linkLogin">请登录</div>
      <div v-else class="userinfo mgl-l">欢迎您</div>
      <i v-if="access_token" class="el-icon-user-solid text-big mgl-l color-whiteText"></i>
      <i class="el-icon-s-tools text-big mgl-l color-whiteText" @click="linkPermission"></i>
    </div>
    <login-modal ref="loginModal"/>
  </div>
</template>

<script>
import LoginModal from './LoginModal.vue'
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeIndex:'/dashboard'
    };
  },
  components:{
    LoginModal
  },
  computed: {
    ...mapGetters(["access_token"]),
  },
  mounted(){
    let params = {
      account:'administrator',
      password:'123456',
    }
    this.$store.dispatch("LoginByUsername", params)
  },
  methods: {
    linkPermission(){
      this.$router.push("/permission")
      this.activeIndex = ''
    },
    linkLogin(){
      this.$refs.loginModal.open()
    }
  },
};
</script>

<style lang="less" scoped>
.navbar {
  background-image: url(@/assets/background/bg-title.png);
  height: 66px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 8px #11335B;
  .navbar-left{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .logo{
    background-image: url(@/assets/logo.png);
    width: 190px;
    height: 66px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
  }
  .title {
    font-size: 26px;
    color: #fff;
    padding: 0 75px 0 25px;
    margin-bottom: 15px;
    letter-spacing:3px;
  }
  .userinfo {
    font-size: 16px;
    color: #fff;
    line-height: 66px;
    cursor: pointer;
  }
  .navbar-right{
    display: flex;
    align-items: center;
  }
  .navmenu {
    height: 48px;
    background: #0063d1;
    &.el-menu.el-menu--horizontal{
      border: none;
    }
    .el-menu-item {
      height: 48px;
      line-height: 48px;
      border-radius: 4px 4px 0 0;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.1);
      width: 120px;
      text-align: center;
      margin: 0 4px;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
    }
    .is-active {
      background: #fff;
      color: #0063d1;
    }
  }
}
</style>
