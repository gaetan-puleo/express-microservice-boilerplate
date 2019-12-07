import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  id: {
    type: String,
    alias: '_id',
  },
  authorId: { type: String },
  title: String,
  url: String,
  content: String,
}, { timestamps: true });

mongoose.model('article', articleSchema);
