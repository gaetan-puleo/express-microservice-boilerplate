import { Router } from 'express';
import ArticleController from './controllers/articleController';

const router = Router();

router.post('/create', ArticleController.createOne);
router.get('/', ArticleController.getAll);
router.post('/', ArticleController.updateAll);
router.delete('/', ArticleController.deleteAll);
router.get('/many', ArticleController.getAll);
router.post('/many', ArticleController.updateMany);
router.delete('/many', ArticleController.deleteMany);
router.get('/:id', ArticleController.getOne);
router.post('/:id', ArticleController.updateOne);
router.delete('/:id', ArticleController.deleteOne);

export default router;
