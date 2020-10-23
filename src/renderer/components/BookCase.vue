<template>
  <div id="home">
    <div id="content">
      <h4>书架</h4>
      <div>
        <!-- vue 会推荐 v-bind:key (相当于 SQL 的主键?) -->
        <div id="books" v-for="Books in Books" :key="Books">{{ Books }}</div>
        <div>
          <button @click="addBook">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const { remote } = require('electron')
const fs = require('fs')

export default {
  data () {
    return {
      Books: []
    }
  },
  methods: {
    // 异步方法，读取书
    async addBook () {
      const result = await remote.dialog.showOpenDialog({
        // 允许选择文件:'openFile',允许选择文件夹:'openDirectory',允许多选:'multiSelections'
        properties: ['openFile', 'multiSelections']
      })
      this.showBook(result[0])
      // 如果打开了文件，则跳转到阅读界面
    },
    showBook (bookAdress) {
      if (bookAdress) {
        this.Books.push(bookAdress)
        this.$router.push('/reading')
        fs.readFile(bookAdress, 'utf-8', (err, data) => {
          if (err) {
            throw err
          }
          // 切片
          // 保证换行
          let dataStr = data.toString().replace(/\r\n/g, '<br />')
          window.dataPiece = []
          let dataIndex = 0
          // 最后 += 的数字代表每次加载的字符数
          for (let anchor = 0; dataIndex < dataStr.length; anchor += 10000) {
            window.dataPiece[dataIndex] = dataStr.slice(anchor, anchor + 10000)
            dataIndex++
          }
          // 渲染
          window.index = 0
          document.getElementById('inner').innerHTML += window.dataPiece[window.index]
        })
      }
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
    // 拖拽事件
    let dp = window
    dp.addEventListener('dragover', (e) => {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    })
    dp.addEventListener('drop', (e) => {
      e.stopPropagation()
      e.preventDefault()
      let files = e.dataTransfer.files
      // files是一个文件对象列表
      this.showBook(files[0].path)
    })
  }
}
</script>

<style lang="less">
#home {
  width: 100%;
  height: 100vh;
}
#content {
  div {
    list-style: none;
    position: relative;
    float: left;
    div {
      text-align: center;
      word-break: break-all;
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
#books {
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;
  background-color: grey;
  height: 150px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>