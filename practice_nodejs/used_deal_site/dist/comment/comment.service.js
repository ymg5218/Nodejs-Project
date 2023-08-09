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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_model_1 = require("./schema/comment.model");
const user_schema_1 = require("../user/schema/user.schema");
const mongodb_1 = require("mongodb");
const recomment_model_1 = require("./schema/recomment.model");
let CommentService = exports.CommentService = class CommentService {
    constructor(commentModel, recommentModel, userModel) {
        this.commentModel = commentModel;
        this.recommentModel = recommentModel;
        this.userModel = userModel;
    }
    async findAll() {
        return this.commentModel.find();
    }
    async findAll_Re() {
        return this.recommentModel.find();
    }
    async findAll_ExistRe(parentComment_id) {
        return this.recommentModel.find(parentComment_id);
    }
    async findOne(_id) {
        const comment = await this.commentModel.findOne({ _id });
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        const writer_info = await this.userModel.findOne(new mongodb_1.ObjectId(comment.writer));
        return "작성자 : " + writer_info.nickname + "\n"
            + comment;
    }
    async createComment(comment) {
        return await this.commentModel.create(comment);
    }
    async createRecomment(recomment) {
        const createdRecomment = await this.recommentModel.create(recomment);
        const parentComment = await this.commentModel.findOne({ _id: createdRecomment.parentComment_id });
        parentComment.child_account += 1;
        parentComment.save();
        return "부모댓글의 대댓글 개수 갱신 확인 \n" + parentComment;
    }
    async updateComment(comment) {
        const { _id, content } = comment;
        const _comment = await this.commentModel.findOne({ _id });
        if (!_comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        _comment.content = content;
        _comment.datetime = new Date();
        _comment.save();
        return _comment;
    }
    async updateRecomment(recomment) {
        const { _id, content } = recomment;
        const _recomment = await this.recommentModel.findOne({ _id });
        if (!_recomment) {
            throw new common_1.NotFoundException('Recomment not found');
        }
        _recomment.content = content;
        _recomment.datetime = new Date();
        _recomment.save();
        return _recomment;
    }
    async deleteComment(_id) {
        const comment = await this.commentModel.findOne({ _id });
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        await this.commentModel.findByIdAndDelete({ _id });
        if (comment.child_account > 0) {
            await this.recommentModel.deleteMany({ parentComment_id: comment._id.toString() });
        }
        return "댓글 + 대댓글 삭제 완료!\n";
    }
    async deleteRecomment(_id) {
        const recomment = await this.recommentModel.findOne({ _id });
        if (!recomment) {
            throw new common_1.NotFoundException('Recomment not found');
        }
        await this.recommentModel.findByIdAndDelete({ _id });
        const parentComment = await this.commentModel.findOne({ _id: recomment.parentComment_id });
        parentComment.child_account -= 1;
        parentComment.save();
        return "대댓글 삭제 완료!\n";
    }
};
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_model_1.Comment.name)),
    __param(1, (0, mongoose_1.InjectModel)(recomment_model_1.ReComment.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CommentService);
//# sourceMappingURL=comment.service.js.map