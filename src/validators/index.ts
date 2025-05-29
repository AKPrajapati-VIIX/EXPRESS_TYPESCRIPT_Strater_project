import {NextFunction, Request, Response} from 'express';
// ===========ZOD library for validation layer of the request body===========
import { AnyZodObject } from 'zod';


/**
 * @param schema - Zod schema to validate the request body
 * @returns - middleware to validate the request body
 */




export const validateRequestBody= (schema: AnyZodObject) =>{
    return async (req:Request, res:Response, next:NextFunction) => {
        
        try{

            await schema.parseAsync(req.body);
            console.log("request body is valid");
            next();
        }
        catch(error){

            // console.log("request body is not valid");
            // return;
            res.status(400).json(
                {
                    message:"request body is not valid",
                    sucess:false,
                    error:error
                }
            )
        }  
    }
}

const validateRequestQuery= (schema: AnyZodObject) =>{
    return async (req:Request, res:Response, next:NextFunction) => {
        
        try{

            await schema.parseAsync(req.query);
            console.log("request query is valid");
            next();
        }
        catch(error){

            // console.log("request body is not valid");
            // return;
            res.status(400).json(
                {   
                    message:"request query is not valid",
                    sucess:false,
                    error:error
                }
            )
        }  
    }  
}

// genic function to validate any object using Zod schema
// this is not a good approach to use this way of validation then we use ZOD library for validation layer of the request body
const validateObject=(schema: AnyZodObject,object:any, next:NextFunction)=>{
    return async (req:Request, res:Response, next:NextFunction) => {
        
        try{

            await schema.parseAsync(object);
            console.log("object is valid");
            next();
        }
        catch(error){

            // console.log("request body is not valid");
            // return;
             res.status(400).json(
                {
                    message:"object is not valid",
                    sucess:false,
                    error:error
                }
            )
        }  
    }
}