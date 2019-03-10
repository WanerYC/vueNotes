// 获取元素
var imgs = document.getElementById('imgs');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var sps = document.getElementById('points').children;
var current = 1;
console.log(sps);

//  给左右箭头添加点击事件
//  給右箭头添加点击事件
next.onclick = function () {

    current++;

    if(current > 6){
        // 如果图片按照下一张走 走到第张 即 视觉效果第一张的时,直接用样式吧图片拉到原本显示为第一张 即索引为1的图片上 再执行 下一张的命令
        current = 1;
        imgs.style.left = '-520px';

    }
    // console.log(current);
    imgs.style.left = -current * 520 +'px';
    
    //  给相应的轮播点加上选中状态
    //  先遍历
    for (var i = 0; i < sps.length; i++) {

        //  给每一个span都去除选中事件
        sps[i].className = '';
    } 
    // 相应的span的所有是从0 开始的 但是current 的索引是从1开的
    // 但是要注意最前/后方的图片  索引为0和6时

    // sps[this].className = 'active';    错误的示范

}
//  给轮播点加点击事件
