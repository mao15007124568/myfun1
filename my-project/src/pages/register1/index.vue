<template>
  <div>
      <view class="userinfo">
      <view class="userinfo-avatar">
      <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
      </view>

      <i-panel title="基础用法">
          <i-input :value="value1" type="text" title="姓名" autofocus placeholder="名字" />
          <i-input :value="value2" type="number" title="手机号" placeholder="请输入手机号" />
      </i-panel>
      
      <i-button i-class="btn" @click="toHome" type="primary"  shape="circle">进入</i-button>
    </div>

   

</template>

<script>
  

  export default {
   
    data() {
      return {
        value1: '',
        value2: '',
        userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },
    components: {
      
    },
    methods: {
    toHome(){
        wx.switchTab({
        url: '/pages/home/main'
      })
    }
    },
    
   
  }

</script>

<style scoped>
   div >>> .btn{
     width:85%;
     margin:60px auto;
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

