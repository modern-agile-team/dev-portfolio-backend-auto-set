import { NextFunction, Request, Response } from 'express';
import TachStackService from '../../services/TechStacks/TechStackService';
import TechStackRepository from '../../services/TechStacks/TechStackRepository';

const TeckStackController = {
  findAllByKeyword: async (req: Request, res: Response, next: NextFunction) => {
    console.log(1);
    try {
      const teckStackService = new TachStackService(req, await TechStackRepository.build());
      console.log(2);
      await teckStackService.findAllByKeyword();
      console.log(3);
      res.status(200).json();
    } catch (err) {
      res.err = err;
      next();
    }
  },
};

export default TeckStackController;
