import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { WordPressClientModule } from '../wordpress-client/wordpress-client.module';

@Module({
  imports: [WordPressClientModule],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService],
})
export class HomeModule {}
