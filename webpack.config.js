let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./app/app.js',
    output: {
        filename:"bundle.js",
        path:path.resolve('dist')
    },
    module: {
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.css$/,use:['style-loader','css-loader']}

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './app/index.html'
        })
    ],
    devtool: 'source-map', //错误时可以提示源码错误，不会光显示bundl.js错误
    devServer: {
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};