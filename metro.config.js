const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

module.exports = (async () => {
  const { withStorybook } = await import(
    '@storybook/react-native/metro/withStorybook'
  );
  return withStorybook(config, {
    configPath: path.resolve(__dirname, '.rnstorybook'),
  });
})();
