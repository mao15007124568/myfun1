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
      <div class="i-input">驾校名称：<input type="text"  v-model="schoolName"></div>
      <div class="i-input">详细地址：<input type="text" class="i-input" v-model="schoolLocation"></div>
      
      <i-button i-class="btn" @click="toHome" type="primary"  shape="circle">进入</i-button>
    </div>

   

</template>

<script>
  

  export default {
   
    data() {
      return {
        schoolNameL:'',
        schoolLocation:'',
        openid:'',
        userInfo: {
          nickName:''
        }
      }
    },
    created(){
    this.getUserInfo();
   },
   onLoad(){
     this.getOpenid();
   },
    methods: {
    getOpenid() {
      let that = this;
      wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.userInfo.appId)
        this.schoolNum = res.result.userInfo.appId
        
      }
      })
    },
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
        //这一段是之后要加上的
      //   this.$http.post('http://1.027365.net:88/School', 
      // {
      //   id: '',
      //   schoolNum: this.schoolNum, 
      //   schoolName: this.schoolName,
      //   schoolLocation: this.schoolLocation
      // }).then((res)=>{
      //   console.log('res', res)
      //   console.log("添加成功")
      // }).catch(err=>{
      //   console.log(err)
      // })
      }
    },
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

