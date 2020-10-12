<template>
    <div id="bookcase">
      <div>This is bookcase page</div>
      <button @click="back">back</button>
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
</style>