(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var results = ['大吉','中吉','凶','末吉'];
    var n = Math.floor(Math.random() * results.length);
    this.textContent = results[n];
    var greet = document.createElement('p'),
        text = document.createTextNode(++cnt + '回目の結果は　' + results[n] + ' です。');
    document.body.appendChild(greet).appendChild(text);
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });

  btn.addEventListener('mouseup', function() {
    this.className = '';
  });

})();

var cnt = 0;
