
// 测试使用
// import indexcss from './public/css/index.css'
// import imgSrc from "./public/images/2.png"
// let a = ()=>{
//   console.log(1)
// }

// let imgNode = new Image()
// imgNode.src = imgSrc
// document.body.appendChild(imgNode)


// 1.创建 components 文件件, 在内部去定义MyButton组件
// 2.在src内部创建app 组件,用来组装以后所有的组件
// 3.在Vue中去注册组件,并去渲染组件

import Vue from "vue"
import App from './App.vue'

new Vue({

  render: createElements => createElements(App),  // 简单版, 注册我们的App组件,并且会把App组件渲染
  // render:function(h){
  //   return h(App)
  // }
  // App 注册
  // components:{
  //   App
  // },
  // template:"<App>" // 就是vue要渲染的模板
}).$mount("#root")