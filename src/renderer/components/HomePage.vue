<template>
  <div id="wrapper">
    <div id="left-header">leftbar
      <button>书架.ico</button>
      <a href="/settingpage">设置.ico</a>
    </div>
    <div id="header">header
      <button>缩小到托盘</button>
      <button>全屏</button>
      <button>关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  el: '#wrapper',
  data: {

  },
  methods: {
    // toHerf: () => {
    //   router.push({
    //     name: 'setting-page'
    //   })
    // }
  }
}
</script>
<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html {
  overflow: hidden;  // 禁用滚动条后却依然会有右边有空缺的感觉
}
#left-header {
  position: absolute;
  left: 0;
  top: 0;
  width: 45px;
  height: 200px;
  background-color: grey;
  button {
    word-wrap: break-word;
    position: relative;
    width: 100%;
  }
}
#header {
  position: absolute;
  left: 45px;
  width: 100%;
  height: 30px;
  background-color: red;
  button {
    position: relative;
    overflow: auto;
  }
}
</style>