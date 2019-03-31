<template>
  <div class="container" v-bind:style="{height: viewHeight + 'px'}">
    <div class="userinfo">
      <open-data class="userinfo-avatar" type="userAvatarUrl" background-size="cover"></open-data>
      <div class="userinfo-nickname">
        <open-data type="userNickName"></open-data>
      </div>
    </div>

    <div v-if="!userInfo.nickname" class="weui-cells weui-cells_after-title">
      <i-cell-group>
            <i-cell title="只显示箭头" is-link></i-cell>
            <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
            <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
            <i-cell title="开关">
                <switch slot="footer" checked />
            </i-cell>
      </i-cell-group>
    </div>

   

  </div>
</template>

<script>

  export default {
    components: {
    },
    computed: {
      viewHeight() {
        // return env.state.deviceInfo.windowHeight
      },
      userInfo() {
        // return env.state.userInfo
      }
    },
    data() {
      return {
        nickname:"",
        canIUse: wx.canIUse('button.open-type.getUserInfo')
      }
    },
    methods: {
      onGotUserInfo() {
        wx.getUserInfo({
          withCredentials: true,
          success: function (res) {
            // env.dispatch('bindUserDetail', res.userInfo)
          }
        })
      }
    },
    onShareAppMessage: function (ops) {
      if (ops.from === 'button') {
        console.log('share', ops.target)
      }
      return {
        title: '智慧社区',
        path: '/pages/index/main',
        success: function (res) {
          console.log('share success', JSON.stringify(res))
        },
        fail: function (res) {
          console.log('share error', JSON.stringify(res))
        }
      }
    },
    onReady() {}
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
    background-color: #1296db;
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

