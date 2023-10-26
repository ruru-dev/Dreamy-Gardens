// Create a variable that stores our database connection
const db = require('../services/database');

const argon = require('argon2');

// Controller function to create a user.
const createUser = async (req, res) => {
    // Ensure that email field is provided
    if (!req.body.email) {
        res.status(400).send('Email field is required.');
        return;
    }

    // Ensure that pasword field is provided
    if (!req.body.password) {
        res.status(400).send('Password field is required.');
        return;
    }

    let hashedPassword;
    try {
        // Hash the password
        hashedPassword = await argon.hash(req.body.password);
    } catch (error) {
        console.log('Error occurred while hashing password', error);
        res.sendStatus(500);
        return;
    }

    // The SQL query that will insert a new record (user) in the database.
    const sql = `
    INSERT INTO user
        ( 
        email,
        password,
        firstname,
        lastname,
        base_zone,
        create_date
        )
    VALUES 
        (?,?,?,?,?,?)
    `;

    /*
     * Because our query is parameterized, we need to provide the values to inject into the query.
     * By parameterizing the query, we ensure that users cannot manipulate our SQL query. This is a secure practice.
     */
    const params = [
        req.body.email,
        hashedPassword,
        req.body.firstname,
        req.body.lastname,
        req.body.base_zone,
        new Date().toISOString()
    ];

    // Send the query to our database, using the connection we created (db object).
    db.query(sql, params, function (err, results) {
        // Handle scenario where an error occurs.
        if (err) {
            console.log(
                'An error occurred while attempting to insert into the database.',
                err
            );
            // sendStatus represents an HTTP response status - 500 is a server error
            res.sendStatus(500);
        }
        // Handle scenario where we successfully write to the database.
        else {
            // Anything in the 200's is a success. 201 is a creation success. Will by default send "Created" message in the response body.
            res.sendStatus(201);
        }
    });
};

module.exports = { createUser };
