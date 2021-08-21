import { compareSync } from "bcrypt";
import jwt from 'jsonwebtoken'
import { User as IUser } from "../../../project name/src/interfaces/users.interface";
import User from "./model/User";

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

        const token = jwt.sign({ id: user._id }, process.env.SECRET );

        return { user, token }

    }

    async create(body: IUser) {

        return await User.create(body)

    }

    async update(id: string, body: IUser) {

        const updated = await User.findByIdAndUpdate(id, body)

        return updated

    }

}

export default new UserService()