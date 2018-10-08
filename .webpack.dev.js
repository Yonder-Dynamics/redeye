const merge = require("webpack-merge");
const common = require("./.webpack.common.js");

module.exports = merge(common,{
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./public',
    port: 3000
  },
  mode:'development',
});
