require('dotenv').config();
import express, { Express, Request, Response } from 'express';
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
import urlRoutes from './routes/urlRoutes';
import cors from 'cors';
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
})();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello You!');
});

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});

app.use(cors());
app.use(express.json());
app.use('/api/url', urlRoutes());
