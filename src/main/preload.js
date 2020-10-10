// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const { ipcRenderer } = require('electron')

var max = document.getElementById('max');
if (max) {
    max.addEventListener('click', () => {
        //发送最大化命令
        ipcRenderer.send('window-max');
        // //最大化图形切换
        // if (max.getAttribute('src') == 'images/max.png') {
        //     max.setAttribute('src', 'images/maxed.png');
        // } else {
        //     max.setAttribute('src', 'images/max.png');
        // }
    })
}

var min = document.getElementById('min');
console.log(min)
console.log('found')
if (min) {
    min.addEventListener('click', () => {
        //发送最小化命令
        ipcRenderer.send('window-min');
    })
}

var close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        //发送关闭命令
        ipcRenderer.send('window-close');
    })
}

})
