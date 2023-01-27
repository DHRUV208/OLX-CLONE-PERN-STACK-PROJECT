"use strict";
// SCHEMA
// export const Ads: string {
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
exports.Commodity = void 0;
// }
const db_1 = require("./db/db");
class Commodity {
    constructor({ id, productname, price, description, current_owner }) {
        if (typeof id === 'number') {
            this.id = id;
        }
        if (typeof productname === 'string') {
            this.productname = productname;
        }
        if (typeof price === 'number') {
            this.price = price;
        }
        if (typeof description === 'string') {
            this.description = description;
        }
        if (typeof current_owner === 'string') {
            this.current_owner = current_owner;
        }
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.productname);
            console.log(this.price);
            console.log(this.description);
            console.log(this.current_owner);
            if (!(this.productname && this.price && this.description && this.current_owner)) {
                throw new Error('product name/price/description/current_owner are  not defined');
            }
            const response = yield db_1.pool.query('INSERT INTO commodity (product_name ,price,description,current_owner) VALUES ($1, $2, $3, $4)', [this.productname, this.price, this.description, this.current_owner]);
            console.log(response);
        });
    }
    getCommodity() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield db_1.pool.query('SELECT * FROM commodity ORDER BY id ASC');
            return response.rows;
        });
    }
}
exports.Commodity = Commodity;
//# sourceMappingURL=commodity.js.map