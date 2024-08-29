const path = require('path');

module.exports = {
  entry: './src/js/main.js', // Caminho para o arquivo principal JS
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica esta regra a arquivos .js
        exclude: /node_modules/, // Ignora a pasta node_modules
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar o código
        },
      },
    ],
  },
  mode: 'development', // Pode ser 'development' ou 'production'
};
