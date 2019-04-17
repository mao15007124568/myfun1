<template>
  <div class="test">
      <div class="testNav">
        <div
          :class="{'selected':tab === 1,'testTitle':true}"
          @click="changTab(1)"
        >近期预约
        
        </div>
        <div
          :class="{'selected':tab === 2,'testTitle':true}"
          @click="changTab(2)"
        >历史预约</div>
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
    color: #2d8cf0;
    border-bottom: 1px solid #2d8cf0;
}
.container {}

</style>

