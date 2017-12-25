new Vue({
    el: '#app',
    data: {
        scene: 'scene1',
        elems: ''
    },
    methods: {},
    mounted(){
        this.elems = '<div class="elem1-1 eanimated infinite bounce"></div><div></div><div></div>'
    }
})