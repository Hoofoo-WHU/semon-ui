<div align="center" style="text-align: center">
<img width="80" align="center" src="https://image-1256107964.cos.ap-beijing.myqcloud.com/blog/2019-02-22-logo.jpg">
</div>
<h1 align="center" style="text-align: center">Semon UI</h1>
<div align="center" style="text-align: center">

[![Build Status](https://travis-ci.org/Hoofoo-WHU/semon-ui.svg?branch=master)](https://travis-ci.org/Hoofoo-WHU/semon-ui)
[![Codecov](https://img.shields.io/codecov/c/github/hoofoo-WHU/semon-ui.svg)](https://codecov.io/gh/Hoofoo-WHU/semon-ui)
[![License](https://img.shields.io/github/license/hoofoo-WHU/semon-ui.svg?style=flat)](LICENSE)
[![install size](https://packagephobia.now.sh/badge?p=@semon/semon-ui)](https://packagephobia.now.sh/result?p=@semon/semon-ui)
[![gzip:js](http://img.badgesize.io/https://unpkg.com/@semon/semon-ui/dist/index.js?compression=gzip&label=gzip:%20js)](https://www.npmjs.com/package/@semon/semon-ui)
[![gzip:css](http://img.badgesize.io/https://unpkg.com/@semon/semon-ui/dist/index.css?compression=gzip&label=gzip:%20css)](https://www.npmjs.com/package/@semon/semon-ui)
[![downloads](https://img.shields.io/npm/v/@semon/semon-ui.svg)](https://www.npmjs.com/package/@semon/semon-ui)
[![version](https://img.shields.io/npm/dt/@semon/semon-ui.svg)](https://www.npmjs.com/package/@semon/semon-ui)

</div>

## ✨ 介绍
一套简单的React组件库，目的是练手，不要在项目中使用

## 📦 安装
```shell
npm install @semon/semon-ui --save
```
```shell
yarn add @semon/semon-ui
```

## 🚀 开始使用
```jsx
import { Button } from '@semon/semon-ui'
ReactDOM.render(<Button />, container)
```
引入css样式：
```js
import '@semon/semon-ui/dist/index.css'
```
按需引入：
```jsx
import Button from '@semon/semon-ui/dist/Button'
import '@semon/semon-ui/dist/Button.css'
```
<!-- 使用babel-plugin-import
```js
[
  "import", 
  { 
    "libraryName": "@semon/semon-ui", 
    "libraryDirectory": "dist",
    "style": (name) => `@semon/semon-ui/dist/${name}.css`
  }
]

``` -->
## 🔗 链接
- [更新日志](CHANGELOG.md)