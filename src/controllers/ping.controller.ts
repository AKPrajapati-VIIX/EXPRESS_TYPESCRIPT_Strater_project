import { Request, Response } from 'express';

export const pingHandler = (req: Request, res: Response) => {

    
    // Three types of the requests params concept =======================
    // console.log("request body", req.body);
    // console.log("query params", req.query);
    // console.log("url params", req.params);



    res.send('pong')
};