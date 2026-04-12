import { httpClient } from "../config"
export class ProductRest{
  getAll(params: unknown){
    const path = 'products'
    return httpClient.get(path, params)
  }
}
