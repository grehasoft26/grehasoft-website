import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { WordPressClientModule } from '../wordpress-client/wordpress-client.module';

@Module({
  imports: [WordPressClientModule],
  controllers: [MenusController],
  providers: [MenusService],
  exports: [MenusService],
})
export class MenusModule {}
