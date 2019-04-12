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
  

  export default {
   
    data() {
      return {
        states: '未预约',
        number1: '14',
        number2: '23',
        number3: '4',
      }
    },
    created() {
      
    },
    methods: {
     handleClick(){
        this.$fly.request({
            method:"post", //post/get 请求方式
            // url:"/mms/country/queryValidZoneListForMallHome",
            body:{}
          }).then(res =>{
            console.log(res)
        })
     },
     handleClick2(){
        this.$fly.request({
            method:"post", //post/get 请求方式
            // url:"/mms/country/queryValidZoneListForMallHome",
            body:{}
          }).then(res =>{
            console.log(res)
        })
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

