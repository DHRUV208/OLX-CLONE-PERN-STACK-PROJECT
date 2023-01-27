"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommodity = exports.createCommodity = void 0;
// import { pool } from '../models/db/db';
const commodity_1 = require("../models/commodity");
const createCommodity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productname, price, description, current_owner } = req.body;
    const commodity = new commodity_1.Commodity({ productname, price, description, current_owner });
    yield commodity.create();
    res.json({
        message: 'Commodity Added successfully',
        body: {
            user: { productname, price, description, current_owner }
        }
    });
});
exports.createCommodity = createCommodity;
const getCommodity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commodity = new commodity_1.Commodity({});
        const resp = yield commodity.getCommodity();
        return res.json(resp);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getCommodity = getCommodity;
//# sourceMappingURL=commodity.js.map