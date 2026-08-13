import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  async getServices() {
    return this.servicesService.getServices();
  }

  @Get(':slug')
  async getServiceBySlug(@Param('slug') slug: string) {
    const service = await this.servicesService.getServiceBySlug(slug);
    if (!service) {
      throw new NotFoundException(`Parent service '${slug}' not found.`);
    }
    return service;
  }

  @Get(':parent/:child')
  async getServiceChild(
    @Param('parent') parent: string,
    @Param('child') child: string,
  ) {
    const service = await this.servicesService.getServiceChild(parent, child);
    if (!service) {
      throw new NotFoundException(`Child service '${child}' under parent '${parent}' not found.`);
    }
    return service;
  }
}
