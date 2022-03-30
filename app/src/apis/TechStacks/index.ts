import * as express from 'express';
import { error } from '../../middlewares/error';
import TechStackController from './TechStackController';

const router: express.Router = express.Router();
const { findAllByKeyword } = TechStackController;

router.get('/tech-stack', findAllByKeyword, error);

export default router;
