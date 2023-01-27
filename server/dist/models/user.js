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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("./db/db");
class User {
    constructor({ id, email, hashedPassword }) {
        if (typeof id === 'number') {
            this.id = id;
        }
        // if (typeof name === 'string') {
        //     this.name = name;
        // }
        if (typeof email === 'string') {
            this.email = email;
        }
        if (typeof hashedPassword === 'string') {
            this.hashedPassword = hashedPassword;
        }
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!( /*this.name && */this.email && this.hashedPassword)) {
                throw new Error(' email or password not defined');
            }
            const response = yield db_1.pool.query('INSERT INTO users ( email, password) VALUES ($1, $2)', [this.email, this.hashedPassword]);
        });
    }
    getUserById() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(this.id)) {
                throw new Error('id is not defined');
            }
            const response = yield db_1.pool.query('SELECT * FROM users WHERE id = $1', [this.id]);
            return response.rows;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db_1.pool.query('SELECT * FROM users ORDER BY id ASC');
            return response.rows;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(this.email && this.id)) {
                throw new Error(' email or id not defined');
            }
            const response = yield db_1.pool.query('UPDATE users SET  email = $2 WHERE id = $3', [
                // this.name,
                this.email,
                this.id
            ]);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(this.id)) {
                throw new Error('id is not defined');
            }
            const response = yield db_1.pool.query('DELETE FROM users where id = $1', [
                this.id
            ]);
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map