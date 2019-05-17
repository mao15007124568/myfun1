<template>
  <div>

     <i-card :title="action.carNum" i-class="re_card" :extra="'练习项目：'+action.carSubject">
          <view slot="content">练车时间：{{action.time}}
          </view>
          <view slot="footer">车辆颜色：{{action.carColor}}</view>
      </i-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      openId: '',
      action:[],
      carNum:'',
      time:'',
      carColor:'',
      carSubject:''
    }
  },
  onLoad(){
    this.getOpenid()
    console.log('打印userNum')
    
    
  },
  methods: {
    getOpenid() {
        let that = this;
        wx.cloud.callFunction({
        name: 'getOpenid',
        complete: res => {
          console.log('云函数获取到的openid: ', res.result.userInfo.appId)
          this.userNum = res.result.userInfo.appId
          console.log(this.userNum)
          this.$http.get('http://www.hyltech.com/api/Reserve/getReserve?userNum='+this.userNum+'').then((res)=>{
            console.log('res', res)
            this.action = res.data
            console.log('打印action')
            console.log(this.action)
          }).catch(err=>{
            console.log(err)
          })
        }
        })
      }
}
}
</script>

<style scoped>
 div >>> .re_card {
    margin-top:20px;
}
</style>
