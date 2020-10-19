// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
      rootValue: 37.5, //750px设计图的根元素
      propList: ['*'],
      minPixelValue: 0,
      exclude: /node_modules/i
    }
  }
}
