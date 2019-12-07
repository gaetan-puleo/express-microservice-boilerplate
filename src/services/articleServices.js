import mongoose from 'mongoose';

const { article } = mongoose.models;

export async function getAll() {
  return article.find().lean();
}
export async function getMany(filters) {
  return article.find(filters).lean();
}

export async function getOneById(id) {
  return article.findById(id).lean();
}

export async function createOne(fields) {
  return article.create(fields);
}

export async function updateOne(id, fields) {
  return article.findById(id).updateOne({}, fields).lean();
}

export async function updateMany(filters, fields) {
  return article.updateMany(filters, fields).lean();
}

export async function deleteAll() {
  return article.deleteAll({}).lean();
}

export async function deleteOneById(id) {
  return article.findByIdAndDelete(id).lean();
}

export async function deleteMany(filters) {
  return article.deleteMany(filters).lean();
}
