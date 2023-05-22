const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.post('*', (req, res) => {
        res.redirect(req.originalUrl);
      });
    },
    https: true,
  }
})

// module.exports = {
//   devServer: {
//     onAfterSetupMiddleware: function (devServer) {
//       devServer.app.post('*', (req, res) => {
//         res.redirect(req.originalUrl);
//       });
//     },
//     https: true,
//     port: 8085,
//   },
  
// }