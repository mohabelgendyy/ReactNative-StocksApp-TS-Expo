module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          "react-native-paper/babel",
          "@babel/plugin-transform-export-namespace-from",
          "react-native-reanimated/plugin",
        ],
      },
    },
  };
};
