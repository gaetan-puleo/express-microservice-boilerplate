import asyncHandler from 'express-async-handler';
import * as services from '../services/articleServices';

const ArticleController = {
  getAll: asyncHandler(async (req, res) => {
    const articles = await services.getAll();
    return res.json(articles);
  }),
  getOne: asyncHandler(async (req, res) => {
    const article = await services.getOneById(req.param.id);
    return res.json(article);
  }),
  getMany: asyncHandler(async (req, res) => {
    const articles = await services.getMany(req.filters);
    return res.json(articles);
  }),
  createOne: asyncHandler(async (req, res) => {
    const article = await services.createOne(req.body);
    return res.json(article);
  }),
  updateOne: asyncHandler(async (req, res) => {
    const updated = await services.updateOne(req.param.id, req.body);
    return res.json(updated);
  }),
  updateMany: asyncHandler(async (req, res) => {
    const updated = await services.updateMany(req.body.filters, req.body.fields);
    return res.json(updated);
  }),
  updateAll: asyncHandler(async (req, res) => {
    const updated = await services.updateMany({}, req.body.fields);
    return res.json(updated);
  }),
  deleteOne: asyncHandler(async (req, res) => {
    const deleted = await services.deleteOneById(req.param.id);
    return res.json(deleted);
  }),
  deleteMany: asyncHandler(async (req, res) => {
    const deleted = await services.deleteMany(req.body.filters);
    return res.json(deleted);
  }),
  deleteAll: asyncHandler(async (req, res) => {
    const deleted = await services.deleteAll();
    return res.json(deleted);
  }),
};

export default ArticleController;
