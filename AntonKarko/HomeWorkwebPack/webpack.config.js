const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const dotenv = require('dotenv');
const webpack = require('webpack');

function optimization() {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if(process.env.NODE_ENV !== 'development') {
        config.minimizer = [
            new OptimizeCssWebpackPlugin(),
            new TerserWebpackPlugin()
        ];
    }
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.jpg', '.png'],
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 8307,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: process.env.NODE_ENV !== 'development',
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssWebpackPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssWebpackPlugin.loader,
                    options: {
                        publicPath: '',
                    }
                }, 
                'css-loader',
            ],
            },
            {
                test: /\.s[as]ss$/,
                use: [{
                    loader: MiniCssWebpackPlugin.loader,
                    options: {
                        publicPath: '',
                    }
                }, 
                'css-loader',
                'sass-loader',
            ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader'],
            },
        ],
    },
};