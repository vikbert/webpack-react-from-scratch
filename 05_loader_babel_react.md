# 05: Loader babel react

## install `babel` packages

```bash
 npm install @babel/core -D
 npm install @babel/preset-env -D
 npm install @babel/preset-react -D
 npm install babel-loader -D
```

- `@babel/preset-env` compiling ES6 down to ES5
- `@babel/preset-react` compiling react down to JS
- `babel-loader` babel loader for webpack

## config webpack rule to use `babel-loader`

```js
rules: [
    {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
}
],
```

## add new file `.babelrc` to config `babel`

.babelrc

```js
 {
    "presets": [
        [
            "@babel/preset-env",
            {
                "loose": true,
                "targets": {
                    "esmodules": true
                }
            }
        ],
        "@babel/preset-react"
    ],
    "plugins": [
        "react-hot-loader/babel",
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ]
}

```

## Install `react`, `react-dom`

```bash
 npm install react react-dom -S
```

package.json

```js
    "devDependencies": {
+    "@babel/core": "^7.8.3",
+    "@babel/preset-env": "^7.8.3",
+    "@babel/preset-react": "^7.8.3",
+    "babel-loader": "^8.0.6",
     ...
+  },
+  "dependencies": {
+    "react": "^16.12.0",
+    "react-dom": "^16.12.0"
+   }
```

## Add `Header` react component to `index.js`

```js
import React from "react";

export default function Header() {
  return <h1 class="red">React Title Header</h1>;
}
```

index

```js
import Header from "./Header";
```
