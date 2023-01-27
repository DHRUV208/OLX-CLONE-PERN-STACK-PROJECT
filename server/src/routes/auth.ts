import { Router, Request, Response, NextFunction } from "express";
import { signUp, signIn } from "../controllers/auth";
import { validateBody, schemas } from "../middlewares/validateBody";
import passport from "passport";
import "../middlewares/passport";
import { extractJWT } from "../middlewares/extractJWT";


const passportLocal = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err, user, message) => {
        if (err) {
            return res.status(400).json("error");
        }
        if (!user) {
            return res.status(400).json(message);
        }
        user.password
        next();
    })(req, res, next)
};

const router = Router();

router.post('/signup',validateBody(schemas.signUp), signUp)

router.post('/signin',   validateBody(schemas.signIn), passportLocal, signIn);

export default router;