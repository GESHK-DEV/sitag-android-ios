// babel.config.js
module.exports = function (api) {
  api.cache(true); // Habilita el caching para mejor rendimiento
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ], // Usa babel-preset-expo
    plugins: [
      "expo-router/babel",
      "react-native-reanimated/plugin", // Plugin de expo-router
      // Plugin de Nativewind (si lo estás usando)
    ],
  };
};
