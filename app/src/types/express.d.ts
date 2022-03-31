// import { ErrorResponse } from '../middlewares/error';

export {};

declare global {
  namespace Express {
    interface Response {
      err: unknown;
      errorResponse: ErrorResponse;
    }
  }
}
