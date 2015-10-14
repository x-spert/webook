var $ = require('jquery');
var Vue = require('vue');

$(document).ready(function() {
  // var viewportHeight = $(window).height();
  // $('.wrapper').css({'height': viewportHeight});
});

new Vue({
  el: '#app',

  data: {
    leftpage: 2,
    rightpage: 3
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