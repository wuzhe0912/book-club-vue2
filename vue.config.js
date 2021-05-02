module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Book Club - Vue 2.x';
      return args;
    });
  },
};
