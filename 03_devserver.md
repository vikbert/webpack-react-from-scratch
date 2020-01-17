# 03: devserver

## install packages

```bash
 npm install webpack-dev-server -D
```

```bash
    "devDependencies": {
     "webpack": "^4.41.5",
-    "webpack-cli": "^3.3.10"
+    "webpack-cli": "^3.3.10",
+    "webpack-dev-server": "^3.10.1"
   }
```

## add new directory and index file

```bash
mkdir public
cp dist/index.html public/
```

## config devserver

add the new content in `webpack.config.js`

```js
 devServer: {
    contentBase: path.join(__dirname, "./public"),
    watchContentBase: true,
    hot: true,
    host: "0.0.0.0",
    compress: true,
    port: 3001
  }
```

update the script in `package.json`

```bash
 "start": "./node_modules/.bin/webpack-dev-server --config ./webpack.config.js --mode development",
```

```bash
    "scripts": {
-    "dev": "webpack --mode development",
+    "start": "./node_modules/.bin/webpack-dev-server --config ./webpack.config.js --mode development",
   },
```

## start devserver

```bash
 npm run start
```

## use index template

install package `html-webpack-plugin`

```bash
 npm install html-webpack-plugin -D
 rm -rf dist/index.html
 rm -rf public/
```

add new config `webpack.config.js`

```bash
+ const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
+  plugins: [
+    new HtmlWebpackPlugin({
+      filename: "index.html",
+      template: "src/index.html"
+    })
+  ],

```

remove this line:

```bash
 devServer: {
-    contentBase: path.join(__dirname, "./public"),
```

> this will allow webpack to create the auto-generated `index.html` in `dist/`, if `npm run build` applied.
