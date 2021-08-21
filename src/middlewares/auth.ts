import User from "../entities/User/model/User"
import jwt from 'jsonwebtoken';

export async function getUser(req: any, res: any, next) {

    if (!req.headers.token) return next()

    const decoded: any = jwt.decode(req.headers.token)

    req.user = await User.findById(decoded.id).lean()

    return next()

}