import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import { errors } from 'celebrate';
import './initModels';
import expressOasGenerator from 'express-oas-generator';
import router from './router';


const app = express();

if (process.env.NODE_ENV !== 'production') {
  expressOasGenerator.handleResponses(app, {});
}
app.use(helmet());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/articles', router);

app.use(errors());

if (process.env.NODE_ENV !== 'production') {
  expressOasGenerator.handleRequests();
}
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
