require('webpack');
var path = require('path');

module.exports = {
    entry: './src/hyperscript.js',
    output: {
        filename: 'hyperscript.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        libraryExport: 'h',
        library: 'h',
    },
};
