//==========this not a good approach========

// import {Express} from 'express';
// import { pingHandler } from '../controllers/ping.controller';



// export function createPingRouter(app:Express) {
//     app.get('/ping', pingHandler); // routing line
// }



import express from 'express';
import { pingHandler } from '../controllers/ping.controller';
import { Request, Response, NextFunction } from 'express';


const pingRouter = express.Router();

pingRouter.get('/ping', pingHandler);  // routing line chain

export default pingRouter;