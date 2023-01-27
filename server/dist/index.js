"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { json } from 'body-parser';
// import indexRoutes from './routes/index.ts';
// import todoRoutes from './routes/user.js';
const user_1 = __importDefault(require("./routes/user"));
const commodity_1 = __importDefault(require("./routes/commodity"));
const auth_1 = __importDefault(require("./routes/auth"));
const db_1 = require("./models/db/db");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
let port = process.env.PORT;
// app.use(json());
// app.use(todoRoutes);
// app.use('/todos', todoRoutes);
// router.get('/getusers', (req:Request,res: Response) => {
//     res.send(getUsers);
// });
// Routes
app.use('/user', user_1.default);
app.use('/auth', auth_1.default);
app.use('/commodity', commodity_1.default);
// app.get('/login', (req, res) => {
//     // res.render('login.ejs');
// })
// app.get('/register', (req, res) => {
//     // res.render('register.ejs');
// })
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
db_1.pool.connect();
//# sourceMappingURL=index.js.map