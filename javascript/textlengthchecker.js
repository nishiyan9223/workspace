(function() {
  'use strict'

  var comment = document.getElementById('comment');
  var lavel = document.getElementById('lavel');

  var LIMIT = 20;
  var WARNING = 5;

  lavel.innerHTML = LIMIT;

  comment.addEventListener('keyup', function() {
    var remaining = LIMIT - this.value.length;
    lavel.innerHTML = remaining;
    // if (remaining < WARNING) {
    //   lavel.className = 'warning';
    // }else {
    //   lavel.className = '';
    // }
    lavel.className = remaining <= WARNING ? 'warning' : '';
  });

})();
