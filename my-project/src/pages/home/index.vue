
<template>
    <div>
    <br/><br/>
    <i-notice-bar id="test" icon="systemprompt"  loop closable>
       {{notice}}
    </i-notice-bar>

    <swiper
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
    >
    <block v-for="item in imgUrls" :key="item">
        <swiper-item>
        <image :src="item" class="slide-image" width="400" height="150" />
        </swiper-item>
    </block>
    </swiper>


    <i-card title="预约" extra="进入" i-class="re_card" @click="move">
    <view slot
    ="content">预约即可享受免等待练车服务</view>
    <view>查看预约</view>
    <view slot="footer" @click="move">查看科目二驾考规则</view>
    </i-card>

    <i-card title="详情" extra="进入" i-class="re_card" @click="move1">
    <view slot="content">可实时查看驾校练车状态</view>
    <view>查看预约</view>
    <view slot="footer">尾部内容</view>
    </i-card>
    
    </div>
</template>

<script>
export default {
    data:{
        position: 'left',
        showLeft1: false,
        notice:'今日练车人数非常少，小伙伴们快来练车哟',
        imgUrls: [
      '/static/images/1.jfif',
      '/static/images/2.jfif',
      '/static/images/3.jfif',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557395187&di=ea5dd9b359b30ec505d1c82a82702f61&imgtype=jpg&er=1&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FU9VgtwTyy7mYpXVYHmFhVpd7Ey3SGXCVZHfzhZ3R4M8NTbdoNIyoXAYAkNcribIMCvpULOcyqCobaYZTcIfSCAQ%2F640%3Fwx_fmt%3Djpeg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
    },
    created(){
        this.$http.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET').then((res)=>{
        console.log('res', res)
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
        toggleLeft1() {
        this.setData({
            showLeft1: !this.data.showLeft1
          });
        },
        move(){
            wx.navigateTo({
                url: '/pages/reserve/main'
            })
        },
        move1(){
            wx.navigateTo({
                url: '/pages/status/main'
            })
        }
    }
}
</script>

<style scoped>
.overall {
  background-color:#f8f8f9;
}

div >>> .re_card {
    margin-top:20px;
}

div /deep/._swiper {height:190px}
._swiper /deep/ ._swiper-item image { width:90%;display:block;margin:2px auto;}
</style>

