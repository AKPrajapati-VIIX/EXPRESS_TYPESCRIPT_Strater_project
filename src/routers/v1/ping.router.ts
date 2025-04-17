//==========this not a good approach========

// import {Express} from 'express';
// import { pingHandler } from '../controllers/ping.controller';



// export function createPingRouter(app:Express) {
//     app.get('/ping', pingHandler); // routing line
// }



import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import { validateRequestBody } from '../../validators';
// import { Request, Response, NextFunction } from 'express';
import { pingSchema } from '../../validators/ping.validator';


const pingRouter = express.Router();

// function checkBody(req: express.Request, res: express.Response, next: express.NextFunction):void{
    
//     if(typeof req.body.name!=="string"){
//         res.status(400).send('name must be a string');
//     }
// }

// pingRouter.get('/:user_id/comments', checkBody,pingHandler);



pingRouter.get('/',validateRequestBody(pingSchema), validateQueryParams(queryParamsSchema), pingHandler);

pingRouter.get('/health',(req,res)=>{
    res.status(200).send('ok');
});  // routing line chain

export default pingRouter;



/**
 * 
 */