// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

/*
 * In order to use the router object we must get it from express.
 * The router has all of the backend endpoints for the inspos resource.
 */
const router = express.Router();

/* 
 * In order to use the controller file we must require it.
 * The controller has the logic that will handle this request.
 */
const controller = require('../controllers/plants.js');

/*  
 * GET Request
 * Here we are creating a GET endpoint to list all inspos from the database.
 */
router.get('/', controller.listPlants);

module.exports = router;
