<template>
  <div>
    <i-panel title="驾校车辆详情">
      <i-card v-for="item in car" :key="item" :title="item.carNum" i-class="re_card" :extra="item.carSituation">
          <view slot="content">
           {{item.carType}}
            <i-button i-class="re_button"  @click="handleClick(item)" type="primary" size="small">开放</i-button>
          </view>
          <view slot="footer">
            颜色：{{item.carColor}}
           </view>
      </i-card>
    </i-panel>
  </div>
</template>

<script>

  export default {
      data() {
        return {
          car:[],
          index:0,
          subjectList:['倒车入库','侧方停车','上坡起步','S弯','直角'],
          openid:'',
        }
    },
    onLoad(){
      wx.showModal({
        title: '提示',
        content: '放号操作在每天的18：00-19：00之间关闭，在此期间将清空今日所有的预约信息与发布的通知信息',
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
      wx.startPullDownRefresh()
     
    },
    methods: {
       
      getOpenid() {
      let that = this;
      wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.userInfo.appId)
        this.schoolNum = res.result.userInfo.appId
        this.$http.get('http://www.hyltech.com/api/School/getCarbySchoolNum?schoolNum='+this.schoolNum+'').then((res)=>{
        console.log('res', res)
        this.car = res.data
      }).catch(err=>{
        console.log(err)
      })
      }
      })
    },
      handleClick(item){
        console.log('item为'+item);
        console.log(item.carNum)
        wx.navigateTo({
          url: '/pages/seatNum/main?carNum='+item.carNum
        })
     }
  }
}
</script>

<style scoped>
 div >>> .re_button {
    width:90px;
    float:right;
    margin-left:10px;
}
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
</style>

