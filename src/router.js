import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Job from './views/jop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'../html/index.html',
      children:[
          {
              path: '/dream',
              name: 'dream',
              component: () => import('./views/dream.vue'),
              redirect:'/qieGao',
              children:[
                  {
                      path: '/qieGao',
                      name: 'qieGao',
                      component: () => import('./components/qieGao.vue'),


                  },
                  {
                      path: '/createP',
                      name: 'createP',
                      component: () => import('./components/createP.vue'),
                  },
                  {
                      path: '/daBa',
                      name: 'daBa',
                      component: () => import('./components/daBa.vue'),
                  }
              ]
          },
          {
              path: '/discuss',
              name: 'discuss',
              component: () => import('./views/discuss.vue'),
          },
          {
              path: '/job',
              name: 'job',
              component:Job,
          }
      ]
    }
  ]
})
