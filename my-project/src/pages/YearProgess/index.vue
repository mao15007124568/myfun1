<template>
  <div class="year-progess">
    <progress :percent="percent" activeColor="#EA5A49"/>
    <p>{{year}}已经过去{{days}}天，{{percent}}%</p>
  </div>
</template>

<script>
export default {
  computed: {
    // 过了多少天
    days () {
      // 第一天
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // 今天的时间戳减去第一天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 3600 / 24) + 1
    },
    // 今年是什么年
    year () {
      return new Date().getFullYear()
    },
    percent () {
      return (this.days / this.getDayOfYear() * 100).toFixed(1)
    }
  },
  methods: {
    // 判断是否是闰年
    isLeadYear () {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    // 获取当前年份的天数
    getDayOfYear () {
      return this.isLeadYear ? 366 : 365
    }
  }
}
</script>

<style lang="less" scoped>
 .year-progess {
   width: 100%;
   margin-bottom: 20px;
   progress {
     margin-bottom: 10px;
   }
 }
</style>
