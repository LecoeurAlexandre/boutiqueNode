import express from 'express'
import {App} from './classes/App.js'

const data = new App()
const app = express()


app.listen(3000, () => {
    console.log("Bienvenue sur le site, bon shopping !")
})