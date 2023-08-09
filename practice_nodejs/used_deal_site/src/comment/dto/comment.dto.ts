import { ObjectId } from "mongoose";

export class CommentDTO {
    writer: ObjectId;
    board_id: ObjectId;
    child_account: number;
    content: string;
    datetime: Date;
}