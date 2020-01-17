# Webpack + react from scratch

## 01: Init package.json

```bash
 npm init -y
```

## 02: Init webpack & Webpack-cli

- [x] create new branch named `feature/02_webpack_init`
- [ ] install packages
- [ ] create directories and init files
- [ ] create init config file

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
