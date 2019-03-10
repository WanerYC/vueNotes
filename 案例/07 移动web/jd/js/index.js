var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  }
});

bannerOpacity ();

function bannerOpacity () {
	// 获取轮播图最外层元素
	var banner = document.querySelector('#banner');
	// 获取轮播图的高度
	var bannerHeight = banner.offsetHeight;

	// 获取头部
	var headerInner = document.querySelector('#headerInner');

	// 当页面发生滚动的时候
	window.onscroll = function () {
		// 页面向上滚动的距离 浏览器认为滚动条是html身上的
		// document.documentElement 获取的是HTML标签
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		// 计算透明度 如果不明白请看图片
		var opacity = scrollTop * 0.85 / bannerHeight;

		// 限制透明度的范围
		if (scrollTop > bannerHeight){
			opacity = 0.85;
		}

		// 设置头部的透明度
		headerInner.style.background = 'rgba(201, 21, 35, '+ opacity +')';
	}
}

/*
	倒计时

		将来的时间(毫秒) - 现在的时间(毫秒)
*/

countDown ();

function countDown () {

	var spans = document.querySelectorAll('#countDown span');

	console.log(spans);

	// 将来的时间
	var future = new Date(2018, 5, 7, 12, 0, 0).getTime();

	var timerId = setInterval(function () {

		// 现在的时间
		var now = new Date().getTime();

		// 时间差
		var t =  (future - now) / 1000;
		console.log(t);
		if (t <= 0) {
			clearInterval(timerId);
			return;
		}

		// 将时间转换为小时
		var hour = Math.floor(t%86400/3600);

		// 将时间转换为分钟
		var minutes = Math.floor(t%86400%3600/60);

		// 将时间转换为秒数
		var seconds = Math.floor(t%60)

		// 百以内取十位 Math.floor(num/10)
		// 百以内取个位 num%10
		
		spans[0].innerText =  Math.floor(hour/10);
		spans[1].innerText = hour%10;

		spans[3].innerText =  Math.floor(minutes/10);
		spans[4].innerText = minutes%10;

		spans[6].innerText =  Math.floor(seconds/10);
		spans[7].innerText = seconds%10;

	}, 1000)

}


