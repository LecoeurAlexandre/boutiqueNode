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


// Voir un client


//Voir un produit


// Voir la liste des commandes


// Voir une seule commande


app.listen(3000, () => {
    console.log("Bienvenue sur le site, bon shopping !")
})