// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

/*
 * In order to use the router object we must get it from express.
 * The router has all of the backend endpoints for the users resource.
 */
const router = express.Router();

/* 
 * In order to use the controller file we must require it.
 * The controller has the logic that will handle this request.
 */
const controller = require('../controllers/users');

/*
 * POST Request
 * Here we are creating a POST endpoint to create a new inspo.
 */
router.post('/', controller.createUser);

module.exports = router;
