# 06: Eslint & Prettier

## install package `loader-eslint`

```bash
npm install eslint eslint-loader babel-eslint -D
npx install-peerdeps --dev eslint-config-airbnb
```

> `eslint-config-airbnb` install pre-configured ESLint configurations

```js
// package.json

+    "babel-eslint": "^10.0.3",
+    "eslint": "^6.8.0",
+    "eslint-config-airbnb": "^18.0.1",
+    "eslint-loader": "^3.0.3",
+    "eslint-plugin-import": "^2.20.0",
+    "eslint-plugin-jsx-a11y": "^6.2.3",
+    "eslint-plugin-react": "^7.18.0",
+    "eslint-plugin-react-hooks": "^1.7.0",
```

## config `eslint` in package.json

```js
 "eslintConfig": {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "prettier"
    ],
    "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": [
        "error"
      ],
      "react/jsx-filename-extension": [
        0
      ]
    }
  }
```

## install tow more packages to combine `eslint` & `prettier` together

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

```js
// package.json

+    "prettier": "^1.19.1",
+    "eslint-config-prettier": "^6.9.0",
+    "eslint-plugin-prettier": "^3.1.2"
```

## config `prettier` in package.json

```js
 "prettier": {
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 70
  },
```
