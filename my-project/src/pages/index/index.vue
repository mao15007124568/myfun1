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
    
        var _this = this;
        wx.login({
			  success(res) {
			  	  	if (res.code) {

              // 发起网络请求
              let data={
                appid:"wx2be7497fc8ee40a0",
                secret:'a447e484f3a3e0a3c389a06dc9cc5156',
                // js_code:req.query.code,
                grant_type:'authorization_code'
              };
				      wx.request({
				        url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+data.appid+'&secret='+data.secret
            +'&js_code='+data.js_code+'&grant_type=authorization_code',
				        data: {
				            code:res.code
				        },
              })
              
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
			  
			  }
			})
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
