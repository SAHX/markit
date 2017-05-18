/**
 * Created by tangjiang on 2017/5/11.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './routers'
import App from './root.vue'

Vue.use(VueRouter);

const router = new VueRouter({base: __dirname, routes:RouterConfig});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});