import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import Product from '@/views/Product.vue'
import ProductDetail from '@/views/ProductDetail.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
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
          },
        },
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (to?.meta?.auth) {
    const token = {
      isAuth: false,
    }
    if (token.isAuth) {
      next()
      return
    } else {
      next('/')
      return
    }
  } else {
    next()
    return
  }
})
export default router
