<template>
  <div>
    <i-panel title="驾校车辆详情">
      <i-card v-for="item in action" :key="item" :title="item.carNum" i-class="re_card" :extra="'车型：'+item.carColor">
          <view slot="content">剩余座位数：{{item.carLeftSeat}}</view>
          <view slot="footer">车辆颜色：{{item.carColor}}</view>
      </i-card>
    </i-panel>
  </div>

</template>

<script>

export default {
  data () {
    return {
      userInfo:{
        username:'',
        nickname:''
      },
      action:[]
    }
  },

  created() {
      // this.$fly.request({
      //       method:"get", //post/get 请求方式
      //       url:"http://1.027365.net:88/Car/all/1?type=string&value=string",
      //     }).then(res =>{
      //       this.action = res.data;
      //       console.log(res)
      //   })
      this.$http.get('http://1.027365.net:88/Car/all/1').then((res)=>{
        console.log('res', res)
        this.action = res.data.data
      }).catch(err=>{
        console.log(err)
      })

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
