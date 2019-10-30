module.exports = (api) => {
  api.cache(true);

  return {
    // babelrc: false,
    // babelrcRoots: ["."],
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: false }],
      // '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime',
    ],
  };
};
