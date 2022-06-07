const path = require("path");
const webpack = require("webpack");

module.exports = {
    // entry point - where webpack starts building the module
    entry: './assets/js/script.js',
    // tell webpack where files will go & the names of the files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // add plugins to help webpack know of packages
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // by default webpack runs in production mode, turn off here:
    mode: 'development'
};