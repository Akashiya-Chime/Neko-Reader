<template>
    <div id="bookcase">
      <div id="content">
        <h4>阅读</h4>
        <ul>
          <li id="inner">{{ innerBook }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      innerBook: null
    }
  }
}
</script>

<style lang="less">
#bookcase {
    width: 100%;
    height: 100vh;
}
#content {
  padding-left: 60px;
  padding-top: 45px;
}
</style>