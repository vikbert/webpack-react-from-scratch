# 02: init webpack & webpack-cli

## install packages

```bash
npm install webpack webpack-cli -D
```

## create directories and files

```bash
mkdir dist src
touch src/index.js
touch src/hello.js
touch dist/index.html
```

content of `src/hello.js`

```js
const hello = message => {
  console.log(`Hello, ${message}!`);
};

export default hello;
```

content of `src/index.js`

```js
import hello from "./hello";
console.log("index.js called");
hello("webpack");
```

content of `index.html`

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

## add config file `webpack.config.js`

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
```
