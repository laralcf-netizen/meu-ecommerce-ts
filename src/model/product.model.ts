import type { Category } from "./category.model.js";

export class Product {
    constructor(public title: string, public price: number, public img:string, public category:Category, public discount:number) {
}
priceWhithDiscountApplied():number { 
        return this.price *(1- this.discount)
    }
    }
