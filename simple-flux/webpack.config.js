module.exports = {
    entry:  __dirname + "/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool:"source-map",
    module: {
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}