import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

export type ReCommentSchema = ReComment & Document;

@Schema()
export class ReComment {
  @Prop({type : ObjectId, required: true })
  writer: ObjectId;

  @Prop({type : ObjectId, required : true})
  board_id : ObjectId

  @Prop({ type : ObjectId, default: 0 })
  parentComment_id : ObjectId;

  @Prop({type : String, required: true })
  content: string;
  
  @Prop({type: Date, default: Date.now })
  datetime: Date;
}

export const ReCommentSchema = SchemaFactory.createForClass(ReComment);