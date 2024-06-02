import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import {signToken} from "../utils/jwt-manager";

export default class AuthService {

    private userRepository: UserRepository

    constructor() {
        // seharusnya semua best practice menggunakan DI (dependency injection)
        // tapi jadi mbulet
        this.userRepository = new UserRepository()
    }


    login = async (username: string, plainPwd: string) => {

        const user = await this.userRepository.getUserByUsername(username)

        if (!user) {
            throw new Error('User not found')
        }

        // @ts-ignore
        await bcrypt.compare(user.password, plainPwd)

        const token = signToken({id: user.id, username: user.username, role: user.role}, user.id.toString())

        // insert to redis if need

        return token
    }

    logout = async (params: any) => {
        // blacklist from redis if implemented
    }

    me = async (id: number) => {
        return this.userRepository.getUserById(id)
    }
}
