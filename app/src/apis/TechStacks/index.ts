import * as express from 'express';
import TechStackController from './TechStackController';

const router: express.Router = express.Router();
const { findAllByKeyword } = TechStackController;

router.get('/tech-stack', findAllByKeyword);

export default router;
