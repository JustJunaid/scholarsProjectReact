/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.optimization = {
    minimize: false
  };
  return config;
};
