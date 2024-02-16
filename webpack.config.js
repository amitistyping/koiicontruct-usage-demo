const path = require('path');
// Assuming you've installed webpack-merge to combine configurations
const { merge } = require('webpack-merge');
const webpackConfig = require('koii-task-creator/webpack.config.js');

const customConfig = {
  entry: './index.js', // Ensure this or another file imports and uses your customized KoiiConstruct
  output: {
    path: path.resolve(__dirname, 'node_modules/koii-task-creator/dist'),
    filename: 'main.js',
  },
  // Other configurations specific to your project
};

module.exports = merge(webpackConfig, customConfig);
