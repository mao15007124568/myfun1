<template>
  <div>
          <p v-if="status=='yes'" class="i-input">当前您的预约状态为：已预约</p>
          <p v-if="status=='no'" class="i-input">当前您的预约状态为：未预约</p>
          <div>
          <picker @change="bindPickerChange" class="i-input" :value="timeList[index]" :range="timeList">
              <view class="picker">
                请选择您的练车时间：{{timeList[index]}}
              </view>
          </picker>
          </div>
          <i-card v-for="item in action" :key="item" :title="item.carNum" i-class="re_card" :extra="'车型：'+item.carColor">
              <view slot="content">剩余座位数：{{item.leftseat}}
               <i-button i-class="re_button" @click="handleClick(item,index)" type="primary" size="small">点击预约</i-button>
              </view>
              
              <view slot="footer">车辆颜色：{{item.carColor}}</view>
          </i-card>
          <i-button @click="lookReserve" type="primary" size="small">查看我的预约</i-button>
  </div>

   

</template>

<script>
   const { $Message } = require('../../../static/dist/base/index');

  export default {
   
    data() {
      return {
        index:0,
        timeList: ['8：00-9：00','9：00-10：00', '10：00-11：00','14：00-15：00','15：00-16：00','16：00-17：00'],
        openId: '',
        status:null,
        userSituation:null,
        action:[],
        action2:[],
        action3:[],
      }
    },
    onLoad(){
      wx.showModal({
        title: '提示',
        content: '每天只有一次练车机会',
        confirmColor:'#2d8cf0',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      this.getOpenid();
      this.$http.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appId=res.result.userInfo.appId&secret=APPSECRET')
        .then((res)=>{
            console.log('这应该是access token')
            console.log('res', res)
            // this.action = res.data.data
          }).catch(err=>{
            console.log(err)
          })
    },
    methods: {
      lookReserve(){
          wx.navigateTo({
            url: '/pages/manareserve/main',
          })
      },
      bindPickerChange(e) {
            this.index = e.mp.detail.value
            // console.log('picker发送选择改变，携带值为', e.mp.detail.value)
            if(e.mp.detail.value==0){
              console.log('我选择的是8:00-9:00')
              this.$http.get('http://www.hyltech.com/api/User/showcar?time=8&userNum='+this.userNum+'')
              .then((res)=>{
                  console.log('res', res)
                  this.action = res.data
                }).catch(err=>{
                  console.log(err)
                })
            }else if(e.mp.detail.value==1){
              console.log('我选择的是9:00-10:00')
              this.$http.get('http://www.hyltech.com/api/User/showcar?time=9&userNum='+this.userNum+'')
              .then((res)=>{
                  console.log('res', res)
                  this.action = res.data
                }).catch(err=>{
                  console.log(err)
                })
            }else if(e.mp.detail.value==2){
              console.log('我选择的是10：00-11：00')
              this.$http.get('http://www.hyltech.com/api/User/showcar?time=10&userNum='+this.userNum+'')
              .then((res)=>{
                  console.log('res', res)
                  this.action = res.data
                }).catch(err=>{
                  console.log(err)
                })
            }else if(e.mp.detail.value==3){
              console.log('我选择的是14：00-15：00')
              this.$http.get('http://www.hyltech.com/api/User/showcar?time=14&userNum='+this.userNum+'')
              .then((res)=>{
                  console.log('res', res)
                  this.action = res.data
                }).catch(err=>{
                  console.log(err)
                })
            }else if(e.mp.detail.value==4){
              console.log('我选择的是15：00-16：00')
              this.$http.get('http://www.hyltech.com/api/User/showcar?time=15&userNum='+this.userNum+'')
              .then((res)=>{
                  console.log('res', res)
                  this.action = res.data
                }).catch(err=>{
                  console.log(err)
                })
            }else if(e.mp.detail.value==5){
              console.log('我选择的是16：00-17：00')
              this.$http.get('http://www.hyltech.com/api/User/showcar?time=16&userNum='+this.userNum+'')
              .then((res)=>{
                  console.log('res', res)
                  this.action = res.data
                }).catch(err=>{
                  console.log(err)
                })
            }
        },
      getOpenid() {
        let that = this;
        wx.cloud.callFunction({
        name: 'getOpenid',
        complete: res => {
          console.log('云函数获取到的openid: ', res.result.userInfo.appId)
          this.userNum = res.result.userInfo.appId
          this.$http.get('http://www.hyltech.com/api/Reserve/YN?UserNum='+this.userNum+'').then((res)=>{
            console.log('res', res)
            this.status = res.data
            console.log(this.status)
          }).catch(err=>{
            console.log(err)
          })
        }
        })
      },
      formSubmit(e) {
        let that = this;
        console.log('form发生了submit事件，携带数据为：', e.mp.detail)
        that.formId = e.mp.detail.formId;
        console.log('表单id:', that.formId );
      },
     handleClick(item,index){
       console.log('这是状态')
       console.log(this.status)
          if(this.status=='no'){
          if (index==0) {
            this.$http.put('http://1.027365.net:88/Reserve/AddReserve?userNum='+this.userNum+'&CarNum='+item.carNum+'&time=8')
                .then((res)=>{
                    console.log('res', res)
                  }).catch(err=>{
                    console.log(err)
              })
            wx.showToast({
              title: '预定成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '/pages/manareserve/main',
          })
         }else if(index==1){
           this.$http.put('http://1.027365.net:88/Reserve/AddReserve?userNum='+this.userNum+'&CarNum='+item.carNum+'&time=9')
                .then((res)=>{
                    console.log('res', res)
                  }).catch(err=>{
                    console.log(err)
              })
            wx.showToast({
              title: '预定成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '/pages/manareserve/main',
          })
         }else if(index==2){
           this.$http.put('http://1.027365.net:88/Reserve/AddReserve?userNum='+this.userNum+'&CarNum='+item.carNum+'&time=10')
                .then((res)=>{
                    console.log('res', res)
                  }).catch(err=>{
                    console.log(err)
              })
            wx.showToast({
              title: '预定成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '/pages/manareserve/main',
          })
         }else if(index==3){
           this.$http.put('http://1.027365.net:88/Reserve/AddReserve?userNum='+this.userNum+'&CarNum='+item.carNum+'&time=14')
                .then((res)=>{
                    console.log('res', res)
                  }).catch(err=>{
                    console.log(err)
              })
            wx.showToast({
              title: '预定成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '/pages/manareserve/main',
          })
         }else if(index==4){
           this.$http.put('http://1.027365.net:88/Reserve/AddReserve?userNum='+this.userNum+'&CarNum='+item.carNum+'&time=15')
                .then((res)=>{
                    console.log('res', res)
                  }).catch(err=>{
                    console.log(err)
              })
            wx.showToast({
              title: '预定成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '/pages/manareserve/main',
          })
         }else if(index==5){
           this.$http.put('http://1.027365.net:88/Reserve/AddReserve?userNum='+this.userNum+'&CarNum='+item.carNum+'&time=16')
                .then((res)=>{
                    console.log('res', res)
                  }).catch(err=>{
                    console.log(err)
              })
            wx.showToast({
              title: '预定成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '/pages/manareserve/main',
          })
         }
        }else {
          wx.showToast({
              title: '您已预定过，不能再预定',
              icon: 'none',
              duration: 2000
            })
          console.log('您已经预定过，不能再预定')
        }
      }
     }
  }

</script>

<style scoped>
div >>> .i-input {
      padding:7px 15px;
      color:#495060;
      position:relative;
      padding:12px 15px;
      display:flex;
      background:#fff;
      align-items:center;
      line-height:1.4;
      font-size:38rpx;
      overflow:hidden;
    }
  .all_button{
    align:center;
    margin:20px auto;
  }
  div >>> .re_button {
    width:90px;
    float:right;
    margin-left:10px;
}
</style>

