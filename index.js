;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD. Register as an anonymous module.
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else {
    factory((root.commonJsStrict = {})); // Browser globals
  }
}(this, function (exports) {

  function unit (unit, scale) {
    if (typeof WXEnvironment === 'object' && WXEnvironment.platform === 'Web') {
      return function (number) {
        // return number * scale + 'px'
        return number + unit
      }
    }
    return function (number) {
      return number * scale
    }
  }

  function alias (tagName, leaf) {
    return function (styles) {
      return {
        render: function (h) {
          return h(tagName, { staticStyle: styles }, leaf ? null : this.$slots.default)
        }
      }
    }
  }

  var px = unit('px', 1)
  var em = unit('em', 32) // The base font-size is 32px
  var div = alias('div')
  var text = alias('text')
  var web = alias('web')
  var image = alias('image', true)

  function install (Vue) {
    Vue.component('section', div())
    Vue.component('nav', div())
    Vue.component('article', div())
    Vue.component('aside', div())
    Vue.component('header', div())
    Vue.component('footer', div())
    Vue.component('main', div())
    Vue.component('address', div())

    // https://www.w3.org/TR/html5/rendering.html (10.3.3 Flow content)
    Vue.component('p', div({
      marginTop: em(1),
      marginBottom: em(1)
    }))
    Vue.component('figure', div({
      marginLeft: px(40),
      marginRight: px(40),
      marginTop: em(1),
      marginBottom: em(1)
    }))

    // https://www.w3.org/TR/html5/rendering.html (10.3.7 Sections and headings)
    Vue.component('h1', text({
      fontSize: em(2),
      marginTop: em(0.67),
      marginBottom: em(0.67),
      fontWeight: 'bold' // or 700
    }))
    Vue.component('h2', text({
      fontSize: em(1.5),
      marginTop: em(0.83),
      marginBottom: em(0.83),
      fontWeight: 'bold'
    }))
    Vue.component('h3', text({
      fontSize: em(1.17),
      marginTop: em(1),
      marginBottom: em(1),
      fontWeight: 'bold'
    }))
    Vue.component('h4', text({
      fontSize: em(1),
      marginTop: em(1.33),
      marginBottom: em(1.33),
      fontWeight: 'bold'
    }))
    Vue.component('h5', text({
      fontSize: em(0.83),
      marginTop: em(1.67),
      marginBottom: em(1.67),
      fontWeight: 'bold'
    }))
    Vue.component('h6', text({
      fontSize: em(0.67),
      marginTop: em(2.33),
      marginBottom: em(2.33),
      fontWeight: 'bold'
    }))

    Vue.component('figcaption', text())
    Vue.component('img', image())
    Vue.component('picture', image())
    Vue.component('iframe', web())
  }

  // auto install in browser
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }

  exports.install = install
}));
