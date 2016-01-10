// var $ = require('jquery');
var Vue = require('vue');
var remodal = require('remodal');
var Howl = require('howler');
var dragula = require('dragula');
var siteData = require('./siteData.js');
var pageData = require('./pageData.js');

Vue.config.debug = true;

function blurAll(){
 var tmp = document.createElement("input");
 document.body.appendChild(tmp);
 tmp.focus();
 document.body.removeChild(tmp);
}

new Vue({
  el: '#app',

  data: {
    jumpPage: '',
    leftpage: -2,
    rightpage: -1,
    staticpage: false,
    currentModalContent: '',
    pages: pageData(),
    site: siteData(),
    selectedPageObject: {},
    selected: '',
    sandboxContent: '',
    dropzoneContent: ''
  },

  computed: {
    canGoBack: function() {
      if (this.leftpage.length != 0) {
        if (this.leftpage - 2 > -3) {
          return true
        } else {
          return false
        }
      }
    },

    canGoForward: function() {
      if (this.rightpage.length != 0) {
        if (this.rightpage + 2 < 90) {
          return true
        } else {
          return false
        }
      }
    },

    leftPageObject: function() {
      for (var i = 0; i < this.pages.length; i++) {
        if (this.pages[i].no == this.leftpage) {
          // Check to see if there is media on the page
          if (!this.pages[i].video && !this.pages[i].static && !this.pages[i].ex && !this.pages[i].ex2) {
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
          if (!this.pages[i].video && !this.pages[i].static && !this.pages[i].ex && !this.pages[i].ex2) {
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
      blurAll();
    },
    nextPages: function() {
      this.leftpage = this.leftpage + 2;
      this.rightpage = this.rightpage + 2;
      blurAll();
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
        this.staticpage = false;
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
        } else if (this.selectedPageObject.ex) {
          this.currentModalContent = 'ex';
        } else {
          this.currentModalContent = 'ex2';
        }
      }
    },
    resetForm: function() {
      for (var i = 0; i < this.selectedPageObject.ex.data.length; i++) {
        this.selectedPageObject.ex.data[i].model = ''
      }
      for (var i = 0; i < this.selectedPageObject.ex2.data.length; i++) {
        this.selectedPageObject.ex2.data[i].model = ''
      }
    },
    solveForm: function() {
      if (this.selectedPageObject.ex.name != 'mediumselect') {
        for (var i = 0; i < this.selectedPageObject.ex.data.length; i++) {
          this.selectedPageObject.ex.data[i].model = this.selectedPageObject.ex.data[i].solution;
        }
      }
      if (this.selectedPageObject.ex2.name != 'mediumselect') {
        for (var i = 0; i < this.selectedPageObject.ex2.data.length; i++) {
          this.selectedPageObject.ex2.data[i].model = this.selectedPageObject.ex2.data[i].solution;
        }
      }
    },
    solveCheck: function() {
      if (this.selectedPageObject.ex.name == 'mediumselect') {
        for (var i = 0; i < this.selectedPageObject.ex.data.length; i++) {
          this.selectedPageObject.ex.data[i].model = 'true';
        }
      }
      if (this.selectedPageObject.ex2.name == 'mediumselect') {
        for (var i = 0; i < this.selectedPageObject.ex2.data.length; i++) {
          this.selectedPageObject.ex2.data[i].model = 'true';
        }
      }
    },
    interactNow: function() {
      this.sandboxContent = this.$$.sandbox.innerHTML;
      this.dropzoneContent = this.$$.dropzone.innerHTML;
      this.$$.startButton.setAttribute('disabled', 'disabled');

      for (var i = 0; i < this.selectedPageObject.ex.data.length; i++) {
        dragula([document.querySelector('.launch--' + this.selectedPageObject.ex.data[i].rowID), document.querySelector('.target--' + this.selectedPageObject.ex.data[i].rowID)]);
      }
    },
    resetDnd: function() {
      if (this.sandboxContent) {
        this.$$.sandbox.innerHTML = this.sandboxContent;
      }
      if (this.dropzoneContent) {
        this.$$.dropzone.innerHTML = this.dropzoneContent;
      }

      this.$$.startButton.removeAttribute('disabled');
    },
    goStatic: function(page) {
      this.leftpage = '';
      this.rightpage = '';
      this.staticpage = page;
    },
    goToPage: function(page) {
      this.staticpage = false;

      if (page % 2 == 0) {
        this.leftpage = parseInt(page);
        this.rightpage = parseInt(page) + 1;
      } else {
        this.leftpage = parseInt(page) - 1;
        this.rightpage = parseInt(page);
      }
    }
  }
});
