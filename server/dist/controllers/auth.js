"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.signIn = exports.signUp = void 0;
const db_1 = require("../models/db/db");
// import jwt from "jsonwebtoken";
// import { signJWT } from "../utils/signJWT";
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    const salt = yield bcryptjs_1.default.genSalt(10);
    if (!salt)
        return res.status(400).json("error");
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    if (!hashedPassword)
        return res.status(400).json("error");
    const query = "INSERT INTO users ( password, email) VALUES ($1, $2);";
    const data = [hashedPassword, email];
    try {
        yield db_1.pool.query(query, data);
        return res.status(200).json("ok");
    }
    catch (err) {
        if (err) {
            return res.status(400).json("email arleady exists");
        }
        return res.status(400).json("unknown error");
    }
    // const user = User.build({
    //     email, 
    //     password
    // })
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //     const {  email, password} = req.body;
    //    if(email === '' && password === ''){}
    return res.json("ok ! Logged in Successfully");
});
exports.signIn = signIn;
const validateToken = (req, res, next) => {
    return res.status(200).json({
        message: "Authorized"
    });
};
exports.validateToken = validateToken;
//# sourceMappingURL=auth.js.map