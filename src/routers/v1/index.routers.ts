import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import pingRouter from './ping.router';

const v2Router = express.Router();



v2Router.get('/ping' , pingRouter);

export default v2Router;