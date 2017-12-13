window.onload = function() {
    var oContainer = document.getElementById("container");
    var oList = document.getElementById("list");
    var oButton = document.getElementById("button");
    var oPrev = document.getElementById("prev");
    var oNext = document.getElementById("next");
    var button = oButton.getElementsByTagName("span");
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
            oNext.onclick();
        },1600)
    }

    function stop() {
        clearInterval(timer);
    }

    function clearButton() {
        for (var i = 0; i<button.length; i++){
            button[i].className = "";
        }
    }

    function buttonShow() {
        button[index-1].className = "on";
    }
    
    oNext.onclick = function() {
        index += 1;
        if (index > 4) {
            index = 1;
        }
        change(-400);
        clearButton();
        buttonShow();
    }

    oPrev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 4;
        }
        change(400);
        clearButton();
        buttonShow();
    }

    oButton.onclick = function() {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        var clickIndex = parseInt(target.getAttribute("index"));
        if (target.nodeName.toLowerCase() == "span") {
            list.style.left = -400 * clickIndex + "px";
            clearButton();
            target.className = "on";
        }
    }

    oContainer.onmouseover = stop;
    oContainer.onmouseout = play;
    play();
}