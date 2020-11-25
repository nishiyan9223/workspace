(function() {
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;
  var isReseted = false;

  start.addEventListener('click', function() {
    if (isStarted === true) {
      return;
    }
    if (isReseted === true) {
      return;
    }
    isStarted = true;
    isReseted = true;
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = '';
  });

  stop.addEventListener('click', function() {
    var elapsedTime;
    var diff;
    if (isStarted === false) {
      return;
    }
    this.className = 'pushed';
    start.className = '';
    result.className = '';
    isStarted = false;
    elapsedTime = (Date.now() - startTime) / 1000;
    result.textContent = elapsedTime.toFixed(3); //toFixed(3)で小数点以下3桁を表示する
    diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 0.5) {
      result.className = 'perfect';
    }
  });

  reset.addEventListener('mousedown', function() {
    if (isStarted === true) {
      return;
    }
    reset.className = 'pushed';
    start.className = '';
    stop.className = '';
    result.className = 'standby';
    result.textContent = '0.000';
    isReseted = false;
  });

  reset.addEventListener('mouseup', function() {
    if (isStarted === true) {
      return;
    }
    reset.className = '';
  });

})();
