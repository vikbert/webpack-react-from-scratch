# Webpack + react from scratch

## 01: Init package.json

```bash
 npm init -y
```

## 02: Init webpack & Webpack-cli

install packages

```bash
npm install webpack webpack-cli -D
```

add config file `webpack.config.js`

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

create directories and files

```bash
mkdir dist src
touch src/index.js
touch dist/index.html
```

add content to `src/index.js`

```js
console.log("index.js called");
```

add content to `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>webpack scratch</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="main.js"></script>
  </body>
</html>
```

## Serve static html

### devserver

### entry

```bash
 npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin html-loader
 touch webpack.config.js
 touch index.html

```

### css-loader

```bash
 npm install css-loader -D
```

### babel-loader

```bash
 npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react

 -- optional
 npm install --save-dev @babel/plugin-proposal-object-rest-spread
 npm install --save-dev @babel/plugin-syntax-dynamic-import
 npm install --save-dev @babel/plugin-transform-runtime @babel/runtime
```
