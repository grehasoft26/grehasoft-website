import { Module } from '@nestjs/common';
import { WordPressClientService } from './wordpress-client.service';
import { WordPressClientController } from './wordpress-client.controller';
import { CacheService } from './cache.service';

@Module({
  controllers: [WordPressClientController],
  providers: [WordPressClientService, CacheService],
  exports: [WordPressClientService, CacheService],
})
export class WordPressClientModule {}
