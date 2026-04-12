import { useAuthStore } from './../../stores/auth';
export function authorizedGuard (router: unknown) {
router.beforeEach((to: unknown, from: unknown, netx: unknown) =>{
 if (to.mete.auth){
 if( useAuthStore().isAuth) {
  netx()
 }else{
  next('/login')
 }
 }else{
  next()
 }
})
}
