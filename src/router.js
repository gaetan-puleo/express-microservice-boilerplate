import { Router } from 'express';
import celebrate from 'celebrate';
import ArticleController from './controllers/articleController';
import * as validate from './validations/articleSchemas';

const router = Router();

router.post('/create', ArticleController.createOne);
router.get('/', ArticleController.getAll);
router.post('/', ArticleController.updateAll);
router.delete('/', ArticleController.deleteAll);
router.get('/many', ArticleController.getAll);
router.post('/many', ArticleController.updateMany);
router.delete('/many', ArticleController.deleteMany);
router.get('/:id', celebrate({
  params: validate.getOne,
}), ArticleController.getOne);
router.post('/:id', ArticleController.updateOne);
router.delete('/:id', ArticleController.deleteOne);

export default router;
