import { Request, Response } from 'express';
import TackStackService from '../../services/TeckStacks/TeckStackService';
import TeckStackRepository from '../../services/TeckStacks/TeckStackRepository';

const TeckStackController = {
  findAllByKeyword: async (req: Request, res: Response) => {
    try {
      const teckStackService = new TackStackService(req, await TeckStackRepository.build());
      await teckStackService.findAllByKeyword();

      return res.status(200).json();
    } catch (err) {
      if (err instanceof Error) return { success: false, msg: err.message };
      return {};
    }
  },
};

export default TeckStackController;
