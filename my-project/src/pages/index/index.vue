<template>
  <div class="container">
    <div class="userinfo" v-if="userInfo.nickName">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
      <p>{{userInfo.nickName}}</p>
      <!-- <p>{{userInfo.province+'-'+userInfo.city}}</p> -->
    </div>
    <button v-if="!userInfo.nickName" open-type="getUserInfo" @getuserinfo="authSetUser">
        授权登录
    </button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo: {},
    }
  },
  created(){
    this.getUserInfo();
    wx.showModal({
    title: '提示',
    confirmText:'我是学员',
    confirmColor:'#2d8cf0',
    cancelText:'我是驾校',
    content: '请选择您的身份',
    success(res) {
      if (res.confirm) {
        console.log('用户选择了学员身份')
        wx.navigateTo({
          url: '/pages/register/main'
        })
      } else if (res.cancel) {
        console.log('用户选择了驾校身份')
        wx.navigateTo({
          url: '/pages/register1/main'
        })
      }
    }
  })
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
      }
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
