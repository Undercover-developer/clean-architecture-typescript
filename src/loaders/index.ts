import { Express, Application} from 'express'
import expressLoader from './express'
import mongooseLoader from './mongoose'

export default async (app: Application) => {
    const mongoConnection = await mongooseLoader()
    console.log('✌️ DB loaded and connected!')
    await expressLoader(app)
    console.log('✌️ Express loaded')
}