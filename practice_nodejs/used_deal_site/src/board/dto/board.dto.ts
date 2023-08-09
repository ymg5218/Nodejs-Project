import { ObjectId } from "mongodb";

export class BoardDTO {
    title : string;
    content: string;
    writer_id : ObjectId; // 게시글 작성자 고유 키(오브젝트id)
    recommends : number;
    price : number;
}