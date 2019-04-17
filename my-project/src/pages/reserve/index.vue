<template>
  <div class="container">
      <i-panel title="标题">
          <view style="padding: 15px;">当前我的状态：{{states}}</view>
          <view style="padding: 15px;">今日还剩余预约号：{{number1}}</view>
          <view style="padding: 15px;">今日已预约：{{number2}}</view>
          <view style="padding: 15px;">排在您前面的练车人数:{{number3}}</view>
          
          <div class="all_button">
          <i-button i-class="re_button" @click="handleClick" type="primary" shape="circle" size="small">点击预约</i-button>
          <i-button  i-class="re_button" @click="handleClick2" type="primary" shape="circle" size="small">取消预约</i-button>
          </div>

          
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
            console.log(res)
            res.states='待练车'
            wx.navigateTo({
              url: '/pages/manareserve/main',
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
    width:100px;
    float:left;
    align:center;
    margin-right:10px;
}
</style>

