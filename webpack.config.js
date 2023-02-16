const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            assets: path.resolve(__dirname, 'src', 'assets'),
            components: path.resolve(__dirname, 'src', 'components'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            context: path.resolve(__dirname, 'src', 'context'),
            lib: path.resolve(__dirname, 'src', 'lib'),
            layout: path.resolve(__dirname, 'src', 'layout'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
        ],
    },
    devServer: {
        client: {
            overlay: true,
        },
        historyApiFallback: true,
        hot: true,
        port: 3000,
        open: true,
    },
}
