const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = "development";
const enabledSourceMap = MODE === "development";


module.exports = {
    entry: `./src/js/main.js`,
    mode: MODE,
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js",
        clean: true,
    },
    devServer: {
        static: "src",
        open: true,
        devMiddleware: {
            writeToDisk: true
        },
    },

    
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MODE !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
};
