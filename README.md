# Weex Component Alias

A group of alias components for weex. (Vue version)

> The [source code](./index.js) is much lucid than README.

## Usage

```js
import Vue from 'vue'
import alias from 'weex-component-alias'

Vue.use(alias)
```

Use it in browser:

```html
<!-- Components will be auto registered if the window.Vue exist -->
<script src="./node_modules/weex-component-alias/index.js"></script>
```

## Alias

The default styles of HTML5 tag: https://www.w3.org/TR/html5/rendering.html

Format:

+ *origial*: the tag name that Weex actually support.
  + *alias*: alias tag name.

Alias component list:

+ `<div>`
  + `<article>`
  + `<section>`
  + `<nav>`
  + `<aside>`
  + `<main>`
  + `<header>`
  + `<footer>`
  + `<address>`
  + `<p>` (with default styles)
  + `<figure>` (with default styles)
+ `<text>`
  + `<h1>` (with default styles)
  + `<h2>` (with default styles)
  + `<h3>` (with default styles)
  + `<h4>` (with default styles)
  + `<h5>` (with default styles)
  + `<h6>` (with default styles)
  + `<figcaption>`
+ `<image>`
  + `<img>`
  + `<picture>`
+ `<web>`
  + `<iframe>`
