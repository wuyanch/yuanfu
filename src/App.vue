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
  created(){
    wx.ready(() => {
        console.log('wx.ready');
        wx.hideOptionMenu();
    });
    // this.getToken();
  },
  beforeCreate(){
    // this.getToken();
     console.log("我是初始化")
    //  let exp = new Date();
    //     exp.setTime(exp.getTime() - 1);
    //   let strcookie = document.cookie;//获取cookie字符串
    //   let arrcookie = strcookie.split("; ");//分割
    //   //遍历匹配
    //   for ( let i = 0; i < arrcookie.length; i++) {
    //       let arr = arrcookie[i].split("=");
    //       if (arr[0] == 'token' && arr[1] != ''){
    //         localStorage.setItem('token',arr[1]);
    //         document.cookie = arr[0] + "=" + arr[1] + ";expires="+ exp.toUTCString();
    //       }
    //   }
  },
   methods:{
        getToken: function(){
            // let search = window.location.search;
            let search = window.location.hash;
            console.log("search"+search);
            if(search == ''){//没有带token的页面刷新的
              if(localStorage.getItem('token') && localStorage.getItem('token') != ''){
                this.$router.push({path:'/'});
              }else{
                this.$router.push({name:'error'});
              }
            }else{
              let YF_token = this.getSearchString('token', search); //结果：18
              console.log(search);
              console.log("YF_token"+YF_token);
              if((YF_token != undefined || YF_token != '' || YF_token != null) && YF_token){
                  localStorage.setItem('token',YF_token);
                  this.$router.push({path:'/'});
              }else{
                  this.$router.push({name:'error'});
              }
            }
            
        },
        getSearchString: function(key, Url) {
            let str = Url;
            let arr ;
            str = str.substring(Number(str.indexOf('?'))+Number(1), str.length); // 获取URL中?之后的字符（去掉第一位的问号）
            // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
            if(str.indexOf("&") != -1 ) {
                arr = [];
            }else{
                arr = str.split("&");
            }
           
            let obj = new Object();

            // 将每一个数组元素以=分隔并赋给obj对象 
            for (var i = 0; i < arr.length; i++) {
                var tmp_arr = arr[i].split("=");
                obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
            }
            return obj[key];
        }
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
