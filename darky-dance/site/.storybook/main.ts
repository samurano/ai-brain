import path from 'node:path';
import { fileURLToPath } from 'node:url';
const storybookDir = path.dirname(fileURLToPath(import.meta.url));

const config = {
  framework: {
    name: '@storybook-astro/framework',
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  async viteFinal(baseConfig) {
    baseConfig.resolve = baseConfig.resolve || {};
    baseConfig.resolve.alias = {
      ...(baseConfig.resolve.alias || {}),
      '@': path.resolve(storybookDir, '../src'),
    };

    return baseConfig;
  },
} as const;

export default config;
