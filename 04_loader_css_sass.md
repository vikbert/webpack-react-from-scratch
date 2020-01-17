# 04: Loader css and sass

## install packages `css-loader`, `style-loader`

```bash
 npm install css-loader style-loader -D
```

## install package `sass-loader`, `node-sass`

```bash
 npm install sass-loader node-sass -D
```

4x new packages should be installed:

```js
    "devDependencies": {
+    "css-loader": "^3.4.2",
     "html-webpack-plugin": "^3.2.0",
+    "node-sass": "^4.13.1",
+    "sass-loader": "^8.0.2",
+    "style-loader": "^1.1.2",
```

## config webpack to load `css`, `sass`

```js
rules: [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  },
  {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"]
  }
];
```

## import `red.css` and `blue.scss` in `index.js`

index.js

```js
import hello from "./hello";
+import "./red.css";
+import "./blue.scss";
```

red.css

```js
.red {
  color: orange;
}
```

blue.scss

```js
 .blue {
  color: blue;
}
```

## update `index.html`

```bash
-    <div id="root"></div>
+    <div id="root">
+      <h1 class="red">this is red</h1>
+      <h1 class="blue">this is blue</h1>
+    </div>
```
