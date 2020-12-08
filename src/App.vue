<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  name: 'App',
  data(){
    return{ }
  },
  created(){
    wx.hideOptionMenu();
  }
}
</script>

<style>
html,body,ul,li,p,div{
  margin: 0;
  padding: 0;
}
html{
 /* background: #e7e7e7; */
  background: #ededed;
}
#app {
  font-family: "PingFang SC",sans-serif,"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #373737;
}
body::-webkit-scrollbar {display: none;/*隐藏滚轮*/}
body{
  padding-right: 0px !important;
}
button,input{
  outline: none;
}
.el-message--success{
    padding: 15px;
    font-size: 14px;
    width: 100%;
}
.el-message--success .el-message__content{
  font-size: 14px;
}
.el-message{
    min-width: 300px;
}
.el-message-box{
    width: 320px !important;
}
.el-message-box .el-message-box__btns button{
  width: 115px;
}
.el-message-box .el-message-box__btns button:first-child:not(:last-child){
    color: #60b3ff;
    border:1px solid #60b3ff;
}
</style>
