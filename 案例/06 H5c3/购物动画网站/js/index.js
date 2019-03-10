/*
* @Author: dhl
* @Date:   2018-05-27 16:10:54
* @Last Modified by:   dhl
* @Last Modified time: 2018-05-28 18:25:32
*/
$(function(){
    $('#fullpage').fullpage({
    	// 设置背景颜色
    	sectionsColor : ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],

    	// 设置内容是否垂直居中显示
    	verticalCentered: false,

    	//是否显示导航
    	navigation: true,

        // 控制页面滚动速度
        scrollingSpeed: 1500,

        // 结构加载完成后
        afterRender: function () {
            //设置一个点击事件
             $(".down").on("click",function(){
                // 让整个屏调用方法
                $.fn.fullpage.moveSectionDown();
             })
        },
    	// 进入到当前页面时候
    	afterLoad: function(anchorLink, index ) {
            //显示按钮
             $(".down").fadeIn();

             if(index==8) {
                $(this).on("mousemove",function(e) {
                       var x=e.clientX;
                       var y=e.clientY;

                       $(".hands08").css({
                          "left": x+20,
                           "top": y+20
                       });
                });

                $(".btns08").on("mouseenter",function() {

                     $('.btns08 img:last-child').show();

                }).on("mouseleave",function() {
                    
                       $('.btns08 img:last-child').hide();
                })

                $(".more").on("click",function() {
                        $.fn.fullpage.moveTo(1);
                });
             }
    	},
    	// 离开当前页面进入到下一页面
    	onLeave: function (index, nextIndex, direction) {

            // 按钮隐藏效果
            $(".down").fadeOut();

            // 离开第一屏，进入第二屏
            if(index==1 && nextIndex==2) {
                $(".search").addClass("animate");
                $(".search img:last-child").addClass("animate");
                $(".goods02").addClass("animate");

            }else if (index==2 && nextIndex==3 ) {
                //从第二屏进入第三屏
                $(".h_sofa02").addClass("animate").on("animationend",function(){

                    $(".size03 img:last-child").fadeIn();

                    $(".btns img:last-child").fadeIn();
                });

            }else if (index==3 && nextIndex==4 ) {
                // 从第三屏到第4屏
                $(".h_sofa03").addClass("animate").on("animationend",function () {

                        $('.cart img:first-child').show();
                        $(".cart").addClass("animate").on("animationend",function(){
                            $('.text04 img:last-child').fadeIn();

                            setTimeout(function(){
                                 $(".address").fadeIn();
                            }, 500)

                            setTimeout(function(){
                                $(".address img:last-child").fadeIn();
                            }, 900)
                        });
                });
            }else if(index==4 && nextIndex==5) {
                //从第4屏到第5屏
                $(".hand").addClass("animate").on("animationend",function(){
                    $(".mouse img:last-child").show();

                    $(".h_sofa4").addClass("animate").on("animationend",function () {
                        $(".cards img:first-child").addClass("animate");
                        $(".cards img:nth-child(2)").addClass("animate");
                    });
                });
            }else if(index==5 && nextIndex==6) {
                //从第5屏到第6屏
                $(".cloud06 img").addClass("animate");

                $(".h_sofa05").addClass("animate");

                $(".box").addClass("animate");

                $(".section6").addClass("animate").on("animationend",function () {
                    $(".cart06 .address06").show();

                    //工作人员出现
                    $(".cart06 .worker").addClass("animate").on("animationend",function () {
                        $(".cart06 .say").show();
                        $(".text06 img:last-child").show();

                        //用户开始出现
                        $(".people img:first-child").addClass("animate");

                        $(".people img:last-child").addClass("animate");
                    });
                });
            }else if(index==6 && nextIndex==7){
                $(".start img").addClass("animate").on("animationend",function () {
                    $(".text07").addClass("animate");
                });
            }else {

              

                // $(".btns08").on("mouseenter",function() {
                //     
                // })
            }
    	}
    });
});