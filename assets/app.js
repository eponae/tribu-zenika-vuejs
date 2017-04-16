Vue.filter('truncate', function (value) {
    if (value.length > 50) {
        return value.slice(0, 10).concat('...');
    }
});

const Banane = Vue.component('banane-component', {
    template: '<div class="box">Je suis un banane</div>'
});

const Home = Vue.component('home-component', {
    props: ['fruits'],
    template: '<div class="box-wrapper">' +
    '<div class="box" v-for="fruit in fruits">' +
    '<span>{{fruit.name}}</span>' +
    '<span>{{fruit.count}}</span>' +
    '<span>{{fruit.description | truncate}}</span>' +
    '<div class="button-action">' +
    '<span class="button-buy" @click="incrementFruit(fruit)">+</span>' +
    '<span class="button-buy" @click="decrementFruit(fruit)">-</span>' +
    '</div></div>' +
    '</div>',
    methods: {
        incrementFruit: function (fruit) {
            fruit.count++;
            this.$emit('increase-count');
        },
        decrementFruit: function (fruit) {
            if (fruit.count > 0) {
                fruit.count--;
                this.$emit('decrease-count');
            }
        }
    }
});


const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/banane', component: Banane}
    ]
});

const basket = Vue.component('basket-component', {
    template: '<div id="header">' +
    '<div class="basket">Panier {{totalCount}}</div>' +
    '</div>',
    props: ['totalCount']
});

const app = new Vue({
    router,
    data: {
        title: "mon super message",
        fruits: [
            {
                name: 'banane',
                count: '0',
                description: 'Est acide daaaaaaaaaaaaaaaaaaaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            },
            {name: 'tomate', count: '0', description: 'Est rouge'},
            {name: 'poire', count: '0', description: 'Est vert'},
            {name: 'ananas', count: '0', description: 'Est jaune'},
            {name: 'pomme', count: '0', description: 'Est sucré'}
        ],
        count: 0
    },
    methods: {
        incrementCount: function () {
            this.count++;
        },
        decrementCount: function () {
            if (this.count > 0) {
                this.count--;
            }
        }
    }
}).$mount('#app');