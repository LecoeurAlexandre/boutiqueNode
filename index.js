import express from 'express'
import {App} from './classes/App.js'

const data = new App()
const app = express()
app.use(express.json())

//Créer client
app.post('/clients', (req, res)=> {
    const {lastname, firstname, telephone} = req.body
    if(lastname != undefined && firstname != undefined && telephone != undefined) {
        data.createClient(lastname, firstname, telephone)
        res.json({message : "Client ajouté avec succès"})
    } else {
        res.json({message : "Merci de transmettre toutes les informations demandées"})
    }
})

//Créer produit
app.post('/products', (req, res)=> {
    const {title, price, stock} = req.body
    if(title != undefined && price != undefined && stock != undefined) {
        data.createProduct(title, price, stock)
        res.json({message : "Produit ajouté avec succès"})
    } else {
        res.json({message : "Merci de transmettre toutes les informations demandées"})
    }
})



//Créer commande


//Voir tous les clients
app.get('/clients', (req, res) => {
    res.json(data.clientsList)
})

// Voir un client
app.get('/clients/:id', (req,res) => {
    const client = data.findClientById(req.params.id)
    if( client != undefined){
        res.json(client)
    }else {
        res.json({message : "Client pas trouvé"})
    }
})

//Voir un produit
app.get('/products/:id', (req,res) => {
    const product = data.findProductById(req.params.id)
    if( product != undefined){
        res.json(product)
    }else {
        res.json({message : "Produit pas trouvé"})
    }
})

// Voir la liste des commandes
app.get('/orders', (req, res) => {
    res.json(data.ordersList)
})

// Voir une seule commande
app.get('/orders/:id', (req,res) => {
    const order = data.findOrderById(req.params.id)
    if( order != undefined){
        res.json(order)
    } else {
        res.json({message : "Commande pas trouvée"})
    }
})

app.listen(3000, () => {
    console.log("Bienvenue sur le site, bon shopping !")
})