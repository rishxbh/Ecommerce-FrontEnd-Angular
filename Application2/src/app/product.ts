import { review } from "./review"

export class Product {
    productCode! : number
    brand! : string
    productName !: string
    reviews !: review[]
    imageLink !: string
}