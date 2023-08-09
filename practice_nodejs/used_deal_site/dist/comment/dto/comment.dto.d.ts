import { ObjectId } from "mongoose";
export declare class CommentDTO {
    writer: ObjectId;
    board_id: ObjectId;
    child_account: number;
    content: string;
    datetime: Date;
}
