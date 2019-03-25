<template>
    <div>
     <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
    </div>
</template>

<script>
 Page({
    data: {
        current: 'homepage'
    },

    handleChange ({ detail }) {
        this.setData({
            current: detail.key
        });
    }
});
</script>

<style>

</style>
