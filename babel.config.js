module.exports = { 
  presets: [ 
    [ 
      "@babel/preset-react", // Faz o Jest entender JSX
      { runtime: "automatic" } //  Ativa o JSX transform moderno 
    ], 
    "next/babel"  // Faz o Jest entender Next.js e ES Modules.
  ] 
}; 