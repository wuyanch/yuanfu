module.exports = {
    proxy: {
          '/': {    //将www.exaple.com印射为/apis
              target: 'http://gdbbc.pension.taikang.com/mybp/work',  
              //http://tktk.cn1.utools.club http://gdbbc.pension.taikang.com/mybp/work http://tkwx.utools.club http://tktk.utools.club    https://apptest.utools.club    http://tkyfstaff.free.qydev.com接口域名/ http://tkyfstaff.utools.club
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/apis': ''   //需要rewrite的,
              }              
          }
    }
}