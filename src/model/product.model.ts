export class Product{
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public discount: number,
    public images: string[]=[],
  ){}

  getPrice(){
    return new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
    }).format(this.price *(1- this.discount));
  }
  }

