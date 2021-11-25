import { Request, Response, NextFunction } from "express"
import { Service, Container } from 'typedi'
import userService from "../../services/userService"
import httpRequest from "../../interfaces/httpRequestInterface"
import requestAdapter from "../../adapters/requestAdapter"

@Service()
export default class userController {
    // constructor(private userServiceInstance: userService){}
    async SignUp(req: Request, res: Response, next: NextFunction) {
        const userServiceInstance = Container.get(userService)
        const httpRequest: httpRequest = requestAdapter(req)
        const { headers, statusCode, data } = await userServiceInstance.SignUp(httpRequest)
        res.set(headers).status(statusCode).json(data)
    }
    async Login(req: Request, res: Response, next: NextFunction) {
        const userServiceInstance = Container.get(userService)
        const httpRequest: httpRequest = requestAdapter(req)
        const { headers, statusCode, data } = await userServiceInstance.Login(httpRequest)
        res.set(headers).status(statusCode).json(data)
    }
    async Profile(req: Request, res: Response, next: NextFunction) {
        const userServiceInstance = Container.get(userService)
        const httpRequest: httpRequest = requestAdapter(req)
        const { headers, statusCode, data } = await userServiceInstance.Profile(httpRequest)
        res.set(headers).status(statusCode).json(data)
    }
}