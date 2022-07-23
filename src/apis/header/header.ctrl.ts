import { Request, Response } from 'express';
import Header from '../../service/header';
import HeaderRepository from '../../model/headerRepository';

const getHeader = async (req: Request, res: Response) => {
  const header = new Header(new HeaderRepository(), req);

  const response = await header.getHeader();

  return res.status(200).json(response);
};

export = {
  getHeader,
};
