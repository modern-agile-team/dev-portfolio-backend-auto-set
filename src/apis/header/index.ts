import * as express from 'express';
import headerCtrl from './header.ctrl';
const router: express.Router = express.Router();

router.get('/', headerCtrl.getHeader);
export default router;
