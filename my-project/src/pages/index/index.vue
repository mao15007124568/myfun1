<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <i-modal title="选择身份" :visible="visible" :actions="actions" @click="handleClick">
        <view>请选择您的身份</view>
    </i-modal>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      detail:'',
      visible:true,
      motto: '你好，欢迎来到智慧停车小程序',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      actions: [
            {
                name: '学员',
                color: '#2d8cf0',
            },
            {
                name: '驾校',
                color: '#19be6b'
            },
            {
                name: '取消'
            }
        ],
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
        mpvue.navigateTo({ url })
        console.log("跳转成功")
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    handleClick( detail ) {
    console.log(detail);
    // const index = detail.index;
    // console.log(index);
          // if (index === 0) {
            wx.navigateTo({
                  url: '/pages/register/main'
              })
          // } else if (index === 1) {
          //   wx.navigateTo({
          //         url: '/pages/register/main'
          //   })
          // } else {
          // }
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
