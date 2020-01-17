# Webpack + react from scratch

## 01: Init package.json

`npm init -y`

## 02: Init webpack & Webpack-cli

- [x] create new branch named `feature/02_webpack_init`
- [ ] install packages `webpack` & `webpack-cli`
- [ ] create directories and init files `dist/`, `src/index.js`
- [ ] create init config file `webpack.config.js`

## 03: Config devserver & use HTML template

- [x] create new branch named `feature/03_devserver`
- [ ] install packages `ebpack-dev-server`
- [ ] create directories and init files `public/index.html`
- [ ] config `devserver` in `webpack.config.js`
- [ ] use template html with `html-webpack-plugin`

## 04: Load `css` and `scss`

- [x] create new branch named `feature/04_css_scss`
- [ ] install packages `css-loader`, `style-loader`
- [ ] install package `sass-loader`, `node-sass`
- [ ] config webpack to load `css`, `sass`

## 05: Load `react` with `babel-loader`

- [x] create new branch named `feature/05_react`
- [ ] install babel packages

  - [ ] `@babel/core`
  - [ ] `@babel/preset-env` compiling ES6 down to ES5
  - [ ] `babel-loader` loader for webpack

- install `@babel/preset-react` for compiling JSX and other down to JavaScript
- config webpack to make all work together
