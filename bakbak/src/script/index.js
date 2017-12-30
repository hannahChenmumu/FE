var $audio = $('#audio')[0]

new Vue({
    el: '#app',
    data: {
        loadingMode: false, // true为音频加载完成
        scene: 'scene1',
        elems: '',
        statusDl: false, // 音频准备就绪
        statusGo: false
    },
    methods: {
        // TODO 计算某些元素满屏高度
        calcuHeight: function(dom){
            var pageHeight = $(window).height()
            console.log(pageHeight)
            $('#app>div').css('height', pageHeight)
        },
        startAnimation: function(){
            this.statusTap = true
        },
        herewego: function(){
            this.statusGo = true
            // $audio.src = 'http://192.168.1.15:8000/media/guiyangtanqi-320.mp3'
            $audio.play()
            // setTimeout(function(){

                this.elems = '<div class="elem0-1"></div><div class="elem0-2"></div><div class="elem0-3"></div><div class="elem0-4"></div><div class="elem0-5"></div><div class="elem0-6"></div><div class="elem0-7"></div><div class="elem0-8"></div><div class="elem1-1"></div><div class="elem1-2"></div><div class="elem1-3"></div><div class="elem1-4"></div>'

            // }, 6000)
            $('body').bind('touchmove', function(e){
                e.preventDefault()
            })
        },
    },
    watch:{
    },
    mounted() {
        var _self = this

        _self.calcuHeight()

        $audio.load()

        self.setInterval(function(){
            if ($audio.readyState ==4 ){
                _self.statusDl = true
            }
        },50)

        document.addEventListener("touchstart", function (e) {
            // if(e.target.attr('id')=='start'){
                if(_self.statusDl)
                    _self.herewego()
            // }
        })
        document.removeEventListener("touchstart", function(){})

        // 微信
        document.addEventListener("WeixinJSBridgeReady", function () {
            $audio.play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function() {
            $audio.play();
        }, false);

    }
})