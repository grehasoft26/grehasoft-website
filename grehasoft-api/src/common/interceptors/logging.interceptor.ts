import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const { method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const response = ctx.getResponse();
          const statusCode = response.statusCode;
          const delay = Date.now() - now;
          this.logger.log(
            `[${method}] ${originalUrl} ${statusCode} - ${delay}ms [${userAgent.slice(0, 40)}]`,
          );
        },
        error: (error) => {
          const delay = Date.now() - now;
          this.logger.warn(
            `[${method}] ${originalUrl} FAILED - ${delay}ms: ${error.message}`,
          );
        },
      }),
    );
  }
}
