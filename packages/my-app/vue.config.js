module.exports = {
  chainWebpack(config) {
    config.module.rule("eslint").exclude.add(/components-9421/);
  }
};
