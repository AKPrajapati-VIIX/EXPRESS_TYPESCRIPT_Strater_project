import { NextFunction,Request,Response } from "express";
import { AppError } from "../utils/errors/app.error";   

export const genericErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {

    console.log("Error occurred:", err);
    // Log the error details for debugging
    res.status(err.status).json({
        message: 'Internal Server Error',
        success: false,
        msg: err.message || 'An unexpected error occurred'
    });
};