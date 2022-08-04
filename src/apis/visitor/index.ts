import * as express from 'express';
import visitorCtrl from './visitor.ctrl';

const router: express.Router = express.Router();

router.get('/', visitorCtrl.getVisitor);
router.put('/', visitorCtrl.updateVisitor);

router.post('/comment', visitorCtrl.createVisitComment);
router.patch('/comment/:id', visitorCtrl.updateVisitCommentById);
export default router;
