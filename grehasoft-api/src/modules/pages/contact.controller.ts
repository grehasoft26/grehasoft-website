import { Controller, Get, NotFoundException } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  async getContact() {
    const data = await this.pagesService.getContact();
    if (!data) {
      throw new NotFoundException('Contact data not found.');
    }
    return data;
  }
}
