//==========this not a good approach========

// import {Express} from 'express';
// import { pingHandler } from '../controllers/ping.controller';



// export function createPingRouter(app:Express) {
//     app.get('/ping', pingHandler); // routing line
// }



import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
// import { Request, Response, NextFunction } from 'express';


const pingRouter = express.Router();

pingRouter.get('/', pingHandler);

pingRouter.get('/health',(req,res)=>{
    res.status(200).send('ok');
});  // routing line chain

export default pingRouter;