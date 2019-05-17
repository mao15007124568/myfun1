<template>
  <div>
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
        >全部预约
        </div>
      </div>
      
    </div>
    <div>
        <newreserve v-if="tab==1"></newreserve>
        <historyreserve v-if="tab==2"></historyreserve>  
    </div>
    </div>
</template>

<script>
  import  newreserve  from '@/pages/newreserve/index.vue'
  import historyreserve from '@/pages/historyreserve/index'
  

  export default {
     data() {
        return {
        tab: 1,
        }
    },
    components: {
      newreserve,
      historyreserve
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

