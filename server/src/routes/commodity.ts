import {Router} from "express";
// const { signup, signin } = require("../controller/user");
import { getCommodity, createCommodity } from "../controllers/commodity";
const router = Router();

router.get('/', getCommodity);

router.post('/', createCommodity);  

export default router; 