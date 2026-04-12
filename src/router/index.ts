import Dashboard  from '@/views/admin/Dashboard.vue';
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import Product from '@/views/Product.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import ProductAdmin from '@/views/admin/products.vue'
import AdminLayout from '@/layouts/AdminLayout.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
{
  path: '/login',
  component: Login,
  meta:{
    auth: false,
  }
},
{
    path: '/register',
    component: Register,
},
    {
      path: '/',
      component: CustomerLayout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'products',
          component: Product,
        },
        {
          path: 'products/:id',
          component: ProductDetail,
          meta: {
            auth: true,
            role: ['CUSTOMER']
          },
        },
        {
          path: 'history',
          component: History,
          meta:{
            auth:true,
            role: ['CUSTUMER']
          }
        }
      ],
    },

  {
    path: "/admin",
    meta:{
        auth: true,
        role: ['ADMIN']
      },
    component: AdminLayout,
    children:[
      {
      path:'dashboard',
      component: Dashboard,

    },
    {
      path: 'products',
      component: ProductAdmin
    }
  ],
  },
  ],
})
router.beforeEach((to, from, next) => {
  if (to?.meta?.auth) {
    const token = {
      isAuth: true,
      role:'customer'
    }
    if (token.isAuth) {
     const roles= to.meta.role as string[]
     console.log (token, 'token')
    if (roles.some((role)=>role ===token.role)) next()
      else next ('/login')
} else{
  next('/login')
}
  }else{
    next()
  }
})
authenticatedGuard(router)
authorizedGuard(router)
export default router
