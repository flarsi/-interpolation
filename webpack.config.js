const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ]
};