<template>
    <div id="wrapper">
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