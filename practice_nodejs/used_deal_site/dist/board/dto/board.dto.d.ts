import { ObjectId } from "mongodb";
export declare class BoardDTO {
    title: string;
    content: string;
    writer_id: ObjectId;
    recommends: number;
    price: number;
}
