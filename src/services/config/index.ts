import axios from 'axios'
export class AxiosConfig{
  private $instance
  constructor(public baseURL: string = "/api"){
    this.$instance = axios.create({
      baseURL: this.baseURL,
   })
  }
  setConfig(){
    this.$instance.interceptors.request.use((config)=>{
      const token = localStorage.getItem("token")
      if (token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
    this.$instance.interceptors.response.use((res)=>{
      return res
    })
    return this.$instance
  }
}
export const api = new AxiosConfig().setConfig()
