// import dotenv from 'dotenv'
// const envFound = dotenv.config();
// if (envFound.error) {
//   // This error should crash whole process

//   throw new Error("⚠️  Couldn't find .env file  ⚠️");
// }
export default {
    PORT: process.env.PORT || 9090,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/tsDb',
    JWT_SECRET: process.env.JWT_SECRET || 'jkl!±@£!@ghj1237',
    API: {
        prefix: '/api',
    },
}