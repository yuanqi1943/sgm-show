<template>
    <el-dialog title="下载" :visible.sync="dialogVisible">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCharts" @change="handlecheckedChartsChange">
            <el-checkbox class="check-box" v-for="chart in checkboxList" :label="chart.value" :key="chart.name">{{chart.name}}</el-checkbox>
        </el-checkbox-group>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="donwloadFile">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false,
            checkAll: true,
            checkedCharts: [],
            isIndeterminate: false,
            chartList:{
                drivenDistance:[
                    {name:'次均行驶里程分布',value:'selectAverageMileageDistribution'},
                    {name:'日均行驶里程分布',value:'selectAverageDailyMileage'},
                    {name:'日累计行驶里程分布',value:'selectDailyAccumulatedMileage'},
                    {name:'月累计行驶里程分布',value:'selectMonthlyAccumulatedMileage'},
                    {name:'次充电行为间累计行驶里程分布',value:'selectSingleChargeMileage'},
                    {name:'年度长行驶里程分布',value:'selectAnnualMaximumMileage'},
                    {name:'居住地与最远充电距离分布',value:'selectResidenceAndFarthestChargingDistance'},
                ],
                drivingTime:[
                    {name:'出行时刻分布',value:'selectTravelTime'},
                    {name:'单次行驶时长分布',value:'selectSingleDrivingDuration'},
                    {name:'日均出行频次分布',value:'selectAverageDailyTravelFrequency'},
                    {name:'日均行驶时长分布',value:'selectAverageDailyDrivingTime'},
                    {name:'日累计出行频次分布',value:'selectDailyAccumulativeTravelFrequency'},
                ],
                drivingSpeed:[
                    {name:'次行驶平均速度分布',value:'selectAverageSpeedOfEachDriving'},
                    {name:'次行驶最高速度分布',value:'selectMaximumSpeedOfTheSecondDriving'},
                    {name:'次行驶最大加速度分布',value:'selectMaximumAccelerationOfSecondDriving'},
                    {name:'次行驶累计急加速次数分布',value:'selectAccumulatedTimesOfRapidAcceleration'},
                    {name:'怠速/低速占比分布',value:'selectIdleOrLowSpeedRatio'},
                    {name:'高速占比分布',value:'selectHighSpeedRatio'},
                    {name:'一年最高车速分布',value:'selectAnnualMaximumSpeed'},
                ],
                drivingEnergy:[
                    {name:'次行驶SOC分布',value:'selectSOCDistributionOfTheSecondDrive'},
                    {name:'次驾驶百公里电耗分布',value:'selectPowerConsumptionPerHundred'},
                ],
                vehicleBehavior:[
                    {name:'驾驶风格分布',value:'selectDrivingStyle'},
                    {name:'百公里电耗分布',value:'selectPowerConsumptionHundred'},
                    {name:'续航折算比',value:'selectConversionRatioOfEndurance'},
                    {name:'实际续航里程分布',value:'selectActualMileage'},
                ],
                chargeFeature:[
                    {name:'次充电SOC分布',value:'selectSOCDistributionOfSecondaryCharge'},
                    {name:'次充电电量分布',value:'selectSecondaryChargeEnergyDistribution'},
                    {name:'次充电时刻分布',value:'selectTimeDistributionOfSecondaryCharging'},
                    {name:'周充电频次分布',value:'selectWeeklyChargingFrequency'},
                    {name:'单日充电次数分布',value:'selectChargingTimesPerDay'},
                    {name:'充电地点数分布',value:'selectNumberOfChargingPoints'},
                    {name:'最多充电地点占比分布',value:'selectPercentageOfMaximumChargingLocations'},
                    {name:'次充电时长分布',value:'selectDurationOfEachCharge'},
                    {name:'次充电功率分布',value:'selectChargingPower'},
                ],
                userAnalyze:[
                    {name:'性别占比',value:'selectGenderRatio'},
                    {name:'用户年龄分布',value:'selectAgeDistribution'},
                    {name:'用户常驻城市级别分布',value:'selectResidentCityLevel'},
                    {name:'用户地域分布',value:'selectGeographicalDistribution'},
                ],
                orderAnalyze:[
                    {name:'购车城市级别分布',value:'selectCarPurchasingCityLevel'},
                    {name:'购车地域分布',value:'selectVehiclePurchasingRegion'},
                    {name:'购车年龄分布',value:'selectCarPurchaseAge'},
                    {name:'购车时间',value:'selectCarPurchaseTime'},
                ],
            }
        }
    },
    props:['chartOptions','formDataParams'],
    computed:{
        checkboxList(){
            return this.chartList[this.chartOptions]
        }
    },
    methods:{
        open(){
            this.dialogVisible = true
            this.$nextTick(()=>{
                this.handleCheckAllChange(true)
            })
        },
        handleCheckAllChange(val) {
            let allChart = []
            this.checkboxList.forEach(item => {
                allChart.push(item.value)
            });
            this.checkedCharts = val ? allChart : []
            this.isIndeterminate = false;
        },
        handlecheckedChartsChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.checkboxList.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkboxList.length;
        },
        donwloadFile(){ 
            console.log(this.checkedCharts)
            console.log(this.formDataParams)
        }
    }
}
</script>

<style lang='less' scoped>
.check-box{
    display: block;
}
</style>