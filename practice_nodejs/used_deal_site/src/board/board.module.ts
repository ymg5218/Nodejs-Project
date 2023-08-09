import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { BoardSchema } from './schema/board.schema';
import { BoardDTO } from './dto/board.dto';
import { CommentModule } from 'src/comment/comment.module';
import { UserSchema } from 'src/user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name : 'Board', schema : BoardSchema},
      { name : 'User' , schema : UserSchema},
    ]),
    UserModule,
    CommentModule,
  ],
  providers: [BoardService, BoardDTO],
  controllers: [BoardController]
})
export class BoardModule {}
