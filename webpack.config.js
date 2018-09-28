const path = require('path');
const webpack= require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: ['babel-polyfill','./src/index.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins:[
           new MiniCssExtractPlugin({
                filename: 'styles.css'
           })
        ],
        devtool: isProduction? 'source-map': 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback:true,
            publicPath: '/dist/'
        }
    };    
};
