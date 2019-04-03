<template>
    <div>
    <br/><br/>
<<<<<<< HEAD
    <i-card title="预约" extra="进入" i-class="re_card" @click="move">
    <view slot="content">预约即可享受免等待练车服务</view>
=======
    <i-card title="驾校查询" extra="不知道该写些什么内容" i-class="re_card" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">内容不错</view>
    <view>查看预约</view>
    <view slot="footer">尾部内容</view>
    </i-card>

    <i-card title="实时查看练车信息" extra="不知道该写些什么内容" i-class="re_card" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">内容不错</view>
    <view>查看预约</view>
    <view slot="footer">尾部内容</view>
    </i-card>

    <i-card title="查看驾校评分" extra="不知道该写些什么内容" i-class="re_card" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">内容不错</view>
>>>>>>> fa6fc5ae43348e5969660009a4708d8c159818de
    <view>查看预约</view>
    <view slot="footer">尾部内容</view>
    </i-card>

    <i-card title="实时" extra="进入" i-class="re_card">
    <view slot="content">查看驾校详细练车状况</view>
    <view>查看详情</view>
    <view slot="footer">尾部内容</view>
    </i-card>
    </div>
</template>

<script>
export default {
    methods:{
        move(){
            wx.navigateTo({
                url: '/pages/logs/main'
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
</style>

