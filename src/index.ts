import { Product } from "./model/product.model.js"
import { Category } from "./model/category.model.js"
import { Cart } from "./model/cart.model.js"
const category = new Category("Instrumentos")
const product = new Product('Guitarra', 400, 'jpeg', category, 0.2)
const cart = new Cart()
cart.addItem(product,2)
cart.addItem(product,1)

console.log(cart.listProduct)