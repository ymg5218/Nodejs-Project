import { ObjectId } from "mongoose";
export declare class ReCommentDTO {
    writer: ObjectId;
    board_id: ObjectId;
    parentComment_id: ObjectId;
    content: string;
    datetime: Date;
}
