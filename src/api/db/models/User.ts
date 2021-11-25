import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        lowercase: true,
        unique: true
    },
    password: String
},
{
    timestamps: true
})

const UserModel = mongoose.model('user', UserSchema)
export default UserModel