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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
// import { pool } from '../database';
// import { QueryResult } from 'pg';
// import { pool } from '../models/db/db';
const user_1 = require("../models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// const USER: User[] = [];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.User({});
        const response = yield user.getUsers();
        res.json(response);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const user = new user_1.User({ id });
    yield user.getUserById();
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //hash password
    const salt = yield bcryptjs_1.default.genSalt(10);
    if (!salt)
        return res.status(400).json("error");
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    if (!hashedPassword)
        return res.status(400).json("error");
    const user = new user_1.User({ email, hashedPassword });
    yield user.create();
    res.json({
        message: 'User Added successfully',
        body: {
            user: { email, hashedPassword }
        }
    });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { email } = req.body;
    const user = new user_1.User({ email, id });
    yield user.update();
    res.json('User Updated Successfully');
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const user = new user_1.User({ id });
    user.delete();
    res.json(`User ${id} deleted Successfully`);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map