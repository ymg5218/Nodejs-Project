import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type UserSchema = User & Document;
export declare class User {
    ID: string;
    password: string;
    nickname: string;
    age: number;
    recommends: number;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, Document<unknown, {}, User> & User & {
    _id: mongoose.Types.ObjectId;
}>;
