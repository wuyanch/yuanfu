let isPro = process.env.NODE_ENV === 'production' //process.env.NODE_ENV用于区分是生产环境还是开发环境
// const serverSrc='http://gdbbc.pension.taikang.com/mybp/work';//正式环境
// const serverSrc = '';//测试环境
export default {
    serverSrc: isPro ? 'http://gdbbc.pension.taikang.com/mybp/work':'' //服务器地址
  }
