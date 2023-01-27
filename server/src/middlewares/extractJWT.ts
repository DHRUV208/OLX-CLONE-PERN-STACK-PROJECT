import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

//  validate
export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        
        
        
    } catch (error) {
        
    }
    return res.status(200).json({
       message: "Authorized"
   }) 
}   
// req.session
export const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, config.server.token.secret, (error, decoded) => {
            if (error) {
                return res.status(404).json({
                    message: error.message,
                    error
                })
            } else {
                res.locals.jwt = decoded;
                next();
            }
        })
    } else {
        return res.status(401).json({
            message: 'UNAUTHORIZED'
        })
    }
}