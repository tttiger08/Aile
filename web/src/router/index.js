import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      // 将来看是否需要前端路由校验。
      meta:{
        isPublic:true,
        title:'登录'
      }
    },
    {
    path: '/',
    name: 'Index',
    component: Index
    },
  
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router
