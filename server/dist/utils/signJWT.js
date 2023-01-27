"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const signJWT = (user, callback) => {
    const timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(config_1.config.server.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);
    try {
        jsonwebtoken_1.default.sign({
            email: user.email
        }, config_1.config.server.token.secret, {
            issuer: config_1.config.server.token.issuer,
            algorithm: 'HS256',
            expiresIn: expirationTimeInSeconds
        }, (error, token) => {
            if (error) {
                callback(error, null);
            }
            else if (token) {
                callback(null, token);
            }
        });
    }
    catch (error) {
        // message: error.message,
        //     error
        // callback(error, null);
    }
};
exports.signJWT = signJWT;
//# sourceMappingURL=signJWT.js.map