import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get(':slug')
  async getPage(@Param('slug') slug: string) {
    const page = await this.pagesService.getPage(slug);
    if (!page) {
      throw new NotFoundException(`Page '${slug}' not found.`);
    }
    return page;
  }
}
