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


function middleware1(req:Request, res: Response, next: NextFunction) {
    console.log('middleware 1');
    next();
}


function middleware2(req:Request, res: Response, next: NextFunction) {
    console.log('middleware 2');
    next();  // calling the next middleware
}


pingRouter.get('/ping', middleware1, middleware2, pingHandler);  // routing line chain

export default pingRouter;