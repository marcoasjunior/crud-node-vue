import { compareSync } from "bcrypt";
import jwt from 'jsonwebtoken'
import { IUser } from './model/User'
import User from "./model/User";
import bcrypt from 'bcrypt'

class UserService {

    async findAll(filter = {}) {

        const users = await User.find(filter).lean()

        users.forEach(user => delete user.password)

        return users

    }

    async login(email: string, password: string) {

        const user = await User.findOne({ email }).lean()

        if(!user || !compareSync(password, user.password)) throw new Error('Unauthorized')

        delete user.password

        const token = jwt.sign({ id: user._id }, process.env.SECRET);

        return { user, token }

    }

    async create(body: IUser) {

        try {

            return await User.create(body)

        } catch (error) {

            throw new Error(error)
        }

    }

    async update(id: string, body: IUser) {

        try {

            if (body.password) body.password = bcrypt.hashSync(body.password, 10)

            return await User.findByIdAndUpdate(id, body)

        } catch (error) {

            throw new Error(error)

        }

    }

}

export default new UserService()