import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async getPosts(
    @Query('page') page?: string,
    @Query('per_page') perPage?: string,
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('categories') categories?: string,
  ) {
    const parsedPage = page ? parseInt(page, 10) : 1;
    const parsedLimit = perPage ? parseInt(perPage, 10) : 10;
    
    if (isNaN(parsedPage) || parsedPage < 1) {
      throw new BadRequestException('Invalid page query parameter.');
    }
    if (isNaN(parsedLimit) || parsedLimit < 1) {
      throw new BadRequestException('Invalid per_page query parameter.');
    }

    return this.blogsService.getPosts(
      parsedPage,
      parsedLimit,
      search || '',
      category || '',
      categories || '',
    );
  }

  @Get(':slug')
  async getPost(@Param('slug') slug: string) {
    if (!slug) {
      throw new BadRequestException('Invalid slug parameter.');
    }
    return this.blogsService.getPostBySlug(slug);
  }
}

@Controller('categories')
export class CategoriesController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async getCategories() {
    return this.blogsService.getCategories();
  }
}
