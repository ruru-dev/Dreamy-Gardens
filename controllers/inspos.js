// Create a variabe that stores our database connection
const db = require("../services/database");

// Controller function to list all inspos.
const listInspos = (req, res) => {
  const keywordClause =
    req.query.keyword == "featured" ? `WHERE i.featured = true` : "";

  // The SQL query that will fetch all records from our inspo table.
  const sql = `
  SELECT
    i.*,
    u.firstname as user_firstname,
    u.lastname as user_lastname
  FROM inspo i
    JOIN \`user\` u ON i.user_id = u.id
  ${keywordClause}
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
      // Map over every inspo from our query result and convert it into a structrured object
      const inspos = results.map((row) => {
        // The query result has data from multiple tables (inspo, user) - destructure the data we need
        const { user_id, user_firstname, user_lastname, ...inspoData } = row;

        // encapsulate all user data into its own object
        const user = {
          user_id: user_id,
          firstname: user_firstname,
          lastname: user_lastname,
        };

        // encapsulate all tag data into its own array of objects (empty for now)
        const tags = [];

        /* 
         * return an object with the data in a proper nested hierarchy 
         * e.g.
         * {
         *   id: 1,
         *   imageUrl: "http://urltoimage.com",
         *   description: 'My first garden inspo',
         *   .
         *   .
         *   user: {
         *     id: 1,
         *     firstname: "John",
         *     lastname: "Doe"
         *   },
         *   tags: []
         * }
         */
        return { ...inspoData, user, tags };
      });

      /*
       * Here we used status as opposed to sendstatus because we do not want to immediately send back a response.
       * Anything in the 200's is a success. 200 is a generic success message.
       */
      res.status(200).json(inspos);
    }
  });
};

module.exports = { listInspos };
