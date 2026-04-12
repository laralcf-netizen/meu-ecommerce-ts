import { api } from './index';

interface IHttp{
  get(path:string, params:unknown, baseURL?: string): Promise<unknown>
  post(body:unknown, path: string, baseURL: string): Promise<unknown>
  put(body:unknown, path: string, baseURL: string): Promise<unknown>
  delete(path:string, params:unknown, baseURL?: string): Promise<unknown>
}
export class HttpClient implements IHttp{
  async get(path:string, params:unknown, baseURL?: string): Promise<unknown>{
    return api.get(path, { params, baseURL}).then ((res)=> res.data.data)
  }
  async post(body:unknown, path: string, baseURL: string): Promise<unknown>{
      return api.post(path, body, { baseURL: baseURL}).then ((res)=> res.data.data)
  }
  async put(body:unknown, path: string, baseURL: string): Promise<unknown>{
    return api.put(path, body, { baseURL: baseURL}).then ((res)=> res.data.data)
  }
  async delete(params:unknown, path: string, baseURL: string): Promise<unknown>{
     return api.delete(path, { params, baseURL}).then ((res)=> res.data.data)
  }
}
export const httpClient = new HttpClient()


