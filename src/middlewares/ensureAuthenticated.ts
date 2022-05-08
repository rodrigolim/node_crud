import { NextFunction, request, Request, Response } from "express"
import jwt from "jsonwebtoken"
import 'dotenv/config'

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({message: "Token is missing"})
    }

    //Bearer asdsadsadasdadsadadacdasdas
    const [, token] = authToken.split(" ");

    try {
        jwt.verify(token, process.env.SECRET)

        return next();

    } catch (error) {
        if (error instanceof Error){
            return res.status(401).json({message: "Token invalid"}) 
        }   
    }
    
}