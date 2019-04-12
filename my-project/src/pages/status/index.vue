<template>
  <div>
    <i-panel title="驾校车辆详情">
      <i-card v-for="item in action" :key="item" :title="item.car_id" i-class="re_card" :extra="'车型：'+item.car_name" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
          <view slot="content">在线人数：{{item.car_people}}</view>
          <view slot="footer">车辆颜色：{{item.car_color}}</view>
      </i-card>
    </i-panel>
    

  </div>
</template>

<script>

export default {
  data () {
    return {
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
