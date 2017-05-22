/**
 * Created by tangjiang on 2017/5/11.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, '/app/main.js')
    },
    output: {
        filename: '[name].[chunkhash].js',
        publicPath: '/static/',
        path: path.join(__dirname, 'www/static')
    },
    module: {
        loaders: [
            {
                test: /\.vue/,
                loaders: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.md$/,
                loaders: ['html-loader', 'markdown-loader']
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({  // 自动生成包含新的打包文件路径的html文件
            filename: path.join(__dirname, '/www/index.html'),
            template: path.join(__dirname, '/app/index.html')
        })
    ]
}