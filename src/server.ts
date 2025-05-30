import express from 'express';
// import dotenv from 'dotenv';
import{serverConfig} from './config'; 
// import { pingHandler } from './controllers/ping.controller';
// import { createPingRouter } from './routers/ping.router';  // brute fores way
// import pingRouter from './routers/v1/ping.router';
import v1Router from './routers/v1/index.routers';
import v2Router from './routers/v2/index.router';
// import { url } from 'inspector';
// import { z } from 'zod';



const app = express();


// app.get('/ping', pingHandler); // routing line

/**
 * registering all the routers and their corresponding router with out app server objects.
 * 
 */
// app.use(pingRouter);


//========for read  request body and query params=============
// app.use(express.json());
// app.use(express.text()); 
// //========or============
// app.use(express.urlencoded());  // eg==%2c etc 


//==========parrel api moving===================
app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);
// createPingRouter(app);  // brute fores way







//====================// error handling middleware
import { genericErrorHandler } from './Middlewares/error-middleware'; // this will handle all the errors that are thrown in the application
// import { genericErrorHandler } from './Middlewares/error-middleware'; // this will handle all the errors that are thrown in the application
app.use(genericErrorHandler); // this will handle all the errors that are thrown in the application







// ===============================loadEnv();

console.log("Enivironment variable loaded");

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on http://localhost: ${serverConfig.PORT}`);
    console.log("press ctrl+c to stop");


    //===========for testing the zod validation layer================
// import { z } from 'zod';

    //=========== incoming object that i want to test for validation


    // const obj={
    //     name:"ankur",
    //     age:20
    // }

    // // const objSchema=z.object({
    // //     name:z.string(),
    // //     age:z.number().int().positive()
    // // })
    // const objSchema2=z.object({
    //     name:z.string(),
    //     age:z.number().int().positive()
    // })

    // console.log(objSchema2.parse(obj)); 
    // console.log(objSchema2.Parseasync(obj));  // returns a promise
     
});