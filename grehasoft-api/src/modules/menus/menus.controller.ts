import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  /**
   * Serves the composite getMenuData payload expected by Next.js.
   */
  @Get()
  async getUnifiedMenus() {
    return this.menusService.getUnifiedMenuData();
  }

  /**
   * Serves isolated menu tree structures by name (e.g. primary-menu, footer-menu).
   */
  @Get(':name')
  async getMenu(@Param('name') name: string) {
    if (!name || (name !== 'primary-menu' && name !== 'footer-menu')) {
      throw new BadRequestException('Invalid menu name. Must be "primary-menu" or "footer-menu".');
    }
    return this.menusService.getMenuByName(name);
  }
}
