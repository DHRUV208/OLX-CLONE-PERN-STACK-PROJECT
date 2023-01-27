// SCHEMA
// export const Ads: string {
    
// }

import { pool } from "./db/db";

type CommodityData = {
    id: number;
    product_name: string;
    price: number;
    description: string,
    current_owner: string;
    
}

export class Commodity{
    public id?: number;
    public productname?: string;
    public price?: number;
    public description?: string;
    public current_owner?: string;
    constructor({id, productname ,price,description,current_owner}: {id?: number, productname?: string, price?:number, description?: string, current_owner?: string })
        {
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
    async create():Promise<void> {
        
        console.log(this.productname);
        console.log(this.price);
        console.log(this.description);
        console.log(this.current_owner);
        
        
        
        
        if (!(this.productname && this.price && this.description && this.current_owner)) {
            
            throw new Error('product name/price/description/current_owner are  not defined');
        }
        const response = await pool.query('INSERT INTO commodity (product_name ,price,description,current_owner) VALUES ($1, $2, $3, $4)', [this.productname, this.price, this.description,this.current_owner]);
        console.log(response);
               
    }
    
     async getCommodity(): Promise<Array<CommodityData>> {
        const response = await pool.query('SELECT * FROM commodity ORDER BY id ASC');
        return response.rows;

    }
}
   
