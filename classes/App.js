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

    read(file, table, counter){
        const content = readFileSync(file).toString()
        table = JSON.parse(content)
        counter = (table[table.length-1] != undefined) ? table[table.length-1].id : 0
    }

    write(file, table) {
        writeFileSync(file, JSON.stringify(table))
    }

    createClient(lastname, firstname, telephone){
        const client = new Client (++this.clientCounter, lastname, firstname, telephone)
        this.clientsList.push(client)
        //console.log(this.clientsList)
        this.write(this.clientsFile, this.clientsList)
    }

    createProduct(title, price, stock){
        const product = new Product (++this.productCounter, title, price, stock)
        this.productsList.push(product)
        this.write(this.productsFile, this.productsList)
    }

    findClientById(id){
        return this.clientsList.find(c => c.id == id)
    }

    findOrderById(id){
        return this.ordersList.find(o => o.id == id)
    }

    findProductById(id){
        return this.productsList.find(p => p.id == id)
    }
}