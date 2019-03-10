/*
* @Author: dhl
* @Date:   2018-06-01 17:01:34
* @Last Modified by:   dhl
* @Last Modified time: 2018-06-02 09:13:48
*/

//获取video标签
var video=document.querySelector("video");

//显示视频总时长
var  total_time=document.querySelector(".total_time");

//获取播放按钮
var play=document.querySelector(".play");


//获取显示当前时间
var current_time=document.querySelector(".current_time");


//获取进度条
var line=document.querySelector(".line");

//获取总宽度
var m_controls=document.querySelector(".m_controls");

//当浏览器加载完成后执行如下操作
video.addEventListener("canplay", function () {

	//1 显示控件
	this.style.display="block";
	//2. 显示视频总时长
	var duration=this.duration;
	//3. 将秒转换为 时，分，秒
	total_time.innerHTML=time(duration);


	//4. 实现播放或暂停效果
	play.onclick=function () {

		//首先获取当前视频的播放状态
		if(video.paused) {
			//说明当前属于暂停状态，应该播放
			video.play();

		}else {

			video.pause();
		}
		//切换显示播放或暂停图片
		this.classList.toggle("fa-pause");
	}


    //5. 获取当前播放时间
    video.addEventListener("timeupdate", function () {
    	//视频开始播放了
    	current_time.innerHTML=time(this.currentTime);
    	// 进度条总宽度：总时长=当前进度条宽度：当前播放时间
    	//设置进度条的宽度
    	line.style.width=m_controls.clientWidth*this.currentTime/duration+"px";
    })

    //6. 实现跳播功能： 本质就是设置当前视频的播放时间
    // 进度条总宽度：总时长=当前进度条宽度：当前播放时间
    
    m_controls.onclick=function ( e ) {

    	video.currentTime=duration*e.offsetX/this.clientWidth;
    }
    

})

//获取时间
function time (times) {
	var h=Math.floor(times/60/60);
	var m=Math.floor(times%3600/60);
	var s=Math.floor(times%3600%60);

	//将时间拼成一个字符串
		h=h>=10? h: "0"+h;
		m=m>=10? m: "0"+m;
		s=s>=10? s: "0"+s;

	var str=h+":"+m+":"+s;

	return str;
}
