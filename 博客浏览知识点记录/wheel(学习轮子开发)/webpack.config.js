const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //每次构建清理dist目录

module.exports = {
    //模式配置
    mode:"development",
    // 入口文件
    entry:{
        pagination:'./src/es6/index.js'
    },
    // 出口文件
    output:{
        path:path.resolve(__dirname,"dist-es6"),
        filename:"csdwheels.min.js",
        libraryTarget:'umd',
        library:'csdwheel'
    },
    //对应的插件
    plugins:[
        new CleanWebpackPlugin(['dist-es6']),
        new UglifyJsPlugin({
            test:/\.js($|\?)/i
        })
    ],
    //开发服务器
    devServer:{},
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.join(__dirname,'src/es6'),
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.scss$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                },{
                    loader:'sass-loader'
                }]
            }
        ]
    }
}