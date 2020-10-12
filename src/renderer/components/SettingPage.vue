<template>
    <div id="setting">
      <div>This is setting page</div>
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
#setting {
    width: 100%;
    height: 100vh;
}
</style>