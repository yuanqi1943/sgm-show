<template>
  <div class="flex">
    <el-form
      :inline="true"
      :model="formData"
      class="form-charge"
      label-position="top"
    >
      <el-form-item label="">
        <el-checkbox v-model="showCharging">显示充电桩分布</el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <el-select class="middle-select" v-model="formData.chargingBrand" placeholder="请选择">
          <el-option v-for="chargingBrand in chargingBrandList" :key="chargingBrand.value" :label="chargingBrand.label" :value="chargingBrand.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-select class="small-select" v-model="formData.chargeType" placeholder="请选择">
          <el-option v-for="chargeType in chargeTypeList" :key="chargeType.value" :label="chargeType.label" :value="chargeType.value"></el-option>
        </el-select>
      </el-form-item>
      <br>
      <el-form-item label="">
        <el-checkbox v-model="showCar">显示车辆分布</el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <el-select class="small-select" v-model="formData.brand" placeholder="品牌" value-key='id'>
            <el-option label="全部品牌" value=""></el-option>
            <el-option v-for="brand in brandList" :key="brand.id" :label="brand.name" :value="brand"></el-option>
        </el-select>
        <el-select class="small-select" v-model="formData.model" placeholder="车型" value-key='id'>
            <el-option label="全部车型" value=""></el-option>
            <el-option v-for="model in modelList" :key="model.id" :label="model.name" :value="model"></el-option>
        </el-select>
        <el-select class="small-select" v-model="formData.config" placeholder="配置" value-key='id'>
            <el-option label="全部配置" value=""></el-option>
            <el-option v-for="config in configList" :key="config.id" :label="config.name" :value="config"></el-option>
        </el-select>
      </el-form-item>
  
      <el-form-item label="">
        <el-select class="middle-select" v-model="formData.market" placeholder="细分市场">
          <el-option v-for="market in marketList" :key="market.label" :label="market.label" :value="market.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="">
        <el-select v-model="formData.useType" placeholder="车辆用途">
          <el-option v-for="use in useList" :key="use.label" :label="use.label" :value="use.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="">
        <el-select v-model="formData.holiday" placeholder="是否节假日">
          <el-option v-for="holiday in holidayList" :key="holiday.label" :label="holiday.label" :value="holiday.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="">
        <el-select v-model="formData.location" placeholder="位置信息">
          <el-option v-for="location in locationList" :key="location.label" :label="location.label" :value="location.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-date" label="">
        <el-date-picker
          v-model="formData.monthrange"
          type="monthrange"
          range-separator="-"
          value-format="yyyy-MM"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div class="button-box">
        <el-button type="primary" @click="generateEchart">查询</el-button>
        <el-button type="default" >重置</el-button>
    </div>
  </div>
</template>

<script>
import {selectBaseInfoListTree} from '@/api/dictionary'
export default {
  name: "topForm-charge",
  data() {
    return {
      formData: {
        chargingBrand:"",
        chargeType:"",
        brand:'',
        model:'',
        config:'',
        market: "",
        useType: "",
        holiday: "",
        location: "",
        monthrange:"",
      },
      showCharging:true,
      showCar:false,
      brandList:[],
      modelList:[],
      configList:[],
      marketList:[
        {label:'全部',value:''},
        {label:'A00级',value:'A00级'},
        {label:'A0级',value:'A0级'},
        {label:'A级',value:'A级'},
        {label:'B级',value:'B级'},
        {label:'C级',value:'C级'},
      ],
      useList:[
        {label:'全部',value:''},
        {label:'非运营',value:'非运营'},
        {label:'运营',value:'运营'},
      ],
      holidayList:[
        {label:'全部',value:''},
        {label:'非节假日',value:'非节假日'},
        {label:'节假日',value:'节假日'},
      ],
      locationList:[
        {label:'全部',value:''},
      ],
      chargeTypeList:[
        {label:'全部',value:''},
        {label:'快充',value:'快充'},
        {label:'慢充',value:'慢充'},
      ],
      chargingBrandList:[
        {label:'全部充电桩品牌',value:''},
        {label:'品牌A',value:'品牌A'},
        {label:'品牌B',value:'品牌B'},
        {label:'品牌C',value:'品牌C'},
      ],
      priceList:[
        {label:'全部',value:''},
        {label:'10-20万',value:'10-20'},
        {label:'20-30万',value:'20-30'},
        {label:'30-40万',value:'30-40'},
      ],
      
    };
  },
  props:['activeName'],
  watch:{
    "formData.brand":{
      handler(newVal){
        this.formData.model = ''
        if(newVal){
          this.modelList = newVal.child
        }else{
          this.changeBrand()
        }
      },
      deep: true,
    },
    "formData.model":{
      handler(newVal){
        this.formData.config = ''
        if(newVal){
          this.configList = newVal.child 
        }else{
          this.changeModel()
        }
      },
      deep: true,
    }
  },
  mounted(){
    this.getBaseInfoListTree()
  },
  methods:{
    generateEchart(){
      this.$emit('generateEchart',this.formData)
    },
    getBaseInfoListTree(){
      selectBaseInfoListTree().then(res=>{
        this.brandList = res.data.data
        this.changeBrand()
        this.changeModel()
      })
    },
    changeBrand(){
      let modelList = []
      this.brandList.forEach(brand=>{
        brand.child.forEach(model=>{
          modelList.push(model)
        })
      })
      this.modelList = modelList
    },
    changeModel(){
      let configList = []
      this.modelList.forEach(model=>{
        configList.push(model)
      })
      this.configList = configList
    }
  }
};
</script>

<style lang="less">
    .button-box{
      padding-top: 34px;
      width: 260px;
    }
  .small-select{
    width: 120px;
    margin-right: 4px;
  }
  .middle-select{
    width: 159px;
  }
  .middle-date{
    width: 224px;
  }
  .el-date-editor--monthrange.el-input, .el-date-editor--monthrange.el-input__inner{
    width: 100%;
  }
</style>