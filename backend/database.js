const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "book",
    password: "firli0802",
    port: 5432,
});

module.exports = pool;