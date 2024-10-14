import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { VueLoaderPlugin } from "vue-loader"

const ENTRY_PATH = path.resolve(__dirname, "src/index")
const DIST_PATH = path.resolve(__dirname, "dist")

module.exports = {
    entry: {
        main: ENTRY_PATH,
    },
    output: {
        path: DIST_PATH,
        filename: "areal_script.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    resolve: {
        alias: {
          vue: "vue/dist/vue.esm-bundler.js"
        },
        extensions: ['.tsx', '.ts', '.js', '.vue'],
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
        }),
        new VueLoaderPlugin(),
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
        compress: true,
    },
    target: "web"
}