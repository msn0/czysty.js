const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

module.exports = {
    input: 'index.js',
    treeshake: true,
    output: {
        file: 'index.bundle.js',
        format: 'iife',
        strict: false,
        name: 'Czysty'
    },
    plugins: [
        babel(),
        resolve(),
        uglify()
    ]
};