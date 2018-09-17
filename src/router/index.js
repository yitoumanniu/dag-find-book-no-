import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const components = {
   login: ()=> import('@/views/login/login.vue'),
   layout:()=> import('@/views/layout/layout.vue'),
   index: ()=> import('@/views/index/index.vue'),
   users: ()=> import('@/views/users/index.vue')


 }

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'

    },
    {
      path:'/login',
      component: components.login

    },
    {
      path: '/layout',
      component: components.layout,
      redirect:'/layout/index',
      meta:{
        title: '首页'
      },
      children:[
        {
          path :'index',
          component: components.index
        },
        {
          path: 'users',
          meta: {
            title:'用户管理'
          },
          component:components.users,
        }
    ]
    }
  ]
})
