/*
 * @author: luofei
 * @time 2014-03-24
 * @email luofehit2010@gmail.com
 * @function 监控窗口的resize事件，进行部分区域的重绘。
 * */
;$(function() {
    // 网站初始化参数
    var headerH = $('#header').height(),
        footerH = $('#footer').height(),
        gap = 5; // 统一的间隔

    /*
     * 浏览器缩放后的处理函数
     * */
    ;(function resize() {
        var bW = $('body').width(),
            bH = $('body').height(),
            mid_L_W = $('#nav-tree').width(),

            navTree = $('#nav-tree'),
            content = $('#content'),

            midH = bH - headerH - footerH - 2 * gap - 3, // 3px为border的修正
            mid_R_W = bW - mid_L_W - gap - 4; // 4px为border修正

        $(window).off('resize', resize);

        // 添加延迟功能，避免浏览器缩放过程中事件的多次触发
        setTimeout(function() {
            $(window).on('resize', resize);
        }, 30);

        // 这里是具体的处理事件
        navTree.height(midH);
        content.height(midH);
        content.width(mid_R_W);
    })();
});
