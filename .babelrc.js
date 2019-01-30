const path = require('path');
const alias = require('./alias');
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [
        path.resolve('./component'),
        path.resolve('./theme'),
      ],
      alias
    }
  ],
  [
    require.resolve('babel-plugin-styled-components'),
    {
      ssr: true,
      displayName: true,
      preProcess: false
    }
  ]
];

module.exports = {
  presets: ["next/babel"],
  plugins
};
