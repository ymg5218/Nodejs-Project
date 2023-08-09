import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://yeommingyu0106:aowlrrkawk99@cluster0.tmqnpye.mongodb.net/blog",
    ),
    MongooseModule.forFeature([{ name : Blog.name, schema: BlogSchema}]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogMongoRepository],
})
export class AppModule {}
