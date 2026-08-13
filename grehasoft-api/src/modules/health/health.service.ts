import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface HealthStatus {
  status: string;
  env: string;
  uptime: number;
  memoryUsage: {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
  };
  timestamp: string;
}

@Injectable()
export class HealthService {
  constructor(private readonly configService: ConfigService) {}

  getHealthInfo(): HealthStatus {
    return {
      status: 'ok',
      env: this.configService.get<string>('nodeEnv') || 'development',
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      timestamp: new Date().toISOString(),
    };
  }
}
