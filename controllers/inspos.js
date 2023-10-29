// Create a variable that stores our database connection
const db = require('../services/database');

// Controller function to list all inspos.
const listInspos = (req, res) => {
    const keywordClause =
        req.query.keyword == 'featured' ? `WHERE i.featured = true` : '';

    // The SQL query that will fetch all records from our inspo table.
    const sql = `
    SELECT
        i.*,
        u.firstname as user_firstname,
        u.lastname as user_lastname,
        p.id as plant_id,
        p.common_name AS plant_common_name
    FROM inspo i
        JOIN \`user\` u ON u.id = i.user_id
        LEFT JOIN tag t ON t.inspo_id = i.id
        LEFT JOIN plant p ON p.id = t.plant_id
        ${keywordClause}
        ORDER BY i.id
    `;

    // Send the query to our database, using the connection we created (db object).
    db.query(sql, function (err, results) {
        // Handle scenario where an error occurs.
        if (err) {
            console.log(
                'An error occurred while trying to fetch from the database.',
                err
            );
            // sendStatus represents an HTTP response status.
            // 500 is a server error
            res.sendStatus(500);
        }
        // Handle scenario where we successfully fetch from the database.
        else {
            const inspos = [];
            let currentInspo = {};

            /**
             * The query result will return data from multiple tables (inspo, user, tag).
             * We'll need to loop over each row and build an object to represent each inspo.
             */
            for (let row of results) {
                // Destructure the data we'll need from the row.
                const {
                    user_id,
                    user_firstname,
                    user_lastname,
                    plant_id,
                    plant_common_name,
                    ...inspoData
                } = row;

                /*
                 * As we're looping over the results, build a new object only when we encounter a different inspo id.
                 * We will see the same inspo id multiple times - once for every plant that's tagged in it.
                 */
                if (currentInspo.id !== inspoData.id) {
                    // Build an inspo object with nested data for the user and tags
                    currentInspo = {
                        ...inspoData,
                        user: {
                            user_id: user_id,
                            firstname: user_firstname,
                            lastname: user_lastname
                        },
                        tags: []
                    };

                    // Add it to the array of inspos that will be returned in the response
                    inspos.push(currentInspo);
                }

                /*
                 * Since each row represents a different tagged plant, we'll need to push it onto the current inspo every time we loop.
                 */
                currentInspo.tags.push(plant_common_name);
            }

            /*
             * Here we used status as opposed to sendstatus because we do not want to immediately send back a response.
             * Anything in the 200's is a success. 200 is a generic success message.
             */
            res.status(200).json(inspos);
        }
    });
};

// Controller function to create an image.
const createInspo = (req, res) => {
    // The SQL query that will insert a new record (image) in the database.
    const sql = `
    INSERT INTO inspo
      ( 
        user_id,
        description,
        image_url,
        submit_date,
        zone,
        country,
        state,
        sun_exposure,
        soil_type,
        fertilizer_schedule,
        additional_notes
      )
    VALUES 
      (?,?,?,?,?,?,?,?,?,?,?)
    `;

    /*
     * Because our query is parameterized, we need to provide the values to inject into the query.
     * By parameterizing the query, we ensure that users cannot manipulate our SQL query. This is a secure practice.
     */
    const params = [
        1,
        req.body.description,
        req.file.path,
        new Date().toISOString(),
        req.body.zone,
        req.body.country,
        req.body.state,
        req.body.sun_exposure,
        req.body.soil_type,
        req.body.fertilizer_schedule,
        req.body.additional_notes
    ];

    // Send the query to our database, using the connection we created (db object).
    db.query(sql, params, function (err, results) {
        // If an error occurred while saving the inspo, send a 500 response
        if (err) {
            console.log(
                'An error occurred while attempting to save the inspo to the database.',
                err
            );
            return res.sendStatus(500);
        }
        // Otherwise, attempt to save and link the tags to the inspo we just created
        else {
            const taggedPlantIds = req.body.tagged_plants || [];

            // Verify that at least one plant was tagged on the inspo
            if (taggedPlantIds.length <= 0) {
                return res
                    .status(400)
                    .send('The Inspo must contain at least one tagged plant.');
            }

            // Attempt to save the tags to the database
            try {
                createTags(results.insertId, taggedPlantIds);
            } catch (err) {
                return res.sendStatus(500);
            }

            // Return a 201 create success if the inspo AND its tags were successfully saved
            return res.sendStatus(201);
        }
    });
};

const createTags = (inspoId, taggedPlantIds) => {
    console.log('Attempting to save tags to the database');
    const placeholders = [];
    const params = [];

    for (let plantId of taggedPlantIds) {
        placeholders.push('(?,?)');
        params.push(parseInt(inspoId), parseInt(plantId));
    }

    const sql = `
    INSERT INTO tag
        (
          inspo_id, 
          plant_id
        )
    VALUES ${placeholders.join(',')}
    `;

    // Send the query to our database, using the connection we created (db object).
    db.query(sql, params, function (err, results) {
        if (err) {
            console.log(
                'An error occurred while attempting to save the tags to the database.',
                err
            );
            throw err;
        } else {
            console.log('Done saving tags to the database');
        }
    });
};

module.exports = { listInspos, createInspo };
