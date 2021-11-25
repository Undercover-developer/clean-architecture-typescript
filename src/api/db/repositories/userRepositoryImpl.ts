import UserModel from "../models/User"
import UserRepositoryInterface from "../../../interfaces/repositories/mongoDb/userRepositoryInterface"
import { Document } from "mongoose"
import userData from "../../../interfaces/userData"
export default class UserRepositoryImpl implements UserRepositoryInterface {
    create(userData: userData): Promise<Document<any, any, any>> {
        const newUser = new UserModel(userData)
        return newUser.save()
    }
    findById(id: string | object): any {
        return UserModel.findById(id)
    }
    findByParams(params: object[]): any {
        return UserModel.findOne({ $or: params })
    }
    deleteById(id: string | object): any {
        return UserModel.deleteOne({_id:id})
    }
}