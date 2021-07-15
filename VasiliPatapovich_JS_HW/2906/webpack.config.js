const path = require ('path');
const HTMLWpPg = require ('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        about: './src/aboutme.js',
        calendar: './src/calendar.js',
        todo: './src/todo.js'
        
      },

output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWpPg({
      template: './src/index.html',
      minify: {
        collapseWhitespace: process.env.NODE_ENV !== 'development',
      },
    }),],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.jpg', '.png'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};