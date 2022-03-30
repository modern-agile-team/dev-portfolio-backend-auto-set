import { Request, Response } from 'express';
import TackStackService from '../../services/TeckStacks/TeckStackService';
import TeckStackRepository from '../../services/TeckStacks/TeckStackRepository';
import { RequiredRequestError } from '../../common/errors/400-error';

const TeckStackController = {
  findAllByKeyword: async (req: Request, res: Response) => {
    try {
      const teckStackService = new TackStackService(req, await TeckStackRepository.build());
      await teckStackService.findAllByKeyword();

      return res.status(200).json();
    } catch (err) {
      if (err instanceof RequiredRequestError) return { error: err.name, msg: err.message, code: err.status };
      return {};
    }
  },
};

export default TeckStackController;
