
window.onload = function () {
    var minBox = document.getElementById('minBox');
    var maxBox = document.getElementById('maxBox');
    var max = document.getElementById('max');
    var wrapper = document.getElementById('wrapper');
    var mousebg = document.getElementById('mousebg');
    var mul = 5;
    //当某一个模块dispaly:none的时候不能使用offsetWidth获取它的宽高
    minBox.onmouseover = function () {
        maxBox.style.display = 'block';
        mousebg.style.display = 'block';
        
    }
    minBox.onmouseout = function () {
        maxBox.style.display = 'none';
        mousebg.style.display = 'none';
    }
    minBox.onmousemove = function (event) {
        var event = event||window.event;
        //计算鼠标相对与小图的位置
        var mouseX = event.clientX - wrapper.offsetLeft - minBox.offsetLeft;
        var mouseY = event.clientY - wrapper.offsetTop - minBox.offsetTop;

		//特殊情况处理，分别靠近四条边的时候
		if(mouseX<mousebg.offsetWidth/2){
			mouseX = mousebg.offsetWidth/2;
		}
		if(mouseX>minBox.offsetWidth-mousebg.offsetWidth/2){
			mouseX = minBox.offsetWidth-mousebg.offsetWidth/2;
		}
		if(mouseY<mousebg.offsetHeight/2){
			mouseY = mousebg.offsetHeight/2;
		}
		if(mouseY>minBox.offsetHeight-mousebg.offsetHeight/2){
			mouseY = minBox.offsetHeight-mousebg.offsetHeight/2;
		}
		//计算大图的显示范围
		max.style.left = -mul*mouseX+maxBox.offsetWidth/2+"px";
	    max.style.top = -mul*mouseY+maxBox.offsetHeight/2+"px";
	   //使鼠标在白块的中间
		mousebg.style.left = mouseX-mousebg.offsetWidth/2+"px";
		mousebg.style.top = mouseY-mousebg.offsetHeight/2+"px";
        
    }
}