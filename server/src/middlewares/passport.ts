import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {pool} from "../models/db/db";
import bcrypt from "bcryptjs";



passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
}, async (email: any, password: any, done: any) => {
    try {
        
        const query = "SELECT id, email, password FROM users WHERE email = $1";
        const data = [email];

        const { rows } = await pool.query(query, data);
        // console.log(rows);
         
        if (rows.length === 0) {
            return done(null, false, { message: "User does not exists" });
        }
        // const hashedPassword = rows[0].password;
        console.log(password);
        console.log(rows[0].password);
        
        
        const passwordMatch = await bcrypt.compare(password, rows[0].password);

        if (!passwordMatch) {
            return done(null, false, { message: "Wrong password" });
        }

        // 

        return done(null, rows[0]);
    } catch (err) {
        //  console.log("yes ye idhar aa raha h ");
        return done(err);
    }
}))
