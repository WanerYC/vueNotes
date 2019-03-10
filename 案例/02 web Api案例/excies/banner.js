// 先获取元素
var imgs = document.getElementById('imgs');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var current = 1;
var sps = document.getElementById('points').children;
var container = document.getElementById('container');

// 给左右按钮添加点击事件
prev.onclick = function () {

	// 上一张图的展示效果按钮
	current--;
	
	if (current < 0) {

		// 如果banner走到了索引为1 即视觉效果为末张图片时 用样式直接把效果拉到
		// 视觉效果为末张图片,索引为5的图片上, 再执行上一张图片的操作 即往索引为4的方向走
		imgs.style.left = -5 * 520 + 'px';

		current = 4;

	}

	// 以下内容封装成函数
		/*imgs.style.left = -current * 520 + 'px';

		// 箭头切换时给轮播点加上选中效果
		// 遍历轮播点 给每个轮播点添加事件
		for (var i = 0; i < sps.length; i++) {

			// 给所有的轮播点去除选中样式
			sps[i].className = '';
		}
		// 给当前的轮播点加上选中中状态
		// 因为current是从1开始 而sps 的索引是从0 开始 
		// 索引当前的sps的索引应该为current-1
		sps[current - 1].className = 'active';*/
	change(current);
}

next.onclick = function () {
	current++;
	if(current > 6) {
		imgs.style.left = '-520px';
		current = 2;
	}
	change(current);
}

// 给轮播点添加点击事件
// 遍历轮播点
for (var  i = 0; i < sps.length; i++) {
	 
	 // 给每个轮播点添加点击事件
	 sps[i].onclick = function () {

		var index = this.getAttribute('index');

	 	current = index;
	 	
		change(index);
	 }
}

// 加上自动播放
var timerId = setInterval(function() {
	current++;
	if(current > 6) {
		imgs.style.left = '520px';
		current = 2;
	}
	change(current);
}, 3000)

// 鼠标上移时 动画停止
container.onmouseenter = function () {
	clearInterval(timerId);
}

// 鼠标移开时 自动轮播
container.onmouseleave = function () {
	var timerId = setInterval(function() {
		current++;
		if(current > 6) {
			imgs.style.left = '520px';
			current = 2;
		}
		change(current);
	}, 3000)
}

// 切换图片和轮播点的效果函数
function change (a) {
	// imgs.style.left = -a * 520 + 'px';
	// 调用函数
	animate(imgs, 'left', -a * 520)

	// 箭头切换时给轮播点加上选中效果
	// 遍历轮播点 给每个轮播点添加事件
	for (var i = 0; i < sps.length; i++) {

		// 给所有的轮播点去除选中样式
		sps[i].className = '';
	}
	// 给当前的轮播点加上选中中状态
	// 因为current是从1开始 而sps 的索引是从0 开始 
	// 索引当前的sps的索引应该为current-1
	// 但是要注意最前方和最后的图片 即 索引为0 和索引为6时对应的轮播点
	if (a == 0) {
		sps[4].className = 'active';
	}else if (a == 6) {
		sps[0].className = 'active';
	}else {

		sps[a - 1].className = 'active';
		
	}
}

// 切换成图片和按钮样式的动画函数
function animate (element,attr, target, fn) {
	
	clearInterval(element.timeId);

	element.timeId = setInterval(function () {

		var current = parseInt(getComputedStyle(element)[attr]);

		var speed = 0;

		if (target > current) {
			speed = Math.ceil((target - current) / 10);
		} else {
			speed = Math.floor((target - current) / 10);
		}

		// 速度的设定
		// var speed = (target - current) / 10; 

		// 如果当前伪装者等于目标点 清除定时器
		if (current == target) {

			clearInterval(element.timeId);

			if(fn) {
				fn();
			}

		} else {

			// 不放入else中 会多跑10px
			element.style[attr] = current + speed + 'px';
		}
		
	},30)
}
