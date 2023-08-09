import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentSchema } from './schema/comment.model';
import { CommentDTO } from './dto/comment.dto';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { ObjectId } from 'mongodb';
import { ReComment, ReCommentSchema } from './schema/recomment.model';
import { ReCommentDTO } from './dto/recomment.dto';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<CommentSchema>,
        @InjectModel(ReComment.name) private recommentModel: Model<ReCommentSchema>,
        @InjectModel(User.name) private userModel: Model<UserSchema>
        ){}

    async findAll(){
        return this.commentModel.find();
    }

    async findAll_Re() {
        return this.recommentModel.find();
    }
    
    async findAll_ExistRe(parentComment_id : any) {
        return this.recommentModel.find(parentComment_id);
    }

    async findOne(_id : string){
        const comment = await this.commentModel.findOne({_id});
        if (!comment) {
            throw new NotFoundException('Comment not found');
        }
        const writer_info = await this.userModel.findOne(new ObjectId(comment.writer));
        return "작성자 : " + writer_info.nickname + "\n"
        + comment;
    }

    async createComment(comment : CommentDTO) {
        return await this.commentModel.create(comment);
    }

    async createRecomment(recomment : ReCommentDTO) {
        const createdRecomment = await this.recommentModel.create(recomment);
        const parentComment = await this.commentModel.findOne({_id : createdRecomment.parentComment_id});
        parentComment.child_account += 1;
        parentComment.save();
        return "부모댓글의 대댓글 개수 갱신 확인 \n" +parentComment;
    }

    async updateComment(comment : any) {
        const { _id , content } = comment;
        const _comment = await this.commentModel.findOne({_id});
        if(!_comment) {
            throw new NotFoundException('Comment not found');
        }
        _comment.content = content;
        _comment.datetime = new Date();
        _comment.save();
        return _comment;  
    }

    async updateRecomment(recomment : any) {
        const { _id , content } = recomment;
        const _recomment = await this.recommentModel.findOne({_id});
        if(!_recomment) {
            throw new NotFoundException('Recomment not found');
        }
        _recomment.content = content;
        _recomment.datetime = new Date();
        _recomment.save();
        return _recomment;
    }

    async deleteComment(_id: string){
        const comment = await this.commentModel.findOne({_id});
        if (!comment) {
            throw new NotFoundException('Comment not found');
        }
        await this.commentModel.findByIdAndDelete({_id});
        
        if (comment.child_account > 0) {
            await this.recommentModel.deleteMany({parentComment_id : comment._id.toString()});
        }

        return "댓글 + 대댓글 삭제 완료!\n";
    }

    async deleteRecomment(_id: string){
        const recomment = await this.recommentModel.findOne({_id});
        if (!recomment) {
            throw new NotFoundException('Recomment not found');
        }

        await this.recommentModel.findByIdAndDelete({_id});
        const parentComment = await this.commentModel.findOne({_id : recomment.parentComment_id});
        parentComment.child_account -= 1;
        parentComment.save();

        return "대댓글 삭제 완료!\n";
    }
}
