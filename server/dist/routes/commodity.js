"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const { signup, signin } = require("../controller/user");
const commodity_1 = require("../controllers/commodity");
const router = (0, express_1.Router)();
router.get('/', commodity_1.getCommodity);
router.post('/', commodity_1.createCommodity);
exports.default = router;
//# sourceMappingURL=commodity.js.map