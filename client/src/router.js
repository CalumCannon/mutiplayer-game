import Menu from '@/views/menu';
import GameView from '@/views/gameview'; //NEW
import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    // NEW
    {
      path: '/gameview',
      name: 'gameview',
      component: GameView,
    }
  ]
})

export default router;
