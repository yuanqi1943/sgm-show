<template>
  <div class="flex">
    <el-form
      :inline="true"
      :model="formData"
      class="form-charge"
      label-position="top"
    >
      <el-form-item label="品牌/车型/配置">
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
  
      <el-form-item label="细分市场">
        <el-select class="middle-select" v-model="formData.market" placeholder="细分市场">
          <el-option v-for="market in marketList" :key="market.label" :label="market.label" :value="market.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="车辆用途">
        <el-select v-model="formData.useType" placeholder="车辆用途">
          <el-option v-for="use in useList" :key="use.label" :label="use.label" :value="use.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-date" label="时间范围">
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
      <el-form-item class="middle-select" label="是否节假日">
        <el-select v-model="formData.holiday" placeholder="是否节假日">
          <el-option v-for="holiday in holidayList" :key="holiday.label" :label="holiday.label" :value="holiday.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="middle-select" label="续航里程">
        <el-select v-model="formData.range" placeholder="续航里程">
          <el-option v-for="mileage in mileageList" :key="mileage.label" :label="mileage.label" :value="mileage.value"></el-option>
        </el-select>
      </el-form-item>  
      
      <el-form-item class="small-select" label="充电桩类型">
        <el-select v-model="formData.chargePileType" placeholder="充电桩类型">
          <el-option v-for="chargeType in chargeTypeList" :key="chargeType.label" :label="chargeType.label" :value="chargeType.value"></el-option>
        </el-select>
      </el-form-item>  
    </el-form>
    <div class="button-box">
        <el-button type="primary" @click="generateEchart">查询</el-button>
        <el-button type="default" @click="reset">重置</el-button>
        <el-button type="default" @click="donwloadOpen">下载</el-button>
    </div>
    <donwload-modal ref="donwloadModal" :chartOptions="activeName" :formDataParams='formDataParams'/>
  </div>
</template>

<script>
import {selectBaseInfoListTree} from '@/api/dictionary'
export default {
  name: "topForm-charge",
  data() {
    return {
      formData: {
        brand:'',
        model:'',
        config:'',
        market: "",
        useType: "",
        holiday: "",
        range: "",
        monthrange:"",
        chargePileType:"",
      },
      radio:'1',
      cascadeList:[],
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
      mileageList:[
        {label:'全部',value:''},
        {label:'400km',value:'400'},
        {label:'500km',value:'500'},
        {label:'600km',value:'600'},
        {label:'800km',value:'800'},
      ],
      chargeTypeList:[
        {label:'全部',value:''},
        {label:'快充',value:'快充'},
        {label:'慢充',value:'慢充'},
      ],
    };
  },
  props:['activeName','formDataParams'],
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
    },
    reset(){
      this.formData = {
        brand:'',
        model:'',
        config:'',
        market: "",
        useType: "",
        holiday: "",
        range: "",
        monthrange:"",
      }
      this.$emit('resetViewType')
    },
    donwloadOpen(){
      this.$refs['donwloadModal'].open()
    },
  }
};
</script>

<style lang="less" scoped>
</style>