<template>
    <div id="bookcase">
      <div id="content">
        <div>This is bookcase page</div>
        <button @click="back">back</button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
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
  padding-left: 45px;
  padding-top: 30px;
}
</style>