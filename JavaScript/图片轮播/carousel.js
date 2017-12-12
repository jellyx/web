window.onload = function() {
  var container = document.getElementById('container');
  var list = document.getElementById('list');
  var button = document.getElementById('button').getElementsByTagName('span');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var index = 1;
  var timer;

  function change(offset) {
    var newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + "px" ;
    if (newLeft > -400) {
      list.style.left = -1600 + "px" ;
    }
    if (newLeft < -1600) {
      list.style.left = -400 + "px" ;
    }
  }

  function play() {
    timer = setInterval(function() {
      next.onclick();
    }, 2000)
  }

  function stop() {
    clearInterval(timer);
  }

  function buttonshow() {
    for (var i = 0; i < button.length; i++) {
      if (button[i].className == "on") {
        button[i].className = "";
      }
    }
    button[index - 1].className = "on";
  }

  prev.onclick = function() {
    index -= 1;
    if (index < 1) {
      index = 4;
    }
    buttonshow();
    change(400);
  };

  next.onclick = function() {
    index += 1;
    if (index > 4) {
      index = 1;
    }
    change(-400);
    buttonshow();
  };

  for (var i = 0; i < button.length; i++) {
    (function(i) {
      button[i].onclick = function() {
        var clickIndex = parseInt(this.getAttribute('index'));
        var offset = 400 * (index - clickIndex);
        change(offset);
        index = clickIndex;
        buttonshow();
      }
    })(i)
  }

  container.onmouseover = stop;
  container.onmouseout = play;
  play();

}
