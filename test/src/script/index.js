$(function(){
    var $audio = $('#audio')[0]

    var pageHeight = $(window).height()
    console.log(pageHeight)
    $('#app>div').css('height', pageHeight)

    // 微信
    document.addEventListener("WeixinJSBridgeReady", function () {
        $audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        $audio.play();
    }, false);
})
