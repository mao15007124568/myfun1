<template>
  <div>
          <picker @change="bindPickerChange" class="i-input" v-bind:value="array[index]" :range="array">
              <view class="picker">
                请选择练车时间：{{array[index]}}
              </view>
          </picker>
          <i-card v-for="item in action" :key="item" :title="item.carNum" i-class="re_card" :extra="'车型：'+item.carColor">
              <view slot="content">剩余座位数：{{item.time8Left}}
               <i-button i-class="re_button"  @click="handleClick" type="primary" size="small">点击预约</i-button>
              </view>
              
              <view slot="footer">车辆颜色：{{item.carColor}}</view>
          </i-card>
          <form @submit="formSubmit" report-submit="true">
            <view class="btn-area">
              <button form-type="submit">Submit</button>
              <button form-type="reset">Reset</button>
            </view>
          </form>

  </div>

   

</template>

<script>
   const { $Message } = require('../../../static/dist/base/index');

  export default {
   
    data() {
      return {
        index:0,
        array: ['8：00-9：00','9：00-10：00', '10：00-11：00','14：00-15：00','15：00-16：00','16：00-17：00'],
        openId: '',
        action:[],
        actions: [
            {
                name: '取消'
            },
            {
                name: '预约',
                color: '#ed3f14',
                loading: false
            }
        ]
      }
    },
    onLoad(){
      this.getOpenid();
      this.$http.get('http://1.027365.net:88/User/getCar?userNum=wx2be7497fc8ee40a0', 'type').then((res)=>{
        console.log('res', res)
        this.action = res.data.data
      }).catch(err=>{
        console.log(err)
      })
      
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
       bindPickerChange(e) {
            console.log('picker发送选择改变，携带值为', e.mp.detail.value)
            // this.index=e.mp.detail.value
            if(e.mp.detail.value==0){
              console.log('我选择的是8:00-9:00')

            }
        },
       getOpenid() {
        let that = this;
        wx.cloud.callFunction({
        name: 'getOpenid',
        complete: res => {
          console.log('云函数获取到的openid: ', res.result.userInfo.appId)
          this.userNum = res.result.userInfo.appId
        }
        })
      },
      formSubmit(e) {
        let that = this;
        console.log('form发生了submit事件，携带数据为：', e.mp.detail)
        that.formId = e.mp.detail.formId;
        console.log('表单id:', that.formId );
        
        this.$http.post('https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN', {
          touser: "OPENID",
          template_id: "TEMPLATE_ID",
          page: "index",
          form_id: "FORMID",
          data: {
          keyword1: {
              value: "339208499"
            },
          keyword2: {
              value: "2015年01月05日 12:30"
            },
          keyword3: {
              value: "腾讯微信总部"
            },
          keyword4: {
              value: "广州市海珠区新港中路397号"
            }
          },
          emphasis_keyword: "keyword1.DATA"
          }).then((res)=>{
            console.log('res', res)
            // this.action = res.data.data
            
          }).catch(err=>{
            console.log(err)
          })
      },
     handleClick(detail){
       console.log(detail)
       const _this = this;
       console.log(_this);
       wx.showModal({
        title: '预约确认',
        confirmText:'确认',
        confirmColor:'#2d8cf0',
        cancelText:'取消',
        content: '是否确认预约？',
        success(res) {
         
          if (res.confirm) {
            console.log('当前状态变成待练车')
            // console.log(res)
            // res.states='待练车'
            wx.navigateTo({
              url: '/pages/manareserve/main',
            })
            //发送模板信息
            _this.$http.get('https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN', 
             {
                touser: "OPENID",
                template_id: "TEMPLATE_ID",
                page: "index",
                form_id: "FORMID",
                data: {
                keyword1: {
                    "value": "339208499"
                  },
                keyword2: {
                    "value": "2015年01月05日 12:30"
                  },
                keyword3: {
                    "value": "腾讯微信总部"
                  },
                keyword4: {
                    "value": "广州市海珠区新港中路397号"
                  }
                },
                emphasis_keyword: "keyword1.DATA"
              }).then((res)=>{
                console.log('res', res)
                console.log("添加成功")
              }).catch(err=>{
                console.log(err)
              })
          } else if (res.cancel) {
           console.log('用户点击了取消')
          }
        }
      })
     },
     handleClick2(){
        
     }
    },
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

