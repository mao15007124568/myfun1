<template>
    <div>
        <radio-group class="radio-group" @change="radioChange">
      <label class="radio" v-for="(item, index) in items" :key="item.name">
        <radio :value="item.name" :checked="item.checked"/> {{item.value}}
      </label>
    </radio-group>
       
    </div>
</template>

<script>
export default {
data () {
    return {
      items: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'},
        {name: 'BRA', value: '巴西'},
        {name: 'JPN', value: '日本'},
        {name: 'ENG', value: '英国'},
        {name: 'TUR', value: '法国'}
      ]
    }
  },
  methods: {
    radioChange (e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
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