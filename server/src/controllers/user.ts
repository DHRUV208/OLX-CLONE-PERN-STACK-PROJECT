import { NextFunction, Request, Response } from 'express';
// import { pool } from '../database';
// import { QueryResult } from 'pg';
// import { pool } from '../models/db/db';
import { User } from '../models/user';
import bcrypt from "bcryptjs";


// const USER: User[] = [];





export const getUsers = async (req: Request, res: Response) => {
    try {
        const user = new User({});
        const response = await user.getUsers()
        res.json(response);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    const user = new User({ id });
    await user.getUserById();
    
};

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    //hash password
    const salt = await bcrypt.genSalt(10);
    if (!salt) return res.status(400).json("error");

    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) return res.status(400).json("error");
    const user = new User({  email, hashedPassword });
    await user.create();
    res.json({
        message: 'User Added successfully',
        body: {
            user: {  email, hashedPassword }
        }
    })
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {  email } = req.body;
    const user = new User({  email, id });
    await user.update();
    res.json('User Updated Successfully');
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = new User({ id });
    user.delete();
   
    res.json(`User ${id} deleted Successfully`);
};


export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body
        // const user = await User.authenticate(email, password)
   
        
    } catch (error) {
        
    }
    return res.status(200).json({
       message: "Authorized"
   }) 
}  