import express, { Request, Response } from 'express';
const router = express.Router();
const Url = require('../models/urlModel');

const urlRoutes = () => {
  router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

  router.post('/create', async (req: Request, res: Response) => {
    const newShortUrl = await new Url({
      url: req.body.url,
      shortUrl: req.body.shortUrl,
    });
    try {
      await newShortUrl.save();
      res.status(201).json(newShortUrl);
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  });

  return router;
};

export default urlRoutes;
