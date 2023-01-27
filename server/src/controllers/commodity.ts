import { Request, Response } from 'express';
// import { pool } from '../models/db/db';
import { Commodity } from '../models/commodity';


export const createCommodity = async (req: Request, res: Response) => {
    const { productname, price, description, current_owner } = req.body;
    const commodity = new Commodity({ productname, price, description, current_owner });
    await commodity.create();
    res.json({
        message: 'Commodity Added successfully',
        body: {
            user: {productname, price, description, current_owner}
        }
    })
};


export const getCommodity = async (req: Request, res: Response) => {
    try {
        const commodity = new Commodity({});
        const resp = await commodity.getCommodity()
        return res.json(resp);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};
