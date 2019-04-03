<template>
  <div>
      <view class="userinfo">
      <view class="userinfo-avatar">
      <open-data type="userAvatarUrl"></open-data>
      </view>
      <open-data type="userNickName"></open-data>
      </view>
<<<<<<< HEAD

      <i-cell-group>
          <i-cell title="个人信息" is-link url="/pages/logs/main"></i-cell>
          <i-cell title="预约记录" is-link url="/pages/logs/main"></i-cell>
          <i-cell title="信誉积分" is-link url="/pages/logs/main"></i-cell>
=======

      <i-cell-group>
          <i-cell title="我的收藏" is-link url="/pages/logs/main"></i-cell>
          <i-cell title="接收通知">
              <switch slot="footer" checked />
          </i-cell>
      </i-cell-group>

      <i-cell-group>
            <i-cell title="只显示箭头" is-link></i-cell>
            <i-cell title="跳转到首页" is-link url="/pages/logs/main"></i-cell>
            <i-cell title="只有 footer 点击有效" is-link url="/pages/logs/main" only-tap-footer></i-cell>
            <i-cell title="开关">
                <switch slot="footer" checked />
            </i-cell>
>>>>>>> fa6fc5ae43348e5969660009a4708d8c159818de
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

