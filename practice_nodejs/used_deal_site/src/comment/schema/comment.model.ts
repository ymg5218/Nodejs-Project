import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

export type CommentSchema = Comment & Document;

@Schema()
export class Comment {
  @Prop({type : ObjectId, required: true })
  writer: ObjectId;

  @Prop({type : ObjectId, required : true})
  board_id : ObjectId

  @Prop({ default: 0 })
  child_account : number;

  @Prop({type : String, required: true })
  content: string;
  
  @Prop({type: Date, default: Date.now })
  datetime: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);