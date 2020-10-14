<template>
  <div id="home">
    <div id="content">
      <h4>书架</h4>
      <ul>
        <div>
          <button @click="addBook">+</button>
        </div>
        <li id="inner">{{ innerBook }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

const { remote } = require('electron')
const fs = require('fs')

export default {
  data: {
    innerBook: null
  },
  methods: {
    async addBook () {
      const result = await remote.dialog.showOpenDialog({
        properties: ['openFile']
      })
      fs.readFile(result[0], 'utf-8', (err, data) => {
        if (err) {
          throw err
        }
        console.log(data.toString())
        let a = document.getElementById('inner')
        a.innerHTML = data.toString()
      })
    }
  }
}
</script>

<style lang="less">
#home {
  width: 100%;
  height: 100vh;
}
#content {
  ul {
    list-style: none;
    div {
      margin-top: 20px;
      margin-left: 20px;
      display: inline-block;
      background-color: grey;
      height: 150px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        width: 45px;
        height: 45px;
        border-radius: 22.5px;
        border: none;
        font-size: 25px;
      }
      button:hover {
        opacity: 0.5;
      }
      button:active {
        opacity: 0.2;
      }
    }
  }
}
</style>