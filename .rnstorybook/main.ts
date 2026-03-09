import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-ondevice-controls'],
};

export default main;
