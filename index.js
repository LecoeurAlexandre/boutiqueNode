import express from 'express'
import {App} from './classes/App.js'

const data = new App()
const app = express()

//Créer client
app.post('/clients', (req, res)=> {
    const {lastname, firstname, telephone} = req.body
    if(lastname != undefined && firstname != undefined && telephone != undefined) {
        data.createClients(lastname, firstname, telephone)
        res.json({message : "Client ajouté avec succès"})
    } else {
        res.json({message : "Merci de transmettre toutes les informations demandées"})
    }
})

//Créer produit


//Créer commande


//Voir tous les clients


// Voir un client


//Voir un produit


// Voir la liste des commandes


// Voir une seule commande


app.listen(3000, () => {
    console.log("Bienvenue sur le site, bon shopping !")
})