<template>
   <div>
     <i-card v-for="item in action" :key="item" :title="'昵称：'+item.userNickname" i-class="re_card" :extra="'车牌号：'+item.carNum">
          <view slot="content">练车时间：{{item.time+'点-'+item.time+1+'点'}}
          </view>
          <view slot="footer">状态：{{item.situation}}</view>
      </i-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      action:[],
      userNickname:[],
      situation:[],
      time:[],
      carNum:[]
    }
  },
  onLoad(){
     this.$http.get('http://www.hyltech.com/api/Reserve/all/1').then((res)=>{
        console.log('res', res)
        this.action = res.data.data;
        console.log(this.action)
      }).catch(err=>{
        console.log(err)
      })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
