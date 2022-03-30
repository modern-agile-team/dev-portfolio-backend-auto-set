import { NextFunction, Request, Response } from 'express';
import TachStackService from '../../services/TechStacks/TechStackService';
import TechStackRepository from '../../services/TechStacks/TechStackRepository';

export interface CtrlResponse extends Response {
  err: unknown;
}

const TeckStackController = {
  findAllByKeyword: async (req: Request, res: CtrlResponse, next: NextFunction) => {
    try {
      const teckStackService = new TachStackService(req, await TechStackRepository.build());
      await teckStackService.findAllByKeyword();

      res.status(200).json();
    } catch (err) {
      res.err = err;
      next();
    }
  },
};

export default TeckStackController;
