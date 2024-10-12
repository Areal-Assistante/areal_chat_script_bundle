const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

ENTRY_PATH = path.resolve(__dirname, "src/index")
DIST_PATH = path.resolve(__dirname, "dist")

module.exports = {
    entry: {
        main: ENTRY_PATH,
    },
    output: {
        path: DIST_PATH,
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"] },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        watchFiles: ['src/**/*'],
        static: DIST_PATH,
        hot: true,
    },
    target: "web"
}