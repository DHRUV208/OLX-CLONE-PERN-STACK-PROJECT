const Pool = require('pg').Pool;

export const pool = new Pool({
    user: "postgres",
    password: "Xyz@12345",
    host: "localhost",
    port: 5432,
    database: "olxdb"
})



