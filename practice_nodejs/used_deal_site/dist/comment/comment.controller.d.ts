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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { CommentService } from './comment.service';
import { CommentDTO } from './dto/comment.dto';
import { ReCommentDTO } from './dto/recomment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/comment.model").CommentSchema> & import("./schema/comment.model").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll_Re(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/recomment.model").ReCommentSchema> & import("./schema/recomment.model").ReComment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll_ExistRe(parentComment_id: any): Promise<(import("mongoose").Document<unknown, {}, import("./schema/recomment.model").ReCommentSchema> & import("./schema/recomment.model").ReComment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(_id: string): Promise<string>;
    createComment(comment: CommentDTO): Promise<import("mongoose").Document<unknown, {}, import("./schema/comment.model").CommentSchema> & import("./schema/comment.model").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createRecomment(recomment: ReCommentDTO): Promise<string>;
    updateComment(comment: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/comment.model").CommentSchema> & import("./schema/comment.model").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateRecomment(recomment: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/recomment.model").ReCommentSchema> & import("./schema/recomment.model").ReComment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteComment(_id: string): Promise<string>;
    deleteRecomment(_id: string): Promise<string>;
}
