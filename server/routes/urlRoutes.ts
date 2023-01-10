import express, { Request, Response } from 'express';
const router = express.Router();
const Url = require('../models/urlModel');
import { Error } from 'mongoose';

const urlRoutes = () => {
  router.get('/', (req: Request, res: Response) => {
    Url.find(
      {},
      (err: Error, urls: { _id: string; url: string; shortUrl: string }) => {
        if (err) {
          console.log(err);
        } else {
          res.json(urls);
        }
      }
    );
  });

  router.post('/', async (req: Request, res: Response) => {
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

  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const deletedUrl = await Url.findByIdAndDelete(req.params.id);
    } catch (err: any) {
      res.status(400).json(err.message);
    }
  });

  return router;
};

export default urlRoutes;
