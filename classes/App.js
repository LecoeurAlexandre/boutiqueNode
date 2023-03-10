import { Client } from "./Client.js"
import { Product } from "./Product.js"
import { writeFileSync , readFileSync } from "fs"

export class App {
    constructor(){
        this.clientsList= []
        this.ordersList = []
        this.productsList = []
        this.clientCounter = 0
        this.orderCounter = 0
        this.productCounter = 0
        this.clientsFile = "clients.json"
        this.ordersFile = "orders.json"
        this.productsFile = "products.json"
    }

    write(file, table) {
        writeFileSync(file, JSON.stringify(table))
    }

    createClient(lastname, firstname, telephone){
        const client = new Client (++this.clientCounter, lastname, firstname, telephone)
        this.clientsList.push(client)
        this.write(this.clientsFile, this.clientsList)
    }

    createProduct(title, price, stock){
        const product = new Product (++this.productCounter, title, price, stock)
        this.productsList.push(product)
        this.write(this.productsFile, this.productsList)
    }
}