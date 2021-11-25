import { Service, Container } from 'typedi'
import authInterface from "../interfaces/authInterface"
import authServiceImpl from '../api/services/authServiceImpl'

@Service()
export default class AuthAdapter implements authInterface {
    // private authServiceImpl = Container.get('AuthServiceImpl')
    private authServiceImpl = new authServiceImpl()
    constructor(){}
    encryptPassword(password: string): string {
        return this.authServiceImpl.encryptPassword(password)
    }
    compare(password: string, hashedPassword: string) {
        return this.authServiceImpl.compare(password, hashedPassword)
    }
    verify(token: string) {
        return this.authServiceImpl.verify(token)
    }
    generateToken(payload: string | object) {
        return this.authServiceImpl.generateToken(payload)
    }
}