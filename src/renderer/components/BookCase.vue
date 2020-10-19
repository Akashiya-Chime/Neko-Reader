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
  data () {
    return {
      innerBook: null
    }
  },
  methods: {
    // 异步方法，读取书
    async addBook () {
      // 先跳转到阅读界面
      this.$router.push('/reading')
      const result = await remote.dialog.showOpenDialog({
        // 允许选择文件:'openFile',允许选择文件夹:'openDirectory',允许多选:'multiSelections'
        properties: ['openFile', 'multiSelections']
      })
      fs.readFile(result[0], 'utf-8', (err, data) => {
        if (err) {
          throw err
        }
        // 切片
        // 保证换行
        let dataStr = data.toString().replace(/\r\n/g, '<br />')
        window.dataPiece = []
        let dataIndex = 0
        for (let anchor = 0; dataIndex < dataStr.length; anchor += 10000) {
          window.dataPiece[dataIndex] = dataStr.slice(anchor, anchor + 10000)
          dataIndex++
        }
        // 渲染
        window.index = 0
        document.getElementById('inner').innerHTML += window.dataPiece[window.index]
      })
    }
  },
  // 加载页面后调用该方法
  mounted: function () {
    window.onscroll = () => {
      // 检测是否滚动到底部
      if (window.pageYOffset + window.innerHeight + 1 > document.documentElement.scrollHeight) {
        document.getElementById('inner').innerHTML += window.dataPiece[window.index++]
      }
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