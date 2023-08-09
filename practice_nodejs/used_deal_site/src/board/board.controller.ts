import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardDTO } from './dto/board.dto';

@Controller('board')
export class BoardController {
    constructor(
        private readonly boardService : BoardService,
    ){}

    @Get('findAll')
    async getAll() {
        return await this.boardService.findAll();
    }

    @Post('findOne')
    async findOne(@Body() _id : string) {
        return await this.boardService.findOne(_id);
    }

    @Post('create')
    async createBoard(@Body() board: BoardDTO) {
        console.log(board);
        return await this.boardService.createBoard(board);
    }

    @Post('update')
    async updateBoard(@Body() board: any) {
        return await this.boardService.updateBoard(board);
    }

    @Delete('delete/:_id')
    async deleteUser(@Param('_id') _id: string) {
        const findForDelete = await this.boardService.findOne(_id)
        if (!findForDelete) {
            throw new NotFoundException('Board not found');
        }
        
        return await this.boardService.deleteBoard(_id);
    }
    
}
