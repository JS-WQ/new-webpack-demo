var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        loaders:[
            {
                test: /\.scss$/,
                loaders:[
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    'sass-loader'
                ] 
            },
            {
                test: /\.less$/,
                loaders:[
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    'less-loader'
                ] 
            },
        ]
    }
};