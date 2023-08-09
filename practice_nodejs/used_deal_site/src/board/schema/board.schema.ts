import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Document, SchemaOptions } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type BoardSchema = Board & Document;


@Schema()
export class Board extends Document {
  @Prop({ required : true })
  title : string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  datetime: Date;

  @Prop({ required: true })
  writer_id: ObjectId;

  @Prop({ required: true})
  writer_nickname : string;

  @Prop({ default: 0 })
  recommends: number;

  @Prop({ required: true })
  price: number;
}

const BoardSchema = SchemaFactory.createForClass(Board);
BoardSchema.plugin(mongoosePaginate);
export 