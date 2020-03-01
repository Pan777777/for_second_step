//basic vars 
const path = require('path')
const webpack = require('webpack')

//additional plugins 
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//module settings 
module.exports = {
    //базовый путь к проекту
    context: path.resolve(__dirname, 'src'),

    //точки входа Js 
    entry: {
        //Основной файл приложения
        app: [
            './js/app.js',
            '.scss/style.scss'
        ],
    },
//Путь для собранных файлов
output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../'
    },
//devServer configuration
devServer: {
    contentBase: './app'
},

module: {
    rules: [
        //scss
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                    use: [
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ],
                    fallback: 'style-loader',
                })
        }
    ]
},

plugins: [
    new ExtractTextPlugin(
        './css/[name].css'
    ),
],

}