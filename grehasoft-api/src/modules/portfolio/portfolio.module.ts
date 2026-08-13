import { Module } from '@nestjs/common';
import { PortfolioController, ProjectGalleryController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { WordPressClientModule } from '../wordpress-client/wordpress-client.module';

@Module({
  imports: [WordPressClientModule],
  controllers: [PortfolioController, ProjectGalleryController],
  providers: [PortfolioService],
  exports: [PortfolioService],
})
export class PortfolioModule {}
