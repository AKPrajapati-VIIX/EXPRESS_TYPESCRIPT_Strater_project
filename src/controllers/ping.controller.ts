import  { NextFunction, Request,Response } from "express";
import fs from 'fs/promises';
  // for validation

    
    // =============Three types of the requests params concept =======================


    //===============request body==============
    // console.log("request body", req.body);  // serelize and deserialize the data and send it to the server
    // console.log("query params", req.query);
    // console.log("url params", req.params);

    
    // =========async await example defalut error handler================
    //     fs.readFile("sample",(err,data)=>{
    //     //     if(err){
    //     //         // console.log("error reading files",err);
    //     //         // next(err);  // this will go to the error handler middleware
    //     //         // res.status(500).send('Internal Server Error');  // this will send the error response to the client   


    //     //         //    throw new Error('something went wrong');   
    //     //     }

    //     //     console.log(data.toString());
    //     // })

    //     // //===============errorhandler internally express do==============
    //     // throw new Error('something went wrong');
    // }






//============== async await example with error handling ==============


import { AppError, InternalServerError } from "../utils/errors/app.error"; // import the custom error classi
    import { NotFoundError } from "../utils/errors/app.error"; // import the custom error classi
    export const pingHandler = async (req: Request, res: Response, next: NextFunction) => {
    // console.log("request body", req.body);  // serialize and deserialize the data and send it to the server
    //==========manually handle the error using try catch block ==============

    //===note::: after ver-5 without try catch it is working
    
     try {
        await fs.readFile("sample");
        res.status(200).json({
          message: 'pong',
          success: true,
        });
    }catch (error) {
        // ========error handler middleware will handle the error
            // const  appError: AppError = {
            //     message: 'Internal Server Error',
            //     status: 500,   
            // };

        
            throw new NotFoundError("File not found ");
        }
    }

    

    // throw new Error('something went wrong');

    // res.send('pong')
//     res.status(200).json({
//         message:'pong',
//         success:true
    // });
 