<template>
  <div>
      <i-panel title="标题">
          <view style="padding: 15px;">当前我的状态：{{states}}</view>
          <i-card v-for="item in action" :key="item" :title="item.carNum" i-class="re_card" :extra="'车型：'+item.carColor">
              <view slot="content">剩余座位数：{{item.carLeftSeat}}
               <i-button i-class="re_button"  @click="handleClick" type="primary" size="small">点击预约</i-button>
              </view>
              
              <view slot="footer">车辆颜色：{{item.carColor}}</view>
          </i-card>
         
      </i-panel>

  </div>

   

</template>

<script>
   const { $Message } = require('../../../static/dist/base/index');

  export default {
   
    data() {
      return {
        
        states: '未预约',
        number1: '14',
        number2: '23',
        number3: '4',
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
    created() {
       this.$http.get('http://1.027365.net:88/Car/all/1', 'type').then((res)=>{
        console.log('res', res)
        this.action = res.data.data
      }).catch(err=>{
        console.log(err)
      })
    },
    methods: {
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

