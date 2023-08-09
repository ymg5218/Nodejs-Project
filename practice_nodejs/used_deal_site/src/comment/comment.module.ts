import { Module, forwardRef } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schema/comment.model';
import { UserModule } from 'src/user/user.module';
import { BoardModule } from 'src/board/board.module';
import { UserSchema } from 'src/user/schema/user.schema';
import { ReCommentSchema } from './schema/recomment.model';
import { BoardSchema } from 'src/board/schema/board.schema';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name : 'Comment', schema : CommentSchema},
      { name : 'ReComment', schema : ReCommentSchema},
      { name : 'User' , schema : UserSchema},
      { name : 'Board' , schema : BoardSchema}
    ]),
    UserModule,
    forwardRef(() => BoardModule),
  ],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
