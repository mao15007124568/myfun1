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
        <image :src="item" class="slide-image" width="355" height="150" />
        </swiper-item>
    </block>
    </swiper>

    <!-- <i-panel title="练车状态">
        <i-radio-group :current="current" @change="handleFruitChange">
            <i-radio v-for="item in fruit" :position="position" :key="item.id" :value="item.name">
            </i-radio>
        </i-radio-group>
    </i-panel> -->

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

    <!-- <i-button @click="toggleLeft1" type="ghost">左边弹出1</i-button> -->
    <!-- <i-drawer mode="left" :visible="showLeft1" @close="toggleLeft1">
        <view class="demo-container">
            单击遮罩层关闭
        </view>
    </i-drawer> -->

    <i-button bind:click="handleClick" type="primary">查看科二驾考规则</i-button>
    </div>
</template>

<script>
export default {
    data:{
        fruit: [
            {
            id: 0,
            name: '未预约',
        }, {
            id: 1,
            name: '已预约',
        }, {
            id: 2,
            name: '待练车'
        }, {
            id: 3,
            name: '正在练车'
        }, {
            id: 4,
            name: '练车完成',
        }],
        current: '苹果',
        position: 'left',
        showLeft1: false,
        notice:'今日练车人数非常少，小伙伴们快来练车哟',
        imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
    },
    methods:{
        toggleLeft1() {
        this.setData({
            showLeft1: !this.data.showLeft1
          });
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
</style>

