import { ServerErrorType } from '~/types/error';

export class ServerError {
  static notFound(_reason: string) {
    return createError({
      status: ServerErrorType.NOT_FOUND,
      statusText: 'Not found',
      statusMessage: _reason,
    });
  }

  static unauthorized(_reason: string) {
    return createError({
      status: ServerErrorType.UNAUTHORIZED,
      statusText: 'Unauthorized',
      statusMessage: _reason,
    });
  }

  static forbidden(_reason: string) {
    return createError({
      status: ServerErrorType.FORBIDDEN,
      statusText: 'Forbidden',
      statusMessage: _reason,
    });
  }

  static internalServerError(_reason: string) {
    return createError({
      status: ServerErrorType.INTERNAL_SERVER_ERROR,
      statusText: 'Internal server error',
      statusMessage: _reason,
    });
  }

  static unavailable() {
    return createError({
      status: ServerErrorType.UNAVAILABLE,
      statusText: 'Service unavailable',
    });
  }

  static fromCode(code: number, _reason: string) {
    switch (code) {
      case 401:
        return ServerError.unauthorized(_reason);
      case 403:
        return ServerError.forbidden(_reason);
      case 404:
        return ServerError.notFound(_reason);
      default:
        return ServerError.internalServerError(_reason);
    }
  }
}
