<template>
  <div>
      <view class="userinfo">
      <view class="userinfo-avatar">
      <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
      </view>
          <div class="i-input">姓名：<input type="text"  v-model="userNickname"></div>
          <div class="i-input">手机号码：<input type="text" class="i-input" v-model="userPhone"></div>
          <picker  @change="bindPickerChange" class="i-input" v-bind:value="array[index]" :range="array">
              <view class="picker">
                请选择所在的驾校：{{array[index]}}
              </view>
         </picker>
      
      <i-button i-class="btn" @click="toHome" type="primary"  shape="circle">进入</i-button>
    </div>
</template>

<script>
  

  export default {
   
    data() {
      return {
        array: ['学长驾校', '湖大驾校', '蓝星驾校', '学子驾校'],
        index: 0,
        value1: '',
        value2: '',
        userInfo:{},
        id: '',
        userNum: "",
        userNickname: "",
        userSchoolNum: "",
        userPhone: "",
        userCoach: ""
      }
    },
    components: {
      
    },
    methods: {
      bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.index=e.mp.detail.value
  },
    toHome(){
        wx.switchTab({
        url: '/pages/home/main'
      })
      this.$http.post('http://1.027365.net:88/User', 
      {
        id: '',
        userNum: "",
        userNickname: this.userNickname,
        userSchoolNum: '',
        userPhone: this.userPhone,
        userCoach: ""
      }).then((res)=>{
        console.log('res', res)
        console.log("添加成功")
      }).catch(err=>{
        console.log(err)
      })
    },
    
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

   div >>> .btn{
     width:85%;
     margin:60px auto;
   }

   div >>> .container1{
     background-color:#f8f8f9;
   }
 
  .userinfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2d8cf0;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin-top: 10rpx;
    border-radius: 50%;
    clip-path: circle(64rpx at center);
  }

  .userinfo-nickname {
    color: #fff;
    padding: 5px;
  }

  .weui-footer navigator span {
    text-decoration: underline;
  }

</style>

