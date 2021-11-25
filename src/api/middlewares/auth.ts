import { Request, Response, NextFunction } from "express"
import { Container } from 'typedi'
import AuthService from "../../adapters/authServiceAdapter"
export default function authMiddleware(req: any, res: Response, next: NextFunction) {
    const authService = Container.get(AuthService)
    const token = req.header('Authorization')
    if (!token) {
        throw new Error('No access token found')
    }
    if (token.split(' ')[0] !== 'Bearer') {
        res.json({succes: false, msg: 'Invalid access token format'}).status(300)
        throw new Error('Invalid access token format')
    }
    try {
        const decoded: any = authService.verify(token.split(' ')[1])
        req.userID = decoded.userID
        next()
    } catch (err) {
        res.json({succes: false, msg: 'invalid token'}).status(300)
        throw new Error('Token is not valid')
    }
}