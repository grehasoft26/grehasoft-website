import { Controller, Get, NotFoundException } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('our-services')
export class OurServicesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  async getOurServices() {
    const data = await this.pagesService.getOurServices();
    if (!data) {
      throw new NotFoundException('Our Services data not found.');
    }
    return data;
  }
}
