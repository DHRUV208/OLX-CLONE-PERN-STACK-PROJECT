import jwt from 'jsonwebtoken';
import {config} from '../config/config';
import { User } from '../models/user';

export const signJWT = (user: User, callback: (error: Error | null, token: string | null) => void): void => {
    const timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(config.server.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);
    
    try {
        jwt.sign({
            email: user.email
        },
            config.server.token.secret,
            {
                issuer: config.server.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
            }
        })
    } catch (error) {
        // message: error.message,
        //     error
        // callback(error, null);
    }
    
}