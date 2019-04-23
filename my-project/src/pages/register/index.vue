<template>
  <div>
      <view class="userinfo">
      <view class="userinfo-avatar">
      <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
      </view>

      <i-panel title="基础用法">
          <i-input :value="userNickname" type="textarea" title="姓名" autofocus placeholder="名字" />
          <i-input :value="userPhone" type="number" title="手机号" placeholder="请输入手机号" />
          <picker  @change="bindPickerChange"  v-bind:value="array[index]" :range="array">
              <view class="picker">
                请选择所在的驾校：{{array[index]}}
              </view>
         </picker>
      </i-panel>
      
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
        userNickname: "111",
        userSchoolNum: "",
        userPhone: "",
        userCoach: ""
      }).then((res)=>{
        console.log('res', res)
        // this.action = res.data.data
        console.log("添加成功")
      }).catch(err=>{
        console.log(err)
      })
     
    },
    
    }
  }

</script>

<style scoped>
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

