const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  components: './components/**/*.vue',
  require: ['./assets/scss/index.scss'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'style-resources-loader',
              options: {
                patterns: ['./assets/scss/variables/**/*.scss']
              }
            }
          ]
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  usageMode: 'expand',
  styleguideDir: 'docs'
}
