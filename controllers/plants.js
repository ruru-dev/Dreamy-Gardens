// Create a variable that stores our database connection
const db = require('../services/database');

// Controller function to list all inspos.
const listPlants = (req, res) => {
    // The SQL query that will fetch all records from our inspo table.
    const sql = `
    SELECT *
    FROM plant p
    ORDER BY common_name ASC
    `;

    // Send the query to our database, using the connection we created (db object).
    db.query(sql, function (err, results) {
        // Handle scenario where an error occurs.
        if (err) {
            console.log(
                'An error occurred while trying to fetch plants from the database.',
                err
            );
            // sendStatus represents an HTTP response status.
            // 500 is a server error
            res.sendStatus(500);
        }
        // Handle scenario where we successfully fetch from the database.
        else {
            /*
             * Here we used status as opposed to sendstatus because we do not want to immediately send back a response.
             * Anything in the 200's is a success. 200 is a generic success message.
             */
            res.status(200).json(results);
        }
    });
};

module.exports = { listPlants };
