<template>
  <div class="container1">
      <view class="userinfo">
        <div class="userinfo" v-if="userInfo.nickName">
          <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
          <p>{{userInfo.nickName}}</p>
          <!-- <p>{{userInfo.province+'-'+userInfo.city}}</p> -->
        </div>
        <button v-if="!userInfo.nickName" open-type="getUserInfo" @getuserinfo="authSetUser">
            授权登录
        </button>
     </view>

      <i-panel title="基础用法" class="re_panel">
          <i-input :value="value1" type="text" title="驾校名称" autofocus placeholder="请输入驾校名称" />
          <i-input :value="value2" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
          <i-input :value="value3" type="number" title="驾校联系方式" placeholder="请输入手机号" />
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
        value3: '',
        userInfo: {}
      }
    },
    created(){
    this.getUserInfo();
   },
    methods: {
    authSetUser (e) {
        this.userInfo=e.mp.detail.userInfo;
    },
    getUserInfo () {
        // 调用登录接口
        var _this=this;
            wx.getUserInfo({//当已授权getUserInfo时
              success(res) {
                console.log(res);
                _this.userInfo=res.userInfo
              },
              fail(err) {
                console.log(err);
            }
        })
      },
      
      toHome(){
        console.log(this.$root.value2)
        // if(this.$root.value2!=''){
          wx.navigateTo({
          url: '/pages/home1/main',
        })
        console.log('跳转到驾校首页')
        // }else{
        //   console.log('您输入的注册信息不能为空')
        // }
      }
    },
  }

</script>

<style scoped>
   div >>> .btn{
     width:85%;
     margin:60px auto;
   }
  
   div >>> .re_panel{
     margin-top:30px;
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

  .userinfo1 {
    display: flex;
    flex-direction: column;
    align-items: center;
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

