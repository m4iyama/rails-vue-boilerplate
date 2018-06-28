import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../view/home-view.vue';
import CounterView from '../view/counter-view.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/counter',
            component: CounterView,
        }
    ]
})