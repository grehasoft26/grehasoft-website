import { Module } from '@nestjs/common';
import { PostsController, CategoriesController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { WordPressClientModule } from '../wordpress-client/wordpress-client.module';

@Module({
  imports: [WordPressClientModule],
  controllers: [PostsController, CategoriesController],
  providers: [BlogsService],
  exports: [BlogsService],
})
export class BlogsModule {}
