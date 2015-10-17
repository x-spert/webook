var $ = require('jquery');
var Vue = require('vue');
var pageData = require('./pageData.js');

new Vue({
  el: '#app',

  data: {
    leftpage: 2,
    rightpage: 3,
    pages: pageData()
  },
 
  computed: {
    canGoBack: function() {
      if (this.leftpage - 2 > 1) {
        return true
      } else {
        return false
      }
    },
    canGoForward: function() {
      if (this.rightpage + 2 < 57) {
        return true
      } else {
        return false
      }
    },
    leftPageObject: function() {
      for (var i = 0; i < this.pages.length; i++) {
        if (this.pages[i].no == this.leftpage) {
          return this.pages[i];
        }
      }
    },
    rightPageObject: function() {
      for (var i = 0; i < this.pages.length; i++) {
        if (this.pages[i].no == this.rightpage) {
          return this.pages[i];
        }
      }
    }
  },

  methods: {
    prevPages: function() {
      this.leftpage = this.leftpage - 2
      this.rightpage = this.rightpage - 2
    },
    nextPages: function() {
      this.leftpage = this.leftpage + 2
      this.rightpage = this.rightpage + 2
    }
  }
}); 