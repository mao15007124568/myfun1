<template>
    <div>
    <br/><br/>
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
    <view>查看预约</view>
    <view slot="footer">尾部内容</view>
    </i-card>

    <i-grid>
            <i-grid-item>
                <i-grid-icon>
                    <image src="../../static/tabs/orders.png" />
                </i-grid-icon>
                <i-grid-label>Grid</i-grid-label>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <image src="../../static/tabs/orders.png" />
                </i-grid-icon>
                <i-grid-label>Grid</i-grid-label>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <image src="../../static/tabs/orders.png" />
                </i-grid-icon>
                <i-grid-label>Grid</i-grid-label>
            </i-grid-item>
    </i-grid>

     <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
    </div>
</template>

<script>
export default {

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

