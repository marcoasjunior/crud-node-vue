import { model, Schema, Document } from 'mongoose';

export enum PERMISSION_USER {

    ADMIN = 'admin',
    STANDARD = 'standard'

}

export interface User {

    name: string,
    email: string,
    password: string,
    permission: string,
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

const User = model < User & Document > ('User', userSchema);

export default User;