<template>
  <div class="flex">
    <el-form
      :inline="true"
      :model="formData"
      class="form-charge"
      label-position="top"
    >
      <el-form-item label="品牌/车型/配置">
        <el-select class="smail-select" v-model="formData.a" placeholder="品牌">
            <el-option label="全部品牌" value="all"></el-option>
        </el-select>
        <el-select class="smail-select" v-model="formData.a" placeholder="车型">
            <el-option label="全部车型" value="all"></el-option>
        </el-select>
        <el-select class="smail-select" v-model="formData.a" placeholder="配置">
            <el-option label="全部配置" value="all"></el-option>
        </el-select>
      </el-form-item>
  
      <el-form-item label="细分市场">
        <el-select class="middle-select" v-model="formData.a" placeholder="细分市场">
          <el-option label="全部" value="all"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="车辆用途">
        <el-select v-model="formData.b" placeholder="车辆用途">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="" label="时间范围">
        <el-date-picker
          v-model="formData.b"
          type="monthrange"
          range-separator="-"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item class="middle-select" label="是否节假日">
        <el-select v-model="formData.c" placeholder="是否节假日">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="续航里程">
        <el-select v-model="formData.d" placeholder="续航里程">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>  
    </el-form>
    <div class="button-box">
        <el-button type="primary" @click="generateEchart">搜索</el-button>
        <el-button type="default" >重置</el-button>
    </div>
    <!-- <br />
    <el-radio v-model="radio" label="1">显示百分比</el-radio>
    <el-radio v-model="radio" label="2">显示数量</el-radio> -->
  </div>
</template>

<script>
export default {
  name: "topForm-charge",
  data() {
    return {
      formData: {
        value: "",
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
      radio:'1'
    };
  },
  props:['activeName'],
  methods:{
    generateEchart(){
      this.$emit('generateEchart',this.formData)
    }
  }
};
</script>

<style lang="less">
  .smail-select{
    width: 120px;
    margin-right: 4px;
  }
  .middle-select{
    width: 159px;
  }
</style>
