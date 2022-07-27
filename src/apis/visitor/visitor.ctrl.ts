import { Request, Response } from 'express';
import Visitor from '../../service/visitor';
import VisitorRepository from '../../model/visitorRepository';
import { ServerError } from '../../service/error';

const getVisitor = async (req: Request, res: Response) => {
  const header = new Visitor(new VisitorRepository(), req);

  const response = await header.getVisitorCnt();

  return res.status(200).json(response);
};

const updateVisitor = async (req: Request, res: Response) => {
  try {
    const visitor = new Visitor(new VisitorRepository(), req);

    const response = await visitor.updateVisitorCnt();

    if (response) return res.status(200).json({ msg: 'success' });
  } catch (error) {
    if (error instanceof ServerError)
      return res.status(500).json(error.message);
  }
};

export = {
  getVisitor,
  updateVisitor,
};
