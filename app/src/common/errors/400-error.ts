import { BasicError } from './BasicError';

export class ClientRequestError extends BasicError {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}

export class RequiredRequestError extends ClientRequestError {
  constructor(value: string) {
    super(`The ${value} is a required value you must enter`);
  }
}
