import { type Product } from "./product.model.js"
interface listProduct{
    product: Product,
    quantity: number
}
export class Cart{
    constructor(public listProduct:listProduct[]=[]){}

    addItem(product: Product, quantity: number) {

    const existItem = this.listProduct.findIndex((item)=>item.product.title === product.title) > -1
   if(existItem) {
    this.listProduct = this.listProduct.map((item)=>{
        if(item.product.title === product.title){
            return{
                product,
                quantity: item.quantity + quantity
            }
        }
        return item
    })
   }else {
    this.listProduct.push({product, quantity})
   }
   
}
}