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


//=============for valedation layer of the request body==============
// =====but it is not good approach to use this way of validation then we use ZOD library for validation layer of the request body========

// function checkBody(req: express.Request, res: express.Response, next: express.NextFunction):void{
    
//     if(typeof req.body.name!=="string"){
//         res.status(400).send('name must be a string');
//     }
// }

// pingRouter.get('/:user_id/comments', checkBody,pingHandler);



pingRouter.get('/',validateRequestBody(userSchema), pingHandler);  // TODO :resole this ts complition issue
// routing line
pingRouter.get('/',validateRequestBody(pingSchema), pingHandler);  // routing line

pingRouter.get('/health',(req,res)=>{
    res.status(200).send('ok');
});  // routing line chain

export default pingRouter;


/**
 * 
 */