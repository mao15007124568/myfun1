<template>
    <div>
    <i-tab-bar>
        <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title=""></i-tab-bar-item>
        <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="Friends"></i-tab-bar-item>
        <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" count="3" title="Notice"></i-tab-bar-item>
        <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" dot title="My"></i-tab-bar-item>
    </i-tab-bar>

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

<style>

</style>