import { BasicError } from './BasicError';

export class NotFoundError extends BasicError {
  status: number;

  constructor(value: string) {
    super(`존재하지 않는 값에 접근했습니다 : ${value}`);
    this.status = 404;
  }
}
