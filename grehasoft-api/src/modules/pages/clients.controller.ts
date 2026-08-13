import { Controller, Get, NotFoundException } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  async getClients() {
    const data = await this.pagesService.getClients();
    if (!data) {
      throw new NotFoundException('Clients data not found.');
    }
    return data;
  }
}
