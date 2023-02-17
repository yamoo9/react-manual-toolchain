const babelConfig = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ]
}

module.exports = babelConfig;