<template>
  <div>
    <p>请输入各时间段内的最大座位数</p>
    <div class="i-input">8-9点：<input type="text" placeholder="请输入8-9点最大座位数" v-model="time8Max"></div>
    <div class="i-input">9-10点：<input type="text" placeholder="请输入9-10点最大座位数" v-model="time9Max"></div>
    <div class="i-input">10-11点：<input type="text" placeholder="请输入10-11点最大座位数" v-model="time10Max"></div>
    <div class="i-input">11-12点：<input type="text" placeholder="请输入11-12点最大座位数" v-model="time11Max "></div>
    <div class="i-input">14-15点：<input type="text" placeholder="请输入14-15点最大座位数"   v-model="time14Max"></div>
    <div class="i-input">15-16点：<input type="text" placeholder="请输入15-16点最大座位数"  v-model="time15Max"></div>
    <div class="i-input">16-17点：<input type="text" placeholder="请输入16-17点最大座位数"  v-model="time16Max"></div>
    <div class="i-input">17-18点：<input type="text" placeholder="请输入17-18点最大座位数"  v-model="time17Max"></div>
    <div class="i-input">项目：<input type="text" placeholder="请输入该车用于练习的项目"  v-model="carSubject"></div>
    <i-button @click="publish" type="primary" size="large">发布</i-button>
  </div>


</template>

<script>

export default {
  data () {
    return {
        openid:'',
    }
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
            this.schoolNum = res.result.userInfo.appId
            }
        })
    },
    
    publish(){
        this.$http.put('http://1.027365.net:88/News/addnews?CarNum='+this.CarNum+'&time8Max='+this.time8Max+'&time9Max='+this.time9Max+'&time10Max='+this.time10Max+'&time11Max='+this.time11Max+'&time14Max='+this.time14Max+'&time15Max='+this.time15Max+'&time16Max='+this.time16Max+'&time17Max='+this.time17Max+'', 
            ).then((res)=>{
                console.log('res', res)
                console.log("添加成功")
            }).catch(err=>{
                console.log(err)
            })
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        // this.index=e.mp.detail.value
        if(e.mp.detail.value==0){
            console.log('我选择的是8:00-9:00')
            
        }
    },
  }
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
  
</style>
