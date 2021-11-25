import userRepositoryInterface from '../../interfaces/repositories/mongoDb/userRepositoryInterface'
import UserRepositoryImpl from "../../api/db/repositories/userRepositoryImpl"
import { Document } from 'mongoose'
import userData from '../../interfaces/userData'
import { Service } from 'typedi'

@Service()
export default class userRepositoryAdapter implements userRepositoryInterface {
    private userRepositoryImpl = new UserRepositoryImpl()
    create(userData: userData): Promise<Document<any, any, any>> {
        return this.userRepositoryImpl.create(userData)
    }
    findById(id: string | object) {
        return this.userRepositoryImpl.findById(id)
    }
    findByParams(params: object[]) {
        return this.userRepositoryImpl.findByParams(params)
    }
    deleteById(id: string | object) {
        return this.userRepositoryImpl.deleteById(id)
    }
}