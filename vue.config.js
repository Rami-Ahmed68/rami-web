const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("model")
      .test(/\.(glb|gltf|dae|obj|mtl|fbx)$/) // إضافة أنواع الملفات
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[ext]",
        outputPath: "models", // أو مسار آخر
      });
  },
});

// module.exports = {
//   // ...
//   chainWebpack: config => {
//     config.module
//       .rule('glb') // أو اسم القاعدة التي تختارها
//       .test(/\.glb$/)
//       .use('file-loader')
//       .loader('file-loader')
//       .options({
//         name: '[path][name].[ext]' // أو مسار مخصص، مثل 'models/[name].[ext]'
//       });
//   }
// };
