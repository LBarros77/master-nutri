import { getDefaultConfig } from '@react-native/metro-config';

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: ['js', 'ts', 'tsx', 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
