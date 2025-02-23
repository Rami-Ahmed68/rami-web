const path = require("path");

module.exports = {
  entry: "./src/main.js", // نقطة دخول التطبيق
  output: {
    path: path.resolve(__dirname, "dist"), // مسار المجلد الذي سيتم فيه إنشاء الملفات المجمعة
    filename: "bundle.js", // اسم الملف المجمع
  },
  module: {
    rules: [
      // قواعد أخرى للتعامل مع الملفات الأخرى (مثل JavaScript و CSS)
      {
        test: /\.dae$/, // مطابقة لملفات .dae
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // الحفاظ على مسار واسم الملف الأصلي
              // publicPath: 'assets/'  // مسار اختياري إذا كنت تريد وضع الملفات في مجلد assets في public
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"], // تحديد امتدادات الملفات التي سيتم البحث عنها
    alias: {
      "@": path.resolve(__dirname, "src"), // إنشاء alias لسهولة الوصول إلى مجلد src
    },
  },
  // ... إعدادات أخرى لـ Webpack ...
};
