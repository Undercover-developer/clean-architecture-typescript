import { Service, Inject } from 'typedi'
import httpRequest from '../interfaces/httpRequestInterface'
import userRepository from '../adapters/repositories/userRepositoryAdapter'
import authService from '../adapters/authServiceAdapter'

@Service()
export default class userService {
    constructor(private userRepository: userRepository, private authService: authService) { }

    async SignUp(httpRequest: httpRequest) {
        const { name, email, password } = httpRequest.body
        const userExists = await this.userRepository.findByParams([{ email: email }])
        if (userExists) return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 300,
            data: {
                success: false,
                msg: 'user already exists'
            }
        }
        const hashedPassword = await this.authService.encryptPassword(password)
        const user = await this.userRepository.create({ name, email, password: hashedPassword })
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 200,
            data: {
                user,
                success: true,
                msg: 'user successfully registered'
            }
        }
    }
    async Login(httpRequest: httpRequest) {
        const { email, password } = httpRequest.body
        const user = await this.userRepository.findByParams([{email}])
        if(!user) return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            data: {
                success: false,
                msg: 'user not found'
            } 
        }
        const passwdMatch = await this.authService.compare(password, user.password)
        if(!passwdMatch) return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            data: {
                success: false,
                msg: 'invalid password'
            } 
        }
        const authToken = await this.authService.generateToken({userID: user._id})
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 200,
            data: {
                success: true,
                token: authToken,
                user
            } 
        }
    }
    async Profile(httpRequest: httpRequest) {
        const { userID } = httpRequest
        const user = await this.userRepository.findById({_id: userID ? userID : ""})
        if(!user) return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            data: {
                success: false,
                msg: 'invalid user'
            } 
        }
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 400,
            data: {
                success: true,
                user
            } 
        }
    }
}