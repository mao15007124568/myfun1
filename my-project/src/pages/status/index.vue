<template>
  <div>
    <i-panel title="驾校车辆详情">
      <i-card v-for="item in action" :key="item" :title="item.car_id" i-class="re_card" :extra="'车型：'+item.car_name" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
          <view slot="content">在线人数：{{item.car_people}}</view>
          <view slot="footer">车辆颜色：{{item.car_color}}</view>
      </i-card>
    </i-panel>
    
    <div class="weui-panel__bd">
        <navigator open-type="navigate" url="../mine/auth/main?target=../car_list/main" class="weui-media-box weui-media-box_appmsg"
          hover-class="weui-cell_active">
          <div class="weui-media-box__hd weui-media-box__hd_in-appmsg">
            <image class="weui-media-box__thumb" src="../../static/tabs/home.png" />
          </div>
          <div class="weui-media-box__bd weui-media-box__bd_in-appmsg">
            <div class="weui-media-box__title">（绑定车牌，轻松停车）</div>
          </div>
        </navigator>
      </div>
      <div class="weui-panel__ft">
        <div class="weui-cell weui-cell_access weui-cell_link">
          <navigator v-if="userInfo.nickname" open-type="navigate" url="../mine/add_car/main" class="weui-cell__bd">新增车牌</navigator>
          <navigator v-if="!userInfo.nickname" open-type="navigate" url="../mine/auth/main?target=../add_car/main"
            class="weui-cell__bd">新增车牌</navigator>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  data () {
    return {
      userInfo:{
        username:'',
        nickname:''
      },
      action:[]
    }
  },

  created() {
    const db = wx.cloud.database({ env: 'myq-acdb' })
    db.collection('action').get().then(
      res=>{
      console.log(res.data)
      this.action = res.data
    }
   )
  },

  methods: {
    
  }
}
</script>

<style scoped>
  div >>> .re_card {
    margin-top:10px;
}
</style>
