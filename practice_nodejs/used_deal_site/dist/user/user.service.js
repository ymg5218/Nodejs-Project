"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./schema/user.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
let UserService = exports.UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(_id) {
        return await this.userModel.findOne({ _id });
    }
    async createUser(user) {
        const { ID, password, nickname, age, recommends } = user;
        const isUserExist = await this.userModel.exists({ ID });
        const isNicknameExist = await this.userModel.exists({ nickname });
        if (isUserExist) {
            throw new common_1.UnauthorizedException('이미 존재하는 게정입니다.');
        }
        if (isNicknameExist) {
            throw new common_1.UnauthorizedException('이미 존재하는 닉네임 입니다.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const _user = await this.userModel.create({
            ID,
            password: hashedPassword,
            nickname,
            age,
            recommends
        });
        return _user.save();
    }
    async updateUser(user) {
        const { _id, nickname } = user;
        const isNicknameExist = await this.userModel.exists({ nickname });
        if (isNicknameExist) {
            throw new common_1.UnauthorizedException("이미 존재하는 닉네임입니다.");
        }
        const _user = await this.userModel.findOne({ _id });
        _user.nickname = nickname;
        _user.save();
        return nickname + "으로 닉네임 변경";
    }
    async deleteUser(_id) {
        return await this.userModel.findByIdAndDelete({ _id }).exec();
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map