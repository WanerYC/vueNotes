/*
	1.获取页面中的删除按钮
	2.为删除添加轻敲事件
	3.显示蒙层
	
	
	5.获取取消按钮 并添加轻敲事件
	6.让弹出框从下到上
	7.隐藏蒙层

*/

// 获取页面中的删除按钮
var removeBtn = document.querySelectorAll('.remove');
var mask = document.querySelector('.mask');
var box = mask.getElementsByClassName('box')[0];
var cancel = document.querySelector('.cancel');
var currentRemoveBtn = null;

// 循环删除按钮 
for (var i = 0; i < removeBtn.length; i++) {
		
	// 为删除按钮添加轻敲事件 当事件发生的时候 执行removeFn函数
	tap(removeBtn[i], removeFn);
}

function removeFn () {

	// 缓存当前点击的删除按钮
	currentRemoveBtn = this;

	// 让删除按钮的盖子打开
	this.classList.add('active');

	// 让背景蒙层显示
	mask.style.top = 0;

	// 让盒子从上至下掉落
	box.style.top = '200px';
}


// 点击取消按钮
tap(cancel, function () {

	// 让盒子飞回去
	box.style.top = '-200px';

	// 蒙层隐藏
	setTimeout(function () {
		mask.style.top = '-100%';
	}, 1000);

	// 删除当前按钮的选中状态
	currentRemoveBtn.classList.remove('active');

});


function tap (el, fn) {
	
	if (el.nodeType && el.nodeType == 1) {

		var startTime = 0;
		var endTime = 0;

		// 没有发生touchmove事件
		var flag = false;

		el.addEventListener('touchstart', function () {

			// 记录事件发生的开始时间
			startTime = new Date().getTime();

		});

		el.addEventListener('touchmove', function () {
			flag = true;
		});

		el.addEventListener('touchend', function (e) {

			// 记录时间结束的时间
			endTime = new Date().getTime();

			// 如果时间差小于150ms 并且没有发生touchmove事件
			if (endTime - startTime < 150 && !flag) {

				// 执行事件处理函数
				fn && fn.call(el, e);

			}

			// 重置变量 防止下回触发事件发生问题
			flag = false;

		});
	}else{
		console.warn('tap函数请传入元素对象');
	}

}