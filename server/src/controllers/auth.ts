import { Request, Response, NextFunction } from "express";
import { pool } from "../models/db/db";
// import jwt from "jsonwebtoken";
// import { signJWT } from "../utils/signJWT";
import bcrypt from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {

    const {  password, email } = req.body;


    const salt = await bcrypt.genSalt(10);
    if (!salt) return res.status(400).json("error");

    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) return res.status(400).json("error");

    const query = "INSERT INTO users ( password, email) VALUES ($1, $2);";
    const data = [ hashedPassword, email];

    try {
        await pool.query(query, data);
        return res.status(200).json("ok");
    } catch (err) {
       
        if (err) {
            return res.status(400).json("email arleady exists")
        }
        return res.status(400).json("unknown error");
    }


    // const user = User.build({
    //     email, 
    //     password
    // })

     
}

export const signIn = async (req: Request, res: Response) => {
//     const {  email, password} = req.body;
//    if(email === '' && password === ''){}

    return res.json("ok ! Logged in Successfully");
}

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body
        
        
    } catch (error) {
        
    }
    return res.status(200).json({
       message: "Authorized"
   }) 
}  