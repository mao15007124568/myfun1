<template>
  <div>
    <i-panel title="驾校车辆详情">
      <i-card v-for="item in action" :key="item" :title="item.car_name" :extra="car_id" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
          <view slot="content">当前车辆在练车人数{{item.car_people}}</view>
          <view slot="footer">车辆颜色{{item.car_color}}</view>
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
    this.db.collection('action').get()
    .then(res=>{
      console.log(res.data)
      // 可以进行数据初始化
    })
    .cathc(console.error)
  },

  methods: {
    
  }
}
</script>

<style scoped>

</style>
