// Custom processor that allows @babel/core to be used.

const fs = require('fs')
const babelConfig = JSON.parse(fs.readFileSync(`${__dirname}/.babelrc`, 'utf8'))
const babel = require('@babel/core');

module.exports = {
  process(src, path) {
    return babel.transform(src, babelConfig).code;
  }
}