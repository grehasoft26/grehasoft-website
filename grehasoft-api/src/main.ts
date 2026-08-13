import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
 const port = Number(process.env.PORT) || 3001;
  const nodeEnv = configService.get<string>('nodeEnv') || 'development';
  const corsOrigins = configService.get<string | string[]>('corsOrigins') || '*';

  // Global Prefix & API Versioning
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Global Middlewares (Security, Validation, CORS)
  app.use(helmet());
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
  });

  // Global Pipes, Filters, and Interceptors
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );

  // Listen
 await app.listen(port, '0.0.0.0');
  logger.log(`=======================================================`);
 logger.log(`  Grehasoft NestJS API running on: http://0.0.0.0:${port}/api/v1`);
  logger.log(`  Current environment: ${nodeEnv}`);
  logger.log(`  Configured CORS origins: ${JSON.stringify(corsOrigins)}`);
  logger.log(`=======================================================`);
}

bootstrap();
