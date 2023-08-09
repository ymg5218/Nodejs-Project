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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const board_schema_1 = require("./schema/board.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
const user_schema_1 = require("../user/schema/user.schema");
let BoardService = exports.BoardService = class BoardService {
    constructor(boardModel, userModel) {
        this.boardModel = boardModel;
        this.userModel = userModel;
    }
    async findAll() {
        return this.boardModel.find();
    }
    async findOne(_id) {
        const _board = await this.boardModel.findOne({ _id });
        return _board;
    }
    async createBoard(board) {
        const writer = await this.userModel.findOne(new mongodb_1.ObjectId(board.writer_id));
        return await this.boardModel.create({
            title: board.title,
            content: board.content,
            writer_id: board.writer_id,
            writer_nickname: writer.nickname,
            price: board.price
        });
    }
    async updateBoard(board) {
        const { _id, title, content, price } = board;
        const _board = await this.boardModel.findOne({ _id });
        _board.title = title;
        _board.content = content;
        _board.datetime = new Date();
        _board.price = price;
        _board.save();
        return { message: "수정을 성공하였습니다", _board };
    }
    async deleteBoard(_id) {
        return await this.boardModel.findByIdAndDelete({ _id }).exec();
    }
};
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(board_schema_1.Board.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], BoardService);
//# sourceMappingURL=board.service.js.map