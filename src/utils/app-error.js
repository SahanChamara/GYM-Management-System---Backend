import { HTTPSTATUS } from "../config/http-config";
import { ErrorCodeEnum } from "../enums/error-code-enum";

export class AppError extends Error {
  statucCode;
  errorCode;

  constructor(message, statucCode, errorCode) {
    super(message);
    this.statucCode = statucCode;
    this.errorCode = errorCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpException extends AppError {
  constructor(statucCode, errorCode, message = "Http Exception Error") {
    super(message, statucCode, errorCode);
  }
}

export class InternalServerError extends AppError {
  constructor(errorCode, message = "Internal Server Error") {
    super(
      message,
      HTTPSTATUS.INTERNAL_SERVER_ERROR,
      errorCode ?? ErrorCodeEnum.INTERNAL_SERVER_ERROR
    );
  }
}

export class NotFoundException extends AppError {
  constructor(errorCode, message = "Resource Not Found") {
    super(
      message,
      HTTPSTATUS.NOT_FOUND,
      errorCode ?? ErrorCodeEnum.RESOURCE_NOT_FOUND
    );
  }
}

export class BadRequestException extends AppError {
  constructor(errorCode, message = "Bad Request") {
    super(
      HTTPSTATUS.BAD_REQUEST,
      errorCode ?? ErrorCodeEnum.VALIDATION_ERROR,
      message
    );
  }
}

export class UnauthorizedException extends AppError {
  constructor(errorCode, message = "Unauthorized Error") {
    super(
      message,
      HTTPSTATUS.UNAUTHORIZED,
      errorCode ?? ErrorCodeEnum.ACCESS_UNAUTHORIZED
    );
  }
}
