const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: "./app/js/index.js",
    output: {
        path: path.resolve("./public/"),
        filename: "js/bundle.js",
        publicPath: "/"
    },
    devServer: {
        contentBase: path.resolve("./public"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "./app/index.html",
            to: "./"
        }])
    ]
};