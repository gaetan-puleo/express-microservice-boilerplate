import express from 'express';
import mongoose from 'mongoose';
import './initModels';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import router from './router';

const app = express();

app.use(helmet());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', router);

mongoose.connect(process.env.DB_PATH, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, () => {
    console.log(`Listen to port ${process.env.PORT}`);
  });
}

export default app;
