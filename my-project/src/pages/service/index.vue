<template>
    <div>
        <i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
            <i-tab key="tab1" title="选项1"></i-tab>
            <i-tab key="tab2" title="选项2"></i-tab>
            <i-tab key="tab3" title="选项3"></i-tab>
            <i-tab key="tab4" title="选项4"></i-tab>
            <i-tab key="tab5" title="选项5"></i-tab>
            <i-tab key="tab6" title="选项6"></i-tab>
            <i-tab key="tab7" title="选项7"></i-tab>
            <i-tab key="tab8" title="选项8"></i-tab>
            <i-tab key="tab9" title="选项9"></i-tab>
        </i-tabs>
       
    </div>
</template>

<script>
export default {
data () {
    return {
      data: {
        current_scroll: 'tab1'
    },
   }
  },
  methods: {
    handleChangeScroll (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
.overall {
  background-color:#f8f8f9;
  height:500px;
}
.radio{
    text-align:left;
}
.cell-panel-demo{
    display: block;
    margin-top: 15px;
}
</style>