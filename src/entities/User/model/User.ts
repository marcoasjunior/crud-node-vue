import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt'

export enum PERMISSION_USER {

    ADMIN = 'admin',
        STANDARD = 'standard'

}

export interface IUser {

    name: string,
        email: string,
        password: string,
        permission: PERMISSION_USER,
        phone: string,

}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    permission: {
        type: String,
        required: true,
        default: PERMISSION_USER.STANDARD,
        enum: Object.values(PERMISSION_USER)
    },
    phone: {
        type: String,
        required: true
    },
}, { timestamps: true });

userSchema.pre('save', async function (this: any, next) {

    this.password = bcrypt.hashSync(this.password, 10)

    next()

})

const User = model < IUser & Document > ('User', userSchema);

export default User;