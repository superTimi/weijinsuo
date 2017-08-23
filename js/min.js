/**
 * Created by Administrator on 2017/6/9.
 */
// author： 杨逗恩
$(function(){
    function resize(){
        var windowWidth = $(window).width(); // 1 获取屏幕的宽度
        // 2 判断屏幕属于大还是小
        var ispingmu = windowWidth < 768;

        // 3 根据大小为界面上的每一张轮播图设置背景
        // $("#main_ad > .carousel-inner > .item") // 获取到的是dom数组
        $("#main_ad .carousel-inner .item").each(function(i,item){ // 遍历item数组
            var $item = $(item); // 把dom元素转换为jquery元素
            var imgSrc =
                ispingmu ? $item.data("image-xs") : $item.data("image-lg");
                $item.css('backgroundImage','url("'+imgSrc+'")')  ;

            // 因为我们需要显示小图的时候尺寸等比例缩放，所以小图显示的是我们不使用背景，切换成img标签来显示
            if(ispingmu){
                $item.html('<img src="'+imgSrc+'" />' )}
            else{
                $item.empty()
            }
        })
    }



    /*$(window).on('resize',resize);
    $(window).trigger('resize');
    等同于下面的这个代码
    */
    $(window).on('resize',resize).trigger('resize');


//                      控制标签页的容器的宽度
    var $ulcontainer = $(".nav-tabs");
//    获取所有子元素的宽度和
    var width = 30;     // 因为原本的ul有padding-left，所以开始的width要加上30px；
//    遍历子元素
    $ulcontainer.children().each(function(index,element){
        width += element.clientWidth;
    });
// 此时width等于所有li的总和
// 判断当前的ul的宽度是否超出屏幕，如果超出就显示横向滚动条
    if(width > $(window).width())

    //  链式编程开始
 $ulcontainer
        .css("width",width)   //  前面的width是属性，后面的width是属性值
        .parent().css("overflow-x","scroll");
    //  链式编程结束


//    新闻模块的点击注册时间
    var $newstitle = $('.news-title');
    $("#news .nav-pills a").on('click',function(){
    //    获取当前点击的元素
        var $this = $(this);
    //    获取对应的title值
        var title = $this.data('title');
    //    将title设置到响应的位置
        $newstitle.text(title);
    });
//    移动端在轮播图上滑动时图片切换
//    获取界面上轮播图的容器 ↓↓↓↓↓↓↓
    var $carousels = $(".carousel");
    var startX,endX;
    var offset = 50;
//    注册滑动事件↓↓↓↓↓↓↓
    $carousels.on('touchstart',function(e){
        // 手指触摸时开始记录一下手指所在的坐标
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchmove',function(e){
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function(e){
        // 手指触摸结束的坐标
        var distance = Math.abs(startX - endX);
        if(distance > offset){  // 如果滑动了50px那么才切换图片
            $carousels.carousel(startX >endX?'next':'prev');
        }
//    原理
//    1，获取手指在轮播图元素上的一个滑动的方向（左右）
//          1.1 用手指刚开始触摸的坐标-减去手指最后的左边
//          1.2 比大小
//    2，根据获取到的方向选择上一张或者下一张图片
//    $('a').click();
//    原生的carousel方法实现，
    });












});