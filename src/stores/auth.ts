import {User } from "@/model/user.model"
import {defineStore} from 'pinia'
export const useAuthStore = defineStore ("auth",{
  state:() =>{
    return {
      use: new User(),
      acessToken: localStorage.getItem('accessToken') as null |string,
      refreshToken: localStorage.getItem('refreshToken') as null |string,
    }
  },
  getters:{
    getUser(state){
      return state.user
    },
    getEmail(state){
      return state.user?.email
    },
    getRole(state):'ADMIN' | 'CUSTOMER' | null {
      return state.user.role
    },
    isAuth(state): boolean{
      return !!state.accessToken
    }
  },
  actions:{
    setUser(user:User){
    this.user= user;
  },
  setAccessToken(token: string){
    localStorage.setItem('accessToken', token)
    this.accessToken = token
  },
  setRefreshToken(token:string){
    this.refreshToken = token
  },
  logout(){
    this.user = new User()
    this.acessToken = null
    this.refreshToken =null
  }

}
})

