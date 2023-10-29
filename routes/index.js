/**
 * This file combines the routes for all resources provided by the API.
 */
const express = require('express');
const router = express.Router();

// Set up our main router to use the subrouters for each resource
router.use('/inspos', require('./inspos'));
router.use('/plants', require('./plants'));
router.use('/users', require('./users'));

module.exports = router;