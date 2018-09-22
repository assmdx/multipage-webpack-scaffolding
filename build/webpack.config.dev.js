const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pageConfig = require('./page.config.js');

let webpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: {},
    plugins:[],
    devServer: {
        index:'font.html',
        contentBase: path.resolve(__dirname, '../dist/'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};

if(pageConfig && Array.isArray(pageConfig)){
    pageConfig.map(page=>{
        webpackConfig.entry[page.name] = `./src/pages/${page.jsEntry}`;
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            filename:`./${page.name}.html`,
            template:`./src/pages/${page.html}`,
            hash:true,
            chunks:[`${page.name}`]
        }))
    })
}

module.exports = webpackConfig;