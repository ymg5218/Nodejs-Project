import { JwtService } from '@nestjs/jwt';
import { UserLoginDTO } from 'src/user/dto/user.logindto';
import { UserSchema } from 'src/user/schema/user.schema';
import { Model } from 'mongoose';
export declare class AuthService {
    private readonly jwtService;
    private userModel;
    constructor(jwtService: JwtService, userModel: Model<UserSchema>);
    jwtLogin(data: UserLoginDTO): Promise<{
        token: string;
    }>;
}
