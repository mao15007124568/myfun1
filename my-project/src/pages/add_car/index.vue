<template>
  <div>
    <div class="weui-panel weui-panel_access">
      <div v-if="carNum8" class="green weui-panel__hd">增加车牌</div>
      <div v-if="!carNum8" class="weui-panel__hd">增加车牌</div>
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
    <div class="btn" v-bind:class="checkNumber? 'check':'uncheck'" @click="applyCar('applyHours')">新增</div>
    <div v-if="!isHideKeyboard" class="board" style="width: 100%">
      <div v-if="isSwitch && index !== 6" class="weui-flex" v-for="(char, i) in alphaTxt" :key="i">
        <button @click="clickKeyboard(txt, $event)" class="weui-flex__item" v-for="(txt, j) in char.name" :key="j">{{txt}}</button>
      </div>
      <div v-if="isSwitch && index === 6" class="weui-flex" v-for="(char, i) in alphaExtendTxt" :key="i">
        <button @click="clickKeyboard(txt, $event)" class="weui-flex__item" v-for="(txt, j) in char.name" :key="j">{{txt}}</button>
      </div>
      <div v-if="!isSwitch" class="weui-flex" v-for="(char, i) in provinceTxt" :key="i">
        <button @click="clickKeyboard(txt, $event)" class="weui-flex__item" v-for="(txt, j) in char.name" :key="j">{{txt}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        minHours: 0,
        isSwitch: true,
        isHideKeyboard: false,
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
        index: 0
      }
    },
    watch: {},
    computed: {
      checkNumber() {
        return (
          this.carNum1 &&
          this.carNum2 &&
          this.carNum3 &&
          this.carNum4 &&
          this.carNum5 &&
          this.carNum6 &&
          this.carNum7
        )
      }
    },
    methods: {
      switchKeyboard(e) {
        this.isSwitch = !this.isSwitch
      },
      clickKeyboard(char, e) {
        if (char === 'ⓧ') {
          char = ''
        }
        switch (this.index) {
          case 0:
            this.carNum1 = char
            break
          case 1:
            this.carNum2 = char
            break
          case 2:
            this.carNum3 = char
            break
          case 3:
            this.carNum4 = char
            break
          case 4:
            this.carNum5 = char
            break
          case 5:
            this.carNum6 = char
            break
          case 6:
            this.carNum7 = char
            break
          case 7:
            this.carNum8 = char
            break
        }
        if (!this.carNum8) {
          this.index = ++this.index % 7
        } else {
          this.index = ++this.index % 8
        }
        if (this.index === 0) {
          this.isHideKeyboard = true
          this.isSwitch = false
        } else {
          this.isSwitch = true
        }
      },
      clickCarNumber(index, e) {
        this.isHideKeyboard = false
        if (index > 0) {
          this.isSwitch = true
        } else {
          this.isSwitch = false
        }
        this.index = index
      },
      changeHours(e) {
        this.hours = e.mp.detail.value
      },
      applyCar(type) {
        if (this.checkNumber) {
          var carNum =
            this.carNum1 +
            this.carNum2 +
            this.carNum3 +
            this.carNum4 +
            this.carNum5 +
            this.carNum6 +
            this.carNum7 +
            this.carNum8
        } else {
          wx.showToast({
            title: '车牌格式不正确',
            icon: 'none',
            duration: 1000,
            mask: true
          })
        }
      }
    },
    onLoad: function (options) {
      this.parkUserId = options.id
      this.hours = options.hours ? options.hours : 2
      this.inviteCode = options.inviteCode ? options.inviteCode : -1
      this.minHours = options.hours
    },
    mounted() {
      this.carNum3 = ''
      this.carNum4 = ''
      this.carNum5 = ''
      this.carNum6 = ''
      this.carNum7 = ''
      this.carNum8 = ''
      this.index = 0
      this.isSwitch = false
    }
  }

</script>

<style>
  .padding {
    padding: 10px;
  }

  .car-number {
    text-align: center;
  }

  .green {
    color: #41da33;
  }

  .car-number span {
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 50px;
    font-size: 10px;
  }

  .car-number button {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    line-height: 50px;
    margin: 5px;
    padding: 0px;
    border-radius: 0px;
    background-color: white;
    box-sizing: content-box;
  }

  button::after {
    border: 0;
  }

  .switch {
    font-size: 18px;
    text-align: right;
    color: #1296db;
    height: 45px;
    bottom: 260px;
    right: 0px;
    padding: 20px;
    position: fixed;
    border-bottom: #1296db 1px dotted;
  }

  .btn {
    width: 100%;
    border-radius: 3px;
    font-size: 18px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    height: 45px;
    bottom: 0;
    position: fixed;
  }

  .check {
    background-color: #1296db;
  }

  .uncheck {
    background-color: #cfcfcf;
  }

  .board {
    bottom: 50px;
    position: fixed;
  }

  .board div button {
    border: #1296db 1px dashed;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    line-height: 50px;
    margin: 5px;
    padding: 0px;
    border-radius: 0px;
    background-color: white;
    box-sizing: content-box;
  }

  .unselected {
    border: #1296db 1px solid;
    background-color: white;
  }

  .selected {
    border: #ee7d82 1px solid;
    background-color: gainsboro;
  }

  .green-unselected {
    border: #41da33 1px solid;
    background-color: white;
  }

  .green-selected {
    border: #ee7d82 1px solid;
    background-color: gainsboro;
  }

</style>
