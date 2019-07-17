import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Main from '../components/main/main.vue';

// 
// 加载main首页的子路由
import home from '../components/home/home.vue';
import login from '../components/login/login.vue';
// import chidren from '../components/chidren/chidren.vue';

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/Main'
    },
    {
      name: 'main',
      path: 'main',
      component: Main,
      children: [
        {
          name: 'login',
          path: 'login',
          component: login
        },
      
    ]
    },
    // {
    //   name: 'chidren',
    //   path: '/chidren',
    //   component: chidren
    // },
  
  ]
})
