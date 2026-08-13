import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = 'Internal server error';
    let details = null;

    if (exception instanceof HttpException) {
      const resContent: any = exception.getResponse();
      message = typeof resContent === 'string' ? resContent : resContent.message || exception.message;
      details = typeof resContent === 'object' ? resContent : null;
    } else if (exception instanceof Error) {
      // Redact detailed errors in production to avoid leaking secrets/internal paths
      if (process.env.NODE_ENV !== 'production') {
        message = exception.message;
        details = exception.stack;
      }
    }

    // Structured logging of exceptions
    this.logger.error(
      `[${request.method}] ${request.url} - Status: ${status} - Error: ${exception.message || exception}`,
      exception instanceof Error ? exception.stack : undefined,
    );

    response.status(status).json({
      success: false,
      statusCode: status,
      message: Array.isArray(message) ? message[0] : message,
      details: details,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
