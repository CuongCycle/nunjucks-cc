const config = {
  path: {
    app: './app',
  },
};

config.path.build = `${config.path.app}/build`;
config.path.src = `${config.path.app}/src`;
config.path.data = `${config.path.app}/data`;
config.path.assets = `${config.path.src}/assets`;
config.path.templates = `${config.path.src}/templates`;

module.exports = config;
