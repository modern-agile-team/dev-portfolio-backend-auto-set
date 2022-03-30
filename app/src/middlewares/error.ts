import { NextFunction, Request, Response } from 'express';
import { RequiredRequestError } from '../common/errors/400-error';

export type ErrorResponse = {
  error: string;
  msg: string;
  code: number;
};

export const error = (req: Request, res: Response, next: NextFunction) => {
  console.log('next로 넘어왔음');
  try {
    const { err } = res;
    let errorResponse: ErrorResponse = { error: 'Server Error', msg: 'Unknown Error', code: 500 };

    if (err instanceof RequiredRequestError) errorResponse = { error: err.name, msg: err.message, code: err.status };

    res.errorResponse = errorResponse;
    res.status(errorResponse.code).json(errorResponse);
  } catch (e) {
    console.log('에러 발생');
    console.log(e);
  }
};
