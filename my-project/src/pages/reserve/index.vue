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
          <i-input :value="value2" type="number" title="身份证号" placeholder="请输入手机号" />
          <i-panel title="group-水果">
              <i-radio-group :current="current" bindchange="handleFruitChange">
                  <i-radio v-for="item in fruit" :key="item.id" :value="item.name">
                  </i-radio>
              </i-radio-group>
          </i-panel>
          <i-input :value="value3" type="textarea" title="详细地址" placeholder="请输入详细地址(最多50字)" maxlength="50" />
          <i-input :value="value4"  title="用户信息" disabled />
      </i-panel>

      <i-panel title="无标题输入框">
          <i-input :value="value5"  placeholder="请输入收货人姓名" />
      </i-panel>
      
    </div>

   

</template>

<script>
  

  export default {
   
    data() {
      return {
        fruit: [{
            id: 1,
            name: '香蕉',
        }, {
            id: 2,
            name: '苹果'
        }, {
            id: 3,
            name: '西瓜'
        }, {
            id: 4,
            name: '葡萄',
        }],
        current: '苹果',
        value1: '',
        value2: '',
        value3: '',
        value4: '输入框已禁用',
        value5: '',
        value6: '',
        value7: '',
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

