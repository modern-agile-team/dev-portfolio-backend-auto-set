import { Request, Response } from 'express';
import Visitor from '../../service/visitor';
import visitorRepository from '../../model/visitorRepository';

const getVisitors = async (req: Request, res: Response) => {
  const header = new Visitor(new visitorRepository(), req);

  const response = await header.getVisitors();

  return res.status(200).json(response);
};

export = {
  getVisitors,
};
