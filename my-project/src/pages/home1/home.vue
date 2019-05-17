<template>
    <div>
    <i-grid>
      <i-grid-item>
          <i-grid-icon>
              <image src="/static/images/1.jfif" />
          </i-grid-icon>
          <i-grid-label>发布通告</i-grid-label>
      </i-grid-item>
      <i-grid-item>
          <i-grid-icon>
              <image src="/statuserInfoic/images/2.jfif" />
          </i-grid-icon>
          <i-grid-label>新增车辆</i-grid-label>
      </i-grid-item>
      <i-grid-item>
          <i-grid-icon>
              <image @click="handleClick" src="/static/images/3.jfif" />
          </i-grid-icon>
          <i-grid-label>查看车辆</i-grid-label>
      </i-grid-item>
    </i-grid>
   
    <div class="i-input">车牌号：<input type="text" placeholder="请输入车牌号" v-model="carNum"></div>
    <div class="i-input">车辆颜色：<input type="text" placeholder="请输入车辆颜色"   v-model="carColor"></div>
    <div class="i-input">汽车品牌：<input type="text"  placeholder="请输入汽车品牌"  v-model="carType"></div>
    
   <i-button @click="add" type="primary" size="large">新增车辆</i-button>
   <div class="i-input">发布通告：<input type="text" placeholder="请输入通知" v-model="news"></div>
   <i-button @click="publish" type="primary" size="large">发布通告</i-button>
  </div>
</template>

<script>
export default {
    data:{
       return:{
           openid:'',
           news:'',
           userInfo:''
       }
    },
    created(){
      
    },
    onLoad(){
     this.getOpenid();
    },
    methods:{
        getOpenid() {
            let that = this;
            wx.cloud.callFunction({
            name: 'getOpenid',
            complete: res => {
                this.schoolNum = res.result.userInfo.appId
              }
            })
            // this.callBack(this.schoolNum)
        },
        handleClick(){
            wx.navigateTo({
                url: '/pages/lookCar/main'
            })
        },
        add(){
            this.$http.post('http://www.hyltech.com/api/Car', 
            {
                carNum: this.carNum,
                carSchoolNum: this.schoolNum,
                carColor: this.carColor,
                carType: this.carType,
                carSituation:'未开放'
            }).then((res)=>{
                console.log('res', res)
                console.log("添加成功")
            }).catch(err=>{
                console.log(err)
            })
        },
        publish(){
            this.$http.put('http://www.hyltech.com/api/News/addnews?schoolNum='+this.schoolNum+'&news='+this.news+'&newsSituation=发布', 
            {
                // id: '',
                // news:this.news ,
                // schoolNum: this.schoolNum,
                // newsSituation:'发布'
            }).then((res)=>{
                console.log('res', res)
                console.log("添加成功")
            }).catch(err=>{
                console.log(err)
            })
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

