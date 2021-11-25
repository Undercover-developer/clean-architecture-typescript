import express from 'express'
import cors from 'cors'
import routes from '../api/index'
import config from '../config/index'

export default (app: express.Application) => {
    app.use(cors())
    app.use(express.json())
    app.use(config.API.prefix, routes())
}