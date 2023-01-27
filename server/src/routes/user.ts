
// import { signUp, signIn } from "../controllers/auth";
// import { validateBody, schemas } from "../middlewares/validateBody";
// import passport from "passport";
import "../middlewares/passport";

import { Router } from 'express';
// const router = Router();

import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user';


// const passportLocal = (req: Request, res: Response, next: NextFunction) => {
//     passport.authenticate('local', (err, user, message) => {
//         if (err) {
//             return res.status(400).json("error");
//         }
//         if (!user) {
//             return res.status(400).json(message);
//         }
//         next();
//     })(req, res, next)
// };
const router = Router();

// router.post('/signup', validateBody(schemas.signUp), signUp)

// router.post('/signin', validateBody(schemas.signIn), passportLocal, signIn);

router.get('/getusers', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser)
router.delete('/:id', deleteUser);

export default router; 
