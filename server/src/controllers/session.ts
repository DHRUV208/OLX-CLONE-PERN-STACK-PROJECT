// import { Request, Response } from "express";
// import  {getUser}  from "./user";

// // LOGIN HANDLER
// export function createSessionHandler(req:Request, res:Response) {
//     const { email, password } = req.body;

//     const user = getUser(email);

//     if (!user || user.password!== password) {
//         return res.status(401).send('Invalid email or password')
//     }
// }