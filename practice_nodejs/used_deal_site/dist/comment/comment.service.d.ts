/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { Model } from 'mongoose';
import { Comment, CommentSchema } from './schema/comment.model';
import { CommentDTO } from './dto/comment.dto';
import { UserSchema } from 'src/user/schema/user.schema';
import { ReComment, ReCommentSchema } from './schema/recomment.model';
import { ReCommentDTO } from './dto/recomment.dto';
export declare class CommentService {
    private commentModel;
    private recommentModel;
    private userModel;
    constructor(commentModel: Model<CommentSchema>, recommentModel: Model<ReCommentSchema>, userModel: Model<UserSchema>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, CommentSchema> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll_Re(): Promise<(import("mongoose").Document<unknown, {}, ReCommentSchema> & ReComment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll_ExistRe(parentComment_id: any): Promise<(import("mongoose").Document<unknown, {}, ReCommentSchema> & ReComment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(_id: string): Promise<string>;
    createComment(comment: CommentDTO): Promise<import("mongoose").Document<unknown, {}, CommentSchema> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createRecomment(recomment: ReCommentDTO): Promise<string>;
    updateComment(comment: any): Promise<import("mongoose").Document<unknown, {}, CommentSchema> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateRecomment(recomment: any): Promise<import("mongoose").Document<unknown, {}, ReCommentSchema> & ReComment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteComment(_id: string): Promise<string>;
    deleteRecomment(_id: string): Promise<string>;
}
