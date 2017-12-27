new Vue({
    el: '#app',
    data: {
        scene: 'scene1',
        elems: ''
    },
    methods: {},
    mounted(){
        this.elems = `<div class="elem1-1"></div><div class="elem1-2"></div><div class="elem1-3"></div>`
    }
})