import { Controller, Get, Post, Body, Delete, Param,} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDTO } from './dto/comment.dto';
import { ReCommentDTO } from './dto/recomment.dto';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentService : CommentService
        ){}
    
    @Get('findAll')
    async findAll() {
        return await this.commentService.findAll();
    }

    @Get('findAll/recomment')
    async findAll_Re() {
        return await this.commentService.findAll_Re();
    }

    @Post('findAll/recomment')
    async findAll_ExistRe(@Body() parentComment_id : any) {
        return await this.commentService.findAll_ExistRe(parentComment_id);
    }

    @Post('findOne')
    async findOne(@Body() _id : string) {
        return await this.commentService.findOne(_id);
    }

    @Post('create')
    async createComment(@Body() comment : CommentDTO) {
        return await this.commentService.createComment(comment);
    }

    @Post('create/recomment')
    async createRecomment(@Body() recomment : ReCommentDTO) {
        return await this.commentService.createRecomment(recomment);
    }

    @Post('update')
    async updateComment(@Body() comment : any) {
        return await this.commentService.updateComment(comment);
    }

    @Post('update/recomment')
    async updateRecomment(@Body() recomment : any) {
        return await this.commentService.updateRecomment(recomment);
    }

    @Delete('delete/:_id')
    async deleteComment(@Param('_id') _id: string) {
        return await this.commentService.deleteComment(_id);
    }

    @Delete('delete/recomment/:_id')
    async deleteRecomment(@Param('_id') _id: string) {
        return await this.commentService.deleteRecomment(_id);
    }
}
