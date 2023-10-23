/*
 * This middleware will provide support for requests with multipart/form-data. This allows us to send
 * data to the server in multiple "parts", however it is primarily used for uploading files.
 *
 * Because it is middleware, it will intercept requests before they are handled by a controller.
 * The middleware can detect if the request is of type multipart/form-data and will automatically separate
 * out the "body" object and "file(s)" object for us. These will be available in the request by the time it
 * is handled by the controller.
 */

// require the multer npm package which provides the multipart functionality
const multer = require('multer');
const { storage } = require('../services/cloudinary');

// Create the multer upload object using the cloudinary as the storage destination 
const upload = multer({ storage });

// When you invoke multer, it will give you the object with all the upload functionality.
module.exports = upload;
