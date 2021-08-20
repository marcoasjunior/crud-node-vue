import User from "./model/User"

class UserService {

    async findAll() {

        const users = await User.find()

        return users

    }

    async create(body) {

        const created = await User.create(body)

        return (created)

    }

    async update(id, body) {

        const updated = await User.findByIdAndUpdate(id, body)

        return (updated)

    }

    async delete(id) {

        return await User.findByIdAndDelete(id)

    }

}

export default new UserService()