import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { HealthModule } from './modules/health/health.module';
import { WordPressClientModule } from './modules/wordpress-client/wordpress-client.module';
import { MenusModule } from './modules/menus/menus.module';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { ServicesModule } from './modules/services/services.module';
import { PagesModule } from './modules/pages/pages.module';

const imports: any[] = [
  // Global Configuration
  ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }),

  // Application Feature Modules
  HealthModule,
  WordPressClientModule,
  MenusModule,
  HomeModule,
  PortfolioModule,
  BlogsModule,
  ServicesModule,
  PagesModule,
];

// Conditionally mount TypeORM connection when DATABASE_ENABLED is true
if (process.env.DATABASE_ENABLED === 'true') {
  imports.push(TypeOrmModule.forRootAsync(typeOrmAsyncConfig));
}

@Module({
  imports,
})
export class AppModule {}
