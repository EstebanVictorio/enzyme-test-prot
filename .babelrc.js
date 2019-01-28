const path = require('path');
const alias = require('./alias');
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [
        path.resolve('./component')
      ],
      alias
    }
  ]
];

module.exports = {
  presets: ["next/babel"],
  plugins
};
