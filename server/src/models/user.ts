import { pool } from "./db/db";

type UserData = {
    id: number;
    // name: string;
    email: string;
    hashedPassword: string;

}
export class User {
    public id?: number;
    // public name?: string;
    public email?: string;
    public hashedPassword?: string;
    constructor({id ,email, hashedPassword}: {id?: number,  email?:string, hashedPassword?: string})
    {
        if (typeof id === 'number') {
            this.id = id;
        }
        // if (typeof name === 'string') {
        //     this.name = name;
        // }
        if (typeof email === 'string') {
            this.email = email;
        }
        if (typeof hashedPassword === 'string') {
            this.hashedPassword = hashedPassword;
        }

    }

    async create():Promise<void> {
        if (!(/*this.name && */this.email && this.hashedPassword)) {
            throw new Error(' email or password not defined');
        }
        const response = await pool.query('INSERT INTO users ( email, password) VALUES ($1, $2)', [ this.email, this.hashedPassword]);

    }

    async getUserById(): Promise<string> {

        if (!(this.id)) {
            throw new Error('id is not defined');
        }
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [this.id]);
        return response.rows;
        
    }

    async getUsers(): Promise<Array<UserData>> {
        const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
        return response.rows;

    }

    async update():Promise<void> {
        if (!( this.email && this.id)) {
            throw new Error(' email or id not defined');
        }
       const response = await pool.query('UPDATE users SET  email = $2 WHERE id = $3', [
        // this.name,
        this.email,
        this.id
    ]);
    }

    async delete() {
         if (!(this.id)) {
            throw new Error('id is not defined');
        }
        const response = await pool.query('DELETE FROM users where id = $1', [
        this.id
    ]);
    }
} 
