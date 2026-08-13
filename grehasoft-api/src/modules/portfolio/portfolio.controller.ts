import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  async getPortfolio() {
    return this.portfolioService.getPortfolioProjects();
  }

  @Get('categories')
  async getCategories() {
    return this.portfolioService.getPortfolioCategories();
  }

  @Get(':slug')
  async getProject(@Param('slug') slug: string) {
    if (!slug) {
      throw new BadRequestException('Invalid slug parameter.');
    }
    return this.portfolioService.getPortfolioProjectBySlug(slug);
  }
}

@Controller('project-gallery')
export class ProjectGalleryController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  async getGallery() {
    return this.portfolioService.getProjectGallery();
  }
}
