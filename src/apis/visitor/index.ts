import * as express from 'express';
import visitorCtrl from './visitor.ctrl';

const router: express.Router = express.Router();

router.get('/', visitorCtrl.getVisitor);
router.put('/', visitorCtrl.updateVisitor);

export default router;
