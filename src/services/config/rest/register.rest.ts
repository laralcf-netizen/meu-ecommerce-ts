import { HttpClient, httpClient, IHttp} from './../config';

export class RegisterRest {
  constructor(private httpClient: IHttp = new HttpClient()) {}
  async registerUser (body: {name: string; email: string; password: string}): Promise <unknown>{
    const path ='/auth/register'
    return await this.httpClient.post(path, body)
  }
}
