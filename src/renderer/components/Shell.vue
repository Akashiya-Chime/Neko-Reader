<template>
  <div id="wrapper">
    <div id="left-header">
      <button @click="bookcase">书架</button>
      <button @click="setting">设置</button>
    </div>
    <div id="header">
      <div id="switch">
        <button @click="min">最小化</button>
        <button @click="max">最大化</button>
        <button @click="close">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>

const { ipcRenderer } = require('electron')

export default {
  methods: {
    bookcase () {
      this.$router.push('bookcase')
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
html {
  overflow: hidden; // 禁用滚动条后却依然会有右边有空缺的感觉
}
#left-header {
  position: absolute;
  left: 0;
  top: 0;
  width: @headerWidth;
  height: 200px;
  background-color: #808080;
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
  left: 45px;
  width: 100%;
  height: @headerHeight;
  background-color: #d8d7d7fa;
  -webkit-app-region: drag;
}
#switch {
  position: relative;
  overflow: auto;
  -webkit-app-region: no-drag;
  float: right;
  margin-right: 45px;
  button {
    float: left;
    background-color: white;
    color: #FFFAFAFA;
    border: none;
    height: @headerHeight;
    width: 45px;
    text-align: center;
  }
  button:hover {
    background-color: grey;
  }
}
</style>