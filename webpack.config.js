const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    js: './src/app.js', // Punto de entrada para tu JavaScript
    css: './src/sass/main.scss' // Punto de entrada para tu SCSS
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js', // Generará main.js y css.js (este último no lo usaremos directamente)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS a un archivo separado
          'css-loader', // Interpreta @import y url() como import/require()
          'sass-loader' // Compila Sass a CSS
        ],
      },
      // Aquí puedes añadir reglas para otros tipos de archivos (JS, imágenes, etc.)
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme.css', // El nombre del archivo CSS generado en la carpeta 'public'
    }),
  ],
  mode: 'development', // Puedes cambiar a 'production' para optimizaciones
};