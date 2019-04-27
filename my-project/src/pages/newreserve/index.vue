<template>
  <div>
    <v-year-progess></v-year-progess>

     <i-card v-for="item in action" :key="item" :title="item.carNum" i-class="re_card" :extra="'车型：'+item.carColor">
          <view slot="content">剩余座位数：{{item.carLeftSeat}}
            <i-button @click="handleClick" type="primary" size="small">Primary</i-button>
          </view>
          <view slot="footer">车辆颜色：{{item.carColor}}</view>
      </i-card>
  </div>
</template>

<script>
import VYearProgess from '@/pages/YearProgess'

export default {
  data () {
    return {
      action:[],
      targetTime: 0,
      clearTimer: false
    }
  },

  created() {
      this.$mp.page({
            targetTime: new Date().getTime() + 6430000,
            targetTime1: new Date().getTime() + 86430000,
            targetTime2: new Date().getTime() + 10000
      }),
      this.$http.get('http://1.027365.net:88/Car/all/1', 'type').then((res)=>{
        console.log('res', res)
        this.action = res.data.data
      }).catch(err=>{
        console.log(err)
      })

  },
  components:{
    VYearProgess
  },
  methods: {
    
  }
}
</script>

<style scoped>
 div >>> .re_card {
    margin-top:20px;
}
</style>
