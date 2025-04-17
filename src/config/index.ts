// this file contains all the basic configuration logic for the app server to work

import dotenv from 'dotenv';

type ServerConfig={
    PORT: number
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * loads all the environment variable from .env file
 * and logs that enivironment variable has been loaded.
 */
/*******  a8cd2f6c-e51c-4051-b018-b72c8e7bb0a1  *******/
function loadEnv(){
    dotenv.config();
    console.log("Enivironment variable loaded");
}

loadEnv();


export const serverConfig: ServerConfig={
    PORT: Number(process.env.PORT) || 8080
};