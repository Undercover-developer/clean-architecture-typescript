import { Router } from 'express'
import user from './routes/user'
export default () => {
    const router = Router()
    user(router)
    return router
}