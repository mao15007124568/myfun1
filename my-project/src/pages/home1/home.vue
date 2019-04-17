<template>
    <div>
    <!-- <i-card title="添加和修改车辆信息" extra="进入" i-class="re_card" @click="move">
    <view slot="content">增加车辆信息</view>
    <view>发送通知</view>
    <view slot="footer" @click="move">发送通知</view>
    </i-card> -->

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">添加普通车牌</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__bd weui-media-box__bd_in-appmsg car-number weui-flex">
            <button v-bind:class="index == 0? 'selected':'unselected'" @click="clickCarNumber(0, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum1}}</button>
            <button v-bind:class="index == 1? 'selected':'unselected'" @click="clickCarNumber(1, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum2}}</button>
            <span class="weui-flex__item">●</span>
            <button v-bind:class="index == 2? 'selected':'unselected'" @click="clickCarNumber(2, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum3}}</button>
            <button v-bind:class="index == 3? 'selected':'unselected'" @click="clickCarNumber(3, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum4}}</button>
            <button v-bind:class="index == 4? 'selected':'unselected'" @click="clickCarNumber(4, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum5}}</button>
            <button v-bind:class="index == 5? 'selected':'unselected'" @click="clickCarNumber(5, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum6}}</button>
            <button v-bind:class="index == 6? 'selected':'unselected'" @click="clickCarNumber(6, $event)" class="weui-flex__item"
              maxlength="1" value="">{{carNum7}}</button>
            <button v-bind:class="index == 7? 'green-selected':'green-unselected'" @click="clickCarNumber(7, $event)"
              class="weui-flex__item" maxlength="1" value="">{{carNum8}}</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isHideKeyboard && (index == 0)" class="switch" @click="switchKeyboard($event)">切换键盘</div>
    <div class="btn" v-bind:class="checkNumber? 'check':'uncheck'" @click="bindCar()">绑定</div>
    <div v-if="!isHideKeyboard" class="board" v-bind:style="{width: boardWidth + 'px'}">
      <div  class="weui-flex" v-for="(char, i) in alphaTxt" :key="i">
        <button @click="clickKeyboard(txt, $event)" class="weui-flex__item" v-for="(txt, j) in char.name" :key="j">{{txt}}</button>
      </div>
      <div class="weui-flex" v-for="(char, i) in alphaExtendTxt" :key="i">
        <button @click="clickKeyboard(txt, $event)" class="weui-flex__item" v-for="(txt, j) in char.name" :key="j">{{txt}}</button>
      </div>
      <div class="weui-flex" v-for="(char, i) in provinceTxt" :key="i">
        <button @click="clickKeyboard(txt, $event)" class="weui-flex__item" v-for="(txt, j) in char.name" :key="j">{{txt}}</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    data:{
       return:{
           provinceTxt: [{
            name: ['鲁', '京', '沪', '浙', '苏', '闽', '赣', '晋', '吉']
          },
          {
            name: ['冀', '鄂', '粤', '渝', '川', '贵', '云', '藏', '黑']
          },
          {
            name: ['津', '琼', '蒙', '辽', '豫', '皖', '陕', '甘', '宁']
          },
          {
            name: ['新', '湘', '青', '桂', '', '', '', '', '']
          }
        ],
        alphaTxt: [{
            name: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
          },
          {
            name: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
          },
          {
            name: ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']
          },
          {
            name: ['W', 'X', 'Y', 'Z', '', '', '', '', '', 'ⓧ']
          }
        ],
        alphaExtendTxt: [{
            name: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
          },
          {
            name: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']
          },
          {
            name: ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']
          },
          {
            name: ['W', 'X', 'Y', 'Z', '港', '澳', '使', '学', '', 'ⓧ']
          }
        ],
        carNum1: '',
        carNum2: '',
        carNum3: '',
        carNum4: '',
        carNum5: '',
        carNum6: '',
        carNum7: '',
        carNum8: '',
        index: 2
       }
    },
    created(){
      // this.$http.get('http://www.baidu.com', 'param').then((res)=>{
      //   console.log('res', res)
      // }).catch(err=>{
      // })
    },
    methods:{
        start(){
            
        },
        move(){
            wx.navigateTo({
                url: '/pages/register/main'
            })
        }
    }
}
</script>

<style scoped>
.overall {
  background-color:#f8f8f9;
}

div >>> .re_card {
    margin-top:20px;
}

._swiper /deep/ ._swiper-item image { width:90%;display:block;margin:2px auto;}
</style>

