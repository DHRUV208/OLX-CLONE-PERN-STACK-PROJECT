import express, {  Application } from 'express';
// import { json } from 'body-parser';
// import indexRoutes from './routes/index.ts';
// import todoRoutes from './routes/user.js';
import userRoutes from './routes/user';
import commodityRoutes from './routes/commodity';
import authRoutes from './routes/auth';


import { pool } from './models/db/db';

import cors from 'cors';
import { getUsers } from './controllers/user';
import router from './routes/user';

require('dotenv').config();


const app: Application = express();
// middlewares
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let port = process.env.PORT  ;

// app.use(json());
// app.use(todoRoutes);

// app.use('/todos', todoRoutes);
// router.get('/getusers', (req:Request,res: Response) => {
//     res.send(getUsers);

// });

// Routes
app.use('/user', userRoutes);
app.use('/auth',authRoutes);

app.use('/commodity',commodityRoutes);

// app.get('/login', (req, res) => {
//     // res.render('login.ejs');
// })


// app.get('/register', (req, res) => {
//     // res.render('register.ejs');
// })
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
});

pool.connect();