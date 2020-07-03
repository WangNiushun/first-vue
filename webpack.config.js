var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'), //设置出口的文件路径
    filename: 'main.js'
  },


  module: {
    rules: [
      // 配置各种loader
      // ES6转化ES5
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // 解析css
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader'],
      },



      // 解析图片, 媒体文件
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于8kb 的图片转化为base64字符串代替,为了减少请求次数
            },
          },
        ],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },



    ]
  },

  // 插件配置 
  plugins: [
    new HtmlWebpackPlugin({
      template:"./src/public/index.html"
    }), //加一个配置对象让vue 可以找到对应的模板挂载点; 本质就是让
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],


  devServer: {
    port: 9000,
    open: true,
    quiet: true
  },

  devtool: "eval-cheap-module-source-map"
};