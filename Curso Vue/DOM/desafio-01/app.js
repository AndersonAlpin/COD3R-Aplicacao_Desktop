new Vue({
    el: '#desafio',
    data: {
        nome: 'Anderson',
        idade: 26,
        imagem: './img/akame.png'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})