import Joi, { Schema } from "joi";
import { NextFunction, Request, Response } from "express";

export const validateBody = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);
        console.log(result);
        
        if (result.error) {
            return res.status(400).json(result);
        } 
        next();
    
    
    }
}

export const schemas = {
    signUp: Joi.object().keys({
        // username: Joi.string().required().min(3).messages({
        //     'string.base': `"username" should be a type of 'text'`,
        //     'string.empty': `"username" cannot be an empty field`,
        //     'string.min': `"username" should have a minimum length of {3}`,
        //     'any.required': `"username" is a required field`
        // }),
        password: Joi.string().required().min(6).messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'string.min': `"password" should have a minimum length of {6}`,
            'any.required': `"password" is a required field`
        }),
        email: Joi.string().required().email().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            // 'string.min': `"email" should have a minimum length of {#limit}`,
            'any.required': `"email" is a required field`
        }),
    }),
    signIn: Joi.object().keys({
        email: Joi.string().required().email().messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'any.required': `"email" is a required field`

        }),
        password: Joi.string().required().min(6).messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'string.min': `"password" should have a minimum length of {6}`,
            'any.required': `"password" is a required field`
        }),
    })
}

