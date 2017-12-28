new Vue({
    el: '#app',
    data: {
        loadingMode: false, // true为音频加载完成
        scene: 'scene1',
        elems: ''
    },
    watch: {

    },
    methods: {
        // TODO 计算某些元素满屏高度
        calcuHeight(dom){
            var pageHeight = $(window).height()
            console.log(pageHeight)
            $('#app>div').css('height', pageHeight)
            $('.scene1 .elem0-7').css('height', pageHeight)
        }
    },
    mounted() {
        this.calcuHeight()

        var audio = document.getElementById('audio')

        if(this.loadingMode){
            this.elems = '<div class="loading">LOADING...</div>'

            // 移动端触摸播放音频
            // TODO 做loading，完成后加载动画和音频
            audio.addEventListener("canplay", function() {
                this.elems = '<div class="loading">Tap to start!</div>'
                $('html').one('touchstart', function () {
                    audio.play()
                    this.already = true
                })
            })
            if (this.already) {
                this.elems = '<div class="elem0-1"></div><div class="elem0-2"></div><div class="elem0-3"></div><div class="elem0-4"></div><div class="elem0-5"></div><div class="elem0-6"></div><div class="elem0-7"></div><div class="elem0-8"></div><div class="elem1-1"></div><div class="elem1-2"></div><div class="elem1-3"></div><div class="elem1-4"></div>'
            }
        }else{
            audio.play();
            $(document).one("touchstart",function() {
                audio.play()
            })
            this.elems = '<div class="elem0-1"></div><div class="elem0-2"></div><div class="elem0-3"></div><div class="elem0-4"></div><div class="elem0-5"></div><div class="elem0-6"></div><div class="elem0-7"></div><div class="elem0-8"></div><div class="elem1-1"></div><div class="elem1-2"></div><div class="elem1-3"></div><div class="elem1-4"></div>'
        }
    }
})