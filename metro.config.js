const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

const storybookEnabled = process.env.STORYBOOK_ENABLED !== 'false';

if (storybookEnabled) {
  const {
    withStorybook,
  } = require('@storybook/react-native/metro/withStorybook');
  module.exports = withStorybook(config, {
    configPath: path.resolve(__dirname, '.rnstorybook'),
  });
} else {
  module.exports = config;
}
