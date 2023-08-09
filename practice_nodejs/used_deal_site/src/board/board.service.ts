import { Injectable } from '@nestjs/common';
import { Board, BoardSchema } from './schema/board.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardDTO } from './dto/board.dto';
import { UserService } from 'src/user/user.service';
import { ObjectId } from 'mongodb';
import { User, UserSchema } from 'src/user/schema/user.schema';

@Injectable()
export class BoardService {
    constructor(
        @InjectModel(Board.name) private boardModel: Model<BoardSchema>,
        @InjectModel(User.name) private userModel: Model<UserSchema>
        ){}

    async findAll() {
        return this.boardModel.find();
    }

    async findPagedAll(condition: string, page: number, limit: number) {
        return this.boardModel.paginate(
            { fieldName : condition},
            {
                sort : {
                    createdAt : -1
                },
                limit,
                page,
            }
        )
    }

    async findOne(_id : string) {
        const _board = await this.boardModel.findOne({_id});
        return _board;
    }

    async createBoard(board : BoardDTO) {
        const writer = await this.userModel.findOne(new ObjectId(board.writer_id));
        return await this.boardModel.create({
            title : board.title,
            content : board.content,
            writer_id : board.writer_id,
            writer_nickname : writer.nickname,
            price : board.price
        });
    }

    async updateBoard(board : any) {
        const {_id, title, content, price } = board;
        const _board = await this.boardModel.findOne({_id});
        
        _board.title = title;
        _board.content = content;
        _board.datetime = new Date();
        _board.price = price;

        _board.save();

        return {message:"수정을 성공하였습니다",_board};
    }
    
    async deleteBoard(_id: string) {
        return await this.boardModel.findByIdAndDelete({_id}).exec();
    }

}
