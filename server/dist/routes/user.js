"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { signUp, signIn } from "../controllers/auth";
// import { validateBody, schemas } from "../middlewares/validateBody";
// import passport from "passport";
require("../middlewares/passport");
const express_1 = require("express");
// const router = Router();
const user_1 = require("../controllers/user");
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
const router = (0, express_1.Router)();
// router.post('/signup', validateBody(schemas.signUp), signUp)
// router.post('/signin', validateBody(schemas.signIn), passportLocal, signIn);
router.get('/getusers', user_1.getUsers);
router.get('/:id', user_1.getUserById);
router.post('/', user_1.createUser);
router.put('/:id', user_1.updateUser);
router.delete('/:id', user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map