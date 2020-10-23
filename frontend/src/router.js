import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('./components/HomePage'),
            meta: { layout: 'simple' },
        },
    ]
});

export default router;
