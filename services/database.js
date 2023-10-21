// Require the mysql npm package that will make the connection to the database.
const mysql = require('mysql');

require('dotenv').config();

// Use a connection class to ensure that we can  only instantiate one database connection (singleton pattern).
class Connection {
    constructor() {
        // Only create the connection pool if one doesn't already exist.
        if (!this.pool) {
            // creates the connection
            this.pool = mysql.createPool({
                connectionLimit: 100,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            });
        }
        return this.pool;
    }
}

// Instantiate the connection instance
const connectionPool = new Connection();

// Export the connecton object/pool, so that other files can use it.
module.exports = connectionPool;
