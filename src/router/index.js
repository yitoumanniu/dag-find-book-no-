import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 const components = {
   login: ()=> import('@/views/login/login.vue'),
   layout:()=> import('@/views/layout/layout.vue'),
   index: ()=> import('@/views/index/index.vue'),
   users: ()=> import('@/views/users/index.vue'),
   text:  ()=> import('@/views/text/index.vue'),
   userEdit:()=> import('@/views/userEdit/userEdit.vue')


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
        },
        {
          path: 'text',
          component:components.text
        },
        {
          path:'userEdit',
          meta:{
            title:'修改个人信息'
          },
          component:components.userEdit
        }
    ]
    }
  ]
})
