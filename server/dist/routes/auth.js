"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validateBody_1 = require("../middlewares/validateBody");
const passport_1 = __importDefault(require("passport"));
require("../middlewares/passport");
const extractJWT_1 = require("../middlewares/extractJWT");
const passportLocal = (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, message) => {
        if (err) {
            return res.status(400).json("error");
        }
        if (!user) {
            return res.status(400).json(message);
        }
        user.password;
        next();
    })(req, res, next);
};
const router = (0, express_1.Router)();
router.post('/signup', (0, validateBody_1.validateBody)(validateBody_1.schemas.signUp), auth_1.signUp);
router.post('/signin', extractJWT_1.extractJWT, (0, validateBody_1.validateBody)(validateBody_1.schemas.signIn), passportLocal, auth_1.signIn);
exports.default = router;
//# sourceMappingURL=auth.js.map