// export 
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './js/main.js',
    output: {
        // path: path.resolve(__dirname, 'dist'), //__dirname 현재 경로에서 dist 폴더를 만들고 
        // filename:'main.js', //main.js 라는 파일을 만들어 저장
        clean: true
    },

    module:{
        rules:[
            {
                test: /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:  /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다향한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })
    ],
    devServer: {
        host: 'localhost'
    }
}