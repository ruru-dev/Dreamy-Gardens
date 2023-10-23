// In order to reference the express object/framework you need to require it and store it in a variable.
const express = require('express');

// Require the multer upload object which uses cloudinary as the storage destination
const upload = require('../middleware/upload');

/*
 * In order to use the router object we must get it from express.
 * The router has all of the backend endpoints which our application can serve.
 */
const router = express.Router();

/* 
 * In order to use the controller file we must require it.
 * The controller has the logic that will handle this request.
 */
const controller = require('../controllers/inspos.js');

/*  
 * GET Request
 * Here we are creating a GET endpoint to list all inspos from the database.
 */
router.get('/inspos', controller.listInspos);

/*
 * POST Request
 * Here we are creating a POST endpoint to create a new inspo.
 */
router.post('/inspos', upload.single('image'), controller.createInspo);

module.exports = router;
