import mongoose from 'mongoose'
import config from '../config/index'
export default async () => {
    const connection = await mongoose.connect(config.MONGO_URI)

    return connection.connection.db
}