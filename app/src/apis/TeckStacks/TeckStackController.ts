import { Request, Response } from 'express';
import TackStackService from '../../services/TeckStacks/TeckStackService';
import TeckStackRepository from '../../services/TeckStacks/TeckStackRepository';

interface iResponse {
  // success
  // msg
  //
}

const TeckStackController = {
  findAllByKeyword: async (req: Request, res: Response) => {
    const teckStackService = new TackStackService(req, new TeckStackRepository());
    const response = await teckStackService.findAllByKeyword();

    return res.status(200).json();
  },
};

export default TeckStackController;
