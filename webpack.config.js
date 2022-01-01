const HtmlWebpackPlugin = require('html-webpack-plugin');   //引入html文件打包用到的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //引入css文件单独打包用到的插件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');  //引入压缩css文件用到的插件

module.exports = { 
    mode: 'development',   //设置为生产模式
    entry: __dirname+'/src/main.js',  //指定入口文件的入口
    output: {                         //指定入口文件的输出
        path: __dirname+'/dist',  //指定输出的目录
        filename: 'bundle.js',    //指定输出的文件名
    },
    module:{   //配置loader
        rules:[
            //设置打包CSS文件
            /* {  //整合进入口js文件
                test:/\.css$/,   //设置打包的文件类型为css 
                use:['style-loader','css-loader']      //使用到的模块 
            }, */
            {     //打包成单独的css文件
                test:/\.css$/,   //设置打包的文件类型为css 
                use:[   //使用到的模块 
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    //下面是配置兼容性
                    /* {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:['postcss-preset-env']
                            }
                        }
                    } */                                             
                ]     
            },
            //设置打包图片文件
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)$/,  //设置打包的文件类型，多种类型用括号括起，竖线隔开。 */
                type:'asset',      //使用到的模块 
                parser:{
                    dataUrlCondition:{ maxSize: 10 *1024 }  //指定图片转base64条件 
                },
                generator:{
                    filename:'image/[name][ext]'      //指定文件打包路径
                }
            },
            //设置打包字体icon文件
            {
                test:/\.(ttf|eot|svg|woff2)$/,    //设置打包的文件类型
                type:'asset',      //使用到的模块 
                generator:{
                    filename:'icon/[name][ext]'      //指定文件打包路径
                }
            }
        ]
    },
    plugins:[  //配置插件
        new HtmlWebpackPlugin({   //打包html文件
            template:__dirname+'/src/index.html', //要打包的html文件的路径
            minify:{   //对html文件进行压缩处理
                collapseWhitespace:true,   //移除空格
                removeComments:true   //移除注释
            }
        }),
        new MiniCssExtractPlugin({   //单独打包css文件
            filename:'css/main.css'   //设置打包好的css文件存放的目录和文件名
        }),
        new CssMinimizerWebpackPlugin()  //压缩css文件
    ],
    devServer:{   //配置实时打包的信息
        static:__dirname+'/dist', 
        compress:true,
        port:3000,
        open:true
    }   
};



    