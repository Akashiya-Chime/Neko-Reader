<template>
  <div id="wrapper">
    <div id="left-header">
      <button @click="bookcase">书架</button>
      <button @click="reading">阅读</button>
      <button @click="setting">设置</button>
    </div>
    <div id="header">
      <div id="switch">
        <img :src="windowMin" @click="min">
        <img :src="windowMax" @click="max">
        <img :src="windowClose" @click="close">
      </div>
    </div>
  </div>
</template>

<script>

const { ipcRenderer } = require('electron')

export default {
  data () {
    return {
      windowMin: require('@/assets/img/min.png'),
      windowMax: require('@/assets/img/max.png'),
      windowClose: require('@/assets/img/close.png')
    }
  },
  methods: {
    bookcase () {
      this.$router.push('/')
    },
    reading () {
      this.$router.push('reading')
    },
    setting () {
      this.$router.push('setting')
    },
    min () {
      ipcRenderer.send('window-min')
    },
    max () {
      ipcRenderer.send('window-max')
    },
    close () {
      ipcRenderer.send('window-close')
    }
  },
  mounted: function () {
    window.onresize = () => {
      if (window.outerHeight === screen.availHeight && window.outerWidth === screen.availWidth) {
        this.windowMax = require('@/assets/img/max(ed).png')
      } else {
        this.windowMax = require('@/assets/img/max.png')
      }
    }
  }
}
</script>

<style lang="less">

@headerHeight: 30px;
@headerWidth: 45px;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
// html {
//   overflow: hidden; // 禁用滚动条后却依然会有右边有空缺的感觉
// }
#left-header {
  position: absolute;
  left: 0;
  top: 30px;
  width: @headerWidth;
  height: 200px;
  background-color: #808080;
  position: fixed;  // 固定定位
  z-index: 100;  // 置顶
  border-radius: 0 0 45px 0;
  button {
    height: 40px;
    word-wrap: break-word;
    position: relative;
    width: 100%;
    border: none;
  }
  button:hover {
    background-color: #ffffff;
  }
}
#header {
  position: absolute;
  left: 0px;
  width: 100%;
  height: @headerHeight;
  background-color: #e5eecc;
  position: fixed;
  -webkit-app-region: drag;
  z-index: 100;  // 置顶
}
#switch {
  position: relative;
  overflow: auto;
  -webkit-app-region: no-drag;
  float: right;
  button {
    float: left;
    background-color: #e5eecc;
    color: #FFFAFAFA;
    border: none;
    height: @headerHeight;
    width: 45px;
    text-align: center;
  }
  img {
    float: left;
    border: none;
    height: @headerHeight;
    width: 45px;
  }
  img:hover {
    background-color: grey;
  }
}
</style>