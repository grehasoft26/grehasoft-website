import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { WordPressClientModule } from '../wordpress-client/wordpress-client.module';

@Module({
  imports: [WordPressClientModule],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
