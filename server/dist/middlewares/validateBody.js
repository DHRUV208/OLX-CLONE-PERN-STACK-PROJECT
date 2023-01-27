"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = exports.validateBody = void 0;
const joi_1 = __importDefault(require("joi"));
const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body);
        console.log(result);
        if (result.error) {
            return res.status(400).json(result);
        }
        next();
    };
};
exports.validateBody = validateBody;
exports.schemas = {
    signUp: joi_1.default.object().keys({
        // username: Joi.string().required().min(3).messages({
        //     'string.base': `"username" should be a type of 'text'`,
        //     'string.empty': `"username" cannot be an empty field`,
        //     'string.min': `"username" should have a minimum length of {3}`,
        //     'any.required': `"username" is a required field`
        // }),
        password: joi_1.default.string().required().min(6).messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'string.min': `"password" should have a minimum length of {6}`,
            'any.required': `"password" is a required field`
        }),
        email: joi_1.default.string().required().email().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            // 'string.min': `"email" should have a minimum length of {#limit}`,
            'any.required': `"email" is a required field`
        }),
    }),
    signIn: joi_1.default.object().keys({
        email: joi_1.default.string().required().email().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'any.required': `"email" is a required field`
        }),
        password: joi_1.default.string().required().min(6).messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'string.min': `"password" should have a minimum length of {6}`,
            'any.required': `"password" is a required field`
        }),
    })
};
//# sourceMappingURL=validateBody.js.map