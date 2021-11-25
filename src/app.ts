import 'reflect-metadata';
import express, { Express, Application } from "express";

import config from './config/index'

async function startServer() {
    const app: Application = express()
    await require('./loaders').default(app)
    app.listen(config.PORT, ()=>{
        console.log(`################################################
🛡️  Server listening on port: ${config.PORT} 🛡️
################################################
        `)
    })
}

startServer()