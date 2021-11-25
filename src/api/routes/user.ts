import { Router, Request, Response, NextFunction } from "express"
import { Container } from 'typedi'
import userController from "../controllers/userControllers"
import authMiddleware from "../middlewares/auth"


const route = Router()
export default (router: Router) => {
    const controller = Container.get(userController)
    router.use('/user', route)
    route.post('/signup', controller.SignUp)
    route.post('/login', controller.Login)
    route.get('/profile', [authMiddleware], controller.Profile)

    // route.post('/signup', async(req: Request, res: Response, next: NextFunction) => {
    //     const userServiceInstance = Container.get(userService)
    //     const httpRequest: httpRequest = requestAdapter(req)
    //     console.log(await userServiceInstance.SignUp(httpRequest))
    // })
}