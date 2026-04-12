import { useAuthStore } from './../../stores/auth';
export function authorizedGuard (router: unknown) {
router.beforeEach((to: unknown, from:  unknown, netx: unknown) =>{
  if(to.meta.role.length>0){
  if(to.meta.role.includes(useAuthStore().getRole)){
    next()
  } else{
    return
  }
  } else{
    next()
  }
})
}
