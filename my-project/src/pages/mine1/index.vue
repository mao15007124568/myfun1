<template>
  <div>
      <view class="userinfo">
      <view class="userinfo-avatar">
      <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
      </view>


      <i-cell-group>
          <i-cell title="个人信息" is-link url="/pages/index/main"></i-cell>
          <i-cell title="练车状态" is-link url="/pages/status/main"></i-cell>
      </i-cell-group>
    </div>

   

</template>

<script>
  

  export default {
   
    data() {
      return {
        userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },
    components: {
      
    },
    methods: {
     
    },
    
   
  }

</script>

<style>
  .weui-cell button {
    background-color: white;
    border: none;
    padding: 0;
    margin: 0;
    text-align: left;
    line-height: unset;
  }

  button::after {
    border: 0;
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

