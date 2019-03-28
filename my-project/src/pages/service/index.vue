<template>
    <div class="overall">
    <i-cell-group>
    <i-cell title="只显示箭头" is-link></i-cell>
    <i-cell title="跳转到首页" is-link url="/pages/home/home"></i-cell>
    <i-cell title="只有 footer 点击有效" is-link url="/pages/logs/index" only-tap-footer></i-cell>
    <i-cell title="开关">
        <switch slot="footer" checked />
    </i-cell>
    </i-cell-group>

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
  height:500px;
}
</style>