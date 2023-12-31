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
import { Board, BoardSchema } from './schema/board.schema';
import { Model, PaginateModel } from 'mongoose';
import { BoardDTO } from './dto/board.dto';
import { UserSchema } from 'src/user/schema/user.schema';
export declare class BoardService {
    private boardModel;
    private userModel;
    constructor(boardModel: PaginateModel<BoardSchema>, userModel: Model<UserSchema>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, BoardSchema> & Board & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findPagedAll(page: number, limit: number): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        sort: {
            datetime: number;
        };
        page: number;
        limit: number;
    }, BoardSchema> & Board & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findOne(_id: string): Promise<import("mongoose").Document<unknown, {}, BoardSchema> & Board & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createBoard(board: BoardDTO): Promise<import("mongoose").Document<unknown, {}, BoardSchema> & Board & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateBoard(board: any): Promise<{
        message: string;
        _board: import("mongoose").Document<unknown, {}, BoardSchema> & Board & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteBoard(_id: string): Promise<import("mongoose").Document<unknown, {}, BoardSchema> & Board & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
