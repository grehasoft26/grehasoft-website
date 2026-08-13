import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
    const dbConfig = configService.get('database');
    return {
      type: 'mysql',
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.user,
      password: dbConfig.pass,
      database: dbConfig.name,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false, // Always false in production; manage via migrations
      logging: configService.get('nodeEnv') === 'development',
      autoLoadEntities: true,
    };
  },
};
