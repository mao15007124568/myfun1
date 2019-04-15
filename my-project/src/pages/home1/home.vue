<template>
    <div>
    <i-panel v-for="item in action" :key="item" title="请输入你想发送的通知">
        <i-input :value="item.news" title="通知" autofocus placeholder="通知" />
    </i-panel>
    <i-card title="预约" extra="进入" i-class="re_card" @click="move">
    <view slot="content">预约即可享受免等待练车服务</view>
    <view>查看预约</view>
    <view slot="footer" @click="move">查看科目二驾考规则</view>
    </i-card>

    <i-card title="详情" extra="进入" i-class="re_card" @click="move">
    <view slot="content">可实时查看驾校练车状态</view>
    <view>查看预约</view>
    <view slot="footer">尾部内容</view>
    </i-card>

    </div>
</template>

<script>
export default {
    data:{
       return:{
           action:[]
       }
    },
    created(){
        this.$fly.request({
            method:"post", //post/get 请求方式
            url:"http://1.027365.net:88/News/${schoolNum}/1",
          }).then(res =>{
            console.log(res)
            console.log(res.data)
            this.action = res.data
        })
    },
    methods:{
        start(){
            
        },
        move(){
            wx.navigateTo({
                url: '/pages/register/main'
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

._swiper /deep/ ._swiper-item image { width:90%;display:block;margin:2px auto;}
</style>

