<template>
  <div>
    <i-panel title="驾校车辆详情">
      <i-card v-for="item in car" :key="item" :title="item.carNum" i-class="re_card" :extra="'汽车品牌：'+item.carType">
          <view slot="content">汽车颜色：{{item.carColor}}
            <i-button i-class="re_button"  @click="handleClick" type="primary" size="small">发布</i-button>
          </view>
          <view slot="footer">车牌号：{{item.carNum}}</view>
      </i-card>
    </i-panel>
  </div>
</template>

<script>

  export default {
      data() {
        return {
          car:[]
        }
    },
    onLoad(){
      this.$http.get('http://1.027365.net:88/Car/all/1').then((res)=>{
        console.log('res', res)
        this.car = res.data.data
      }).catch(err=>{
        console.log(err)
      })
    },
    methods: {
      handleClick(){
         wx.showModal({
        title: '发布确认',
        confirmText:'确认',
        confirmColor:'#2d8cf0',
        cancelText:'取消',
        content: '是否确认发布该车辆？',
        success(res) {
          if (res.confirm) {
            console.log('已成功发布该车')
          } else if (res.cancel) {
           console.log('用户点击了取消')
          }
        }
      })
     }
  }
}
</script>

<style scoped>
 div >>> .re_button {
    width:90px;
    float:right;
    margin-left:10px;
}
</style>

