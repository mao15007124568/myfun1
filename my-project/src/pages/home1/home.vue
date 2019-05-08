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
              <image src="/static/images/2.jfif" />
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
   <div class="i-input">
       车牌号：<input type="text"  v-model="carNum">
       车牌号：<input type="text"  v-model="carColor">
       品牌：<input type="text"  v-model="carType">
    </div>
   <i-button @click="add" type="primary" size="large">新增车辆</i-button>
   <div class="i-input">发布通告：<input type="text" class="i-input" v-model="news"></div>
   <i-button @click="publish" type="primary" size="large">发布通告</i-button>
  </div>
</template>

<script>
export default {
    data:{
       return:{
       }
    },
    created(){
      
    },
    methods:{
        handleClick(){
            wx.navigateTo({
                url: '/pages/lookCar/main'
            })
        },
        add(){
            this.$http.post('http://1.027365.net:88/Car', 
            {
                id: '',
                carNum: this.carNum,
                carSchoolNum: this.carSchoolNum,
                carColor: this.carColor,
                carType: this.carType,
            }).then((res)=>{
                console.log('res', res)
                console.log("添加成功")
            }).catch(err=>{
                console.log(err)
            })
        },
        publish(){
            this.$http.post('http://1.027365.net:88/News', 
            {
                id: '',
                news:this.news ,
                schoolNum: ""
            }).then((res)=>{
                console.log('res', res)
                console.log("添加成功")
            }).catch(err=>{
                console.log(err)
            })
        }
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

