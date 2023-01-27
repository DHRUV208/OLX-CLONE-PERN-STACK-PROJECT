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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const db_1 = require("../models/db/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: "email",
    passwordField: "password",
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = "SELECT id, email, password FROM users WHERE email = $1";
        const data = [email];
        const { rows } = yield db_1.pool.query(query, data);
        // console.log(rows);
        if (rows.length === 0) {
            return done(null, false, { message: "User does not exists" });
        }
        // const hashedPassword = rows[0].password;
        console.log(password);
        console.log(rows[0].password);
        const passwordMatch = yield bcryptjs_1.default.compare(password, rows[0].password);
        if (!passwordMatch) {
            return done(null, false, { message: "Wrong password" });
        }
        // 
        return done(null, rows[0]);
    }
    catch (err) {
        //  console.log("yes ye idhar aa raha h ");
        return done(err);
    }
})));
//# sourceMappingURL=passport.js.map