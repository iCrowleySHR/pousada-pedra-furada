module.exports = {
  presets: [
    [
      "@babel/preset-react",
      { runtime: "automatic" } // permite JSX sem precisar importar React manualmente
    ],
    "@babel/preset-env" // para suportar ES6+
  ]
};
