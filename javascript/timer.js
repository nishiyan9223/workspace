(function() {
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  var startTime;
  var timeLeft;
  var timeToCountDown = 0;
  var tid;
  var isRunning = false;

  function updateTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();
    var timeString;
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timeString = m + ':' + s + '.' + ms;
    timer.textContent = timeString;
    document.title = timeString;
  }

  function countDown() {
    tid = setTimeout(function() {
      timeLeft = timeToCountDown - (Date.now() - startTime);
      if (timeLeft < 0) {
        isRunning = false;
        start.textContent = 'Start';
        clearTimeout(tid);
        timeLeft = 0;
        timeToCountDown = 0;
        updateTimer(timeLeft);
        return;
      }
      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    if (isRunning === false) {
      isRunning = true;
      start.textContent = 'Stop';
      startTime = Date.now();
      countDown();
    }else {
      isRunning = false;
      start.textContent = 'Start';
      timeToCountDown = timeLeft;
      clearTimeout(tid);
    }
  });

  reset.addEventListener('click', function() {
    timeToCountDown = 0;
    updateTimer(timeToCountDown);
  });

  min.addEventListener('click', function() {
    if (isRunning) {
      return;
    }
    timeToCountDown += 60 * 1000;
    if (timeToCountDown >= 60 * 60 * 1000) {
      timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
  });

  sec.addEventListener('click', function() {
    if (isRunning) {
      return;
    }
    timeToCountDown += 1000;
    if (timeToCountDown >= 60 * 60 * 1000) {
      timeToCountDown = 0;
    }
    updateTimer(timeToCountDown);
  });

})();
