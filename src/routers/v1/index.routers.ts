import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import pingRouter from './ping.router';

const v1Router = express.Router();



v1Router.get('/ping' , pingRouter); //eg..= /ping/4/comments

export default v1Router;