export class App {
    constructor(id,nom,prenom,telephone){
        this.clientsList= []
        this.ordersList = []
        this.productsList = []
        this.counter = 0
        this.clientsFile = "clients.json"
        this.ordersFile = "orders.json"
        this.productsFile = "products.json"
    }
}