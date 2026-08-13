import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { ContactController } from './contact.controller';
import { ClientsController } from './clients.controller';
import { OurServicesController } from './our-services.controller';
import { PagesService } from './pages.service';
import { WordPressClientModule } from '../wordpress-client/wordpress-client.module';

@Module({
  imports: [WordPressClientModule],
  controllers: [
    PagesController,
    ContactController,
    ClientsController,
    OurServicesController,
  ],
  providers: [PagesService],
  exports: [PagesService],
})
export class PagesModule {}
