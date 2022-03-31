import { NextFunction, Request, Response } from 'express';
import TechStackService from '../../services/TechStacks/TechStackService';
import TechStackRepository from '../../services/TechStacks/TechStackRepository';

const TeckStackController = {
  findAllByKeyword: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teckStackService = new TechStackService(req, await TechStackRepository.build());
      await teckStackService.findAllByKeyword();

      res.status(200).json();
    } catch (err) {
      res.err = err;
      next();
    }
  },
};

export default TeckStackController;
