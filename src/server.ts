import express from 'express';
// import dotenv from 'dotenv';
import{serverConfig} from './config'; 
// import { pingHandler } from './controllers/ping.controller';
// import { createPingRouter } from './routers/ping.router';  // brute fores way
import pingRouter from './routers/v1/ping.router';
import v1Router from './routers/v1/index.routers';
import v2Router from './routers/v2/index.router';




const app = express();

// app.get('/ping', pingHandler); // routing line

/**
 * registering all the routers and their corresponding router with out app server objects.
 * 
 */
// app.use(pingRouter);

//==========parrel api moving===================
app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);
// createPingRouter(app);  // brute fores way


// loadEnv();

console.log("Enivironment variable loaded");

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on http://localhost: ${serverConfig.PORT}`);
    console.log("press ctrl+c to stop");
    
});