(function() {
  'use strict';

  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');

  var startTime;
  var elapsedTime = 0;
  var tid;
  var timeToAdd = 0;
  var isRunnig = false;

  function updateTimerText() {
    // 135.2s 135200ms -> 02:15.200
    // m = 135200 / 60000 の商
    // s = 135200 % 60000 / 1000 Math.floorで切り捨て
    // ms = 135200 % 1000

    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;

    //  3 -> '03'
    // 12 -> '12'

    //  3 -> '0' +  3  -> '03'
    // 12 -> '0' + 12 -> '012'

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);

    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countUp() {
    tid = setTimeout(function() {
      elapsedTime = Date.now() - startTime + timeToAdd;
      updateTimerText();
      countUp();
    }, 10);
  }

  updateButtonState(true, false, false);

  function updateButtonState(startButtonState, stopButtonState, resetButtonState) {
    start.className = startButtonState ? 'btn' : 'btn inactive';
    stop.className = stopButtonState ? 'btn' : 'btn inactive';
    reset.className = resetButtonState ? 'btn' : 'btn inactive';
  }

  start.addEventListener('click', function() {
    if (isRunnig === true) {
      return;
    }
    isRunnig = true;
    updateButtonState(false, true, false);
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', function() {
    if (isRunnig === false) {
      return;
    }
    isRunnig = false;
    updateButtonState(true, false, true);
    clearTimeout(tid);
    timeToAdd += Date.now() - startTime;
  });

  reset.addEventListener('click', function() {
    if (isRunnig === true) {
      return;
    }
    elapsedTime = 0;
    timeToAdd = 0;
    updateButtonState(true, false, false);
    updateTimerText();
  });

})();
