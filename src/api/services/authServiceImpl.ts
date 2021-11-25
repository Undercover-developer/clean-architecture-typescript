import { Service } from 'typedi'
import authInterface from "../../interfaces/authInterface"
import config from '../../config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

@Service()
export default class AuthServiceImpl implements authInterface{
    encryptPassword(password: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password)
    }
    compare(password: string, hashedPassword: string) {
        return bcrypt.compare(password, hashedPassword)
    }
    verify(token: string) {
        return jwt.verify(token, config.JWT_SECRET)
    }
    generateToken(payload: string | object) {
        return jwt.sign(payload, config.JWT_SECRET, { expiresIn: '30m'})
    }
}