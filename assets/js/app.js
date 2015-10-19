// var $ = require('jquery');
var Vue = require('vue');
var remodal = require('remodal');
var pageData = require('./pageData.js');

new Vue({
  el: '#app',

  data: {
    leftpage: 2,
    rightpage: 3,
    pages: pageData(),
    selectedPageObject: {}
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
          // Check to see if there is media on the page
          if (!this.pages[i].video && !this.pages[i].audio && !this.pages[i].ex) {
            this.pages[i].hasMedia = false;
          } else {
            this.pages[i].hasMedia = true;
          }
          // Return page object with added info ^
          return this.pages[i];
        }
      }
    },

    rightPageObject: function() {
      for (var i = 0; i < this.pages.length; i++) {
        if (this.pages[i].no == this.rightpage) {
          // Check to see if there is media on the page
          if (!this.pages[i].video && !this.pages[i].audio && !this.pages[i].ex) {
            this.pages[i].hasMedia = false;
          } else {
            this.pages[i].hasMedia = true;
          }
          // Return page object with added info ^
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
    },
    showLeftModal: function() {
      this.selectedPageObject = this.leftPageObject
    },
    showRightModal: function() {
      this.selectedPageObject = this.rightPageObject
    }
  }
});