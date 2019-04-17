<template>
  <!-- <div>
      <i-tabs :current="current_scroll"  @change="handleChangeScroll">
        <i-tab key="tab1" title="已预约"></i-tab>
        <i-tab key="tab2" title="预约记录"></i-tab>
    </i-tabs>
  </div> -->

   
  <div class="test">
      <div class="testNav">
        <div
          :class="{'selected':tab === 1,'testTitle':true}"
          @click="changTab(1)"
        >人气</div>
        <div
          :class="{'selected':tab === 2,'testTitle':true}"
          @click="changTab(2)"
        >销量</div>
        <div
          :class="{'selected':tab === 3,'testTitle':true}"
          @click="changTab(3)"
        >综合</div>
      </div>
      <div class="container">
        <div v-if="tab===1">1</div>
        <div v-else-if="tab===2">2</div>
        <div v-else>3</div>
      </div>
    </div>

</template>

<script>
  

  export default {
     data() {
        return {
        tab: 1
        };
    },
    methods: {
        changTab(index) {
        this.tab = index;
        }
    }
  }

</script>

<style>
 .test {
    width: 100%;
 }
 .testNav {
    padding: 0 20rpx;
    height: 80rpx;
    line-height: 80rpx;
    display: flex;
}
.testTitle {
    flex: 1;
    text-align: center;
}
.selected {
    color: #87caee;
    border-bottom: 1px solid #87caee;
}
.container {}

</style>

