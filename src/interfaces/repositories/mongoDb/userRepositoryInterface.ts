import mongoose from 'mongoose'
import userData from '../../userData'
export default interface UserRepositoryInterface {
    create(userData: userData): Promise<mongoose.Document>,
    findById(id:string | object): any,
    findByParams(params: object[]): any,
    deleteById(id: string | object): any
}