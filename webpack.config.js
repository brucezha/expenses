const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        mode:'development',
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test:/\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        devtool: env ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 8080,
            historyApiFallback: true,
            publicPath: '/dist/'
        } 
    };
};

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test:/\.s?css$/,
//             use: [
//                 'style-loader', //handles the inline of the style so we dont need it if we extract the css
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         compress: true,
//         port: 8080,
//         historyApiFallback: true
//     },
//     mode: 'none'
// };