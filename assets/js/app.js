// var $ = require('jquery');
var Vue = require('vue');
var remodal = require('remodal');
var siteData = require('./siteData.js');
var pageData = require('./pageData.js');

Vue.config.debug = true;

new Vue({
  el: '#app',

  data: {
    jumpPage: '',
    leftpage: 2,
    rightpage: 3,
    currentModalContent: '',
    pages: pageData(),
    site: siteData(),
    selectedPageObject: {},
    selected: ''
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
      if (this.rightpage + 2 < 85) {
        return true
      } else {
        return false
      }
    },

    leftPageObject: function() {
      for (var i = 0; i < this.pages.length; i++) {
        if (this.pages[i].no == this.leftpage) {
          // Check to see if there is media on the page
          if (!this.pages[i].video && !this.pages[i].static && !this.pages[i].ex) {
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
          if (!this.pages[i].video && !this.pages[i].static && !this.pages[i].ex) {
            this.pages[i].hasMedia = false;
          } else {
            this.pages[i].hasMedia = true;
          }
          // Return page object with added info ^
          return this.pages[i];
        }
      }
    },

    typerTrue: function(a, b) {
      var parsedA = a.replace(/\s+/g, '').toLowerCase();

      if (parsedA.length == b.length && parsedA == b) {
        return true;
      }
    },

    typerFalse: function(a, b) {
      var parsedA = a.replace(/\s+/g, '').toLowerCase();

      if (parsedA.length == b.length && parsedA != b) {
        return true;
      }
    }
  },

  methods: {
    prevPages: function() {
      this.leftpage = this.leftpage - 2;
      this.rightpage = this.rightpage - 2;
    },
    nextPages: function() {
      this.leftpage = this.leftpage + 2;
      this.rightpage = this.rightpage + 2;
    },
    showLeftModal: function() {
      this.selectedPageObject = this.leftPageObject;
      this.selectModalContent();
    },
    showRightModal: function() {
      this.selectedPageObject = this.rightPageObject;
      this.selectModalContent();
    },
    jumpToPage: function(event) {
      event.preventDefault();
      if (! this.jumpPage) {
        return false;
      } else {
        if (this.jumpPage > 1 && this.jumpPage < 87) {
          if (this.jumpPage % 2 == 0) {
            this.leftpage = parseInt(this.jumpPage);
            this.rightpage = parseInt(this.jumpPage) + 1;
          } else {
            this.leftpage = parseInt(this.jumpPage) - 1;
            this.rightpage = parseInt(this.jumpPage);
          }
        } else {
          return false;
        }
      }
    },
    selectModalContent: function() {
      if (this.selectedPageObject.hasMedia) {
        if (this.selectedPageObject.video) {
          this.currentModalContent = 'video';
        } else if (this.selectedPageObject.static) {
          this.currentModalContent = 'static';
          this.selected = this.selectedPageObject.static[0];
        } else {
          this.currentModalContent = 'ex';
        }
      }
    },
    resetForm: function() {
      for (var i = 0; i < this.selectedPageObject.ex.data.length; i++) {
        this.selectedPageObject.ex.data[i].model = ''
      }
    }
  }
});
