const path = require('path')

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          theme: path.resolve(
            __dirname,
            './node_modules/@balance-pl/lego/themes/default'
          ),
        },
      },
    },
  },
}
