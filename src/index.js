import express from 'express';
import mongoose from 'mongoose';
import './initModels';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import { errors } from 'celebrate';
import router from './router';

const app = express();

app.use(helmet());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', router);
app.user(errors());
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
