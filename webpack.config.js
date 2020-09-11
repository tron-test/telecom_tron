/*
 * @Author: your name
 * @Date: 2020-09-11 09:15:00
 * @LastEditTime: 2020-09-11 09:23:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \9e:\data\9-CODE\202009培训\11\telecom-project\telecom_tron\webpack.config.js
 */
const path = require('path')
const webpack = require('webpack')

module.exports = {
    watch:true,
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'boundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            { 
                test: /\.js$/,
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            { 
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            { 
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        host:'127.0.0.1',
        port:'8080',
        hot:true,
        contentBase:'./src'
    }
}