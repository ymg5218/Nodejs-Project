import { User, UserSchema } from './schema/user.schema';
import mongoose, { Model } from 'mongoose';
import { UserDTO } from './dto/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserSchema>);
    findAll(): Promise<User[]>;
    findOne(_id: string): Promise<mongoose.Document<unknown, {}, UserSchema> & User & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    createUser(user: UserDTO): Promise<User>;
    updateUser(user: any): Promise<string>;
    deleteUser(_id: string): Promise<mongoose.Document<unknown, {}, UserSchema> & User & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
}
