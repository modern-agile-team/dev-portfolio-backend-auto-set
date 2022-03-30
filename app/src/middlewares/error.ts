import { NextFunction, Request } from 'express';
import { CtrlResponse } from '../apis/TechStacks/TechStackController';
import { RequiredRequestError } from '../common/errors/400-error';

type ErrorResponseType = {
  error: string;
  msg: string;
  code: number;
};

interface ErrorResponse extends CtrlResponse {
  errorResponse: ErrorResponseType;
}

export const error = (req: Request, res: ErrorResponse, next: NextFunction) => {
  const { err } = res;
  let errorResponse: ErrorResponseType = { error: 'Server Error', msg: 'Unknown Error', code: 500 };

  if (err instanceof RequiredRequestError) errorResponse = { error: err.name, msg: err.message, code: err.status };

  res.errorResponse = errorResponse;
  res.status(errorResponse.code).json(errorResponse);
};
