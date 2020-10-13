<template>
  <div id="app">
    <div id="shell">
      <router-view name="shell"></router-view>
    </div>
    <div id="view">
      <router-view name="view"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'neko-reader'
  }
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: 'Microsoft YaHei';
}
#shell {
  z-index: 100;
  overflow: visible;
}
</style>
