// Create a variabe that stores our database connection
const db = require("../services/database");

// Controller function to list all inspos.
const listInspos = (req, res) => {
  // The SQL query that will fetch all records from our inspo table.
  const sql = `
  SELECT
    i.*,
    u.firstname as user_firstname,
    u.lastname as user_lastname
  FROM inspo i
      JOIN \`user\` u ON i.user_id = u.id
  ORDER BY i.id
  `;

  // Send the query to our database, using the connection we created (db object).
  db.query(sql, function (err, results) {
    // Handle scenario where an error occurs.
    if (err) {
      console.log(
        "An error occurred while trying to fetch from the database.",
        err
      );
      // sendStatus represents an HTTP response status.
      // 500 is a server error
      res.sendStatus(500);
    }
    // Handle scenario where we successfully fetch from the database.
    else {
      // Anything in the 200's is a success. 200 is a generic success message.
      // Here we used status as opposed to sendstatus because we do not want to immediately send back a response.
      const inspos = results.map((row) => {
        const { user_id, user_firstname, user_lastname, ...inspoData } = row;

        const user = {
          user_id: user_id,
          firstname: user_firstname,
          lastname: user_lastname,
        };

        const tags = [];

        return { ...inspoData, user, tags };
      });

      res.status(200).json(inspos);
    }
  });
};

module.exports = { listInspos };
