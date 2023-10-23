/**
 * This service will allow us to upload images to the cloudinary account.
 */
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Provide the credentials for the account as part of the configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

/*
 * Create a new storage object for use with the multer middleware.
 * Add options for a specific folder and allowed file types.
 */
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'dreamy-gardens',
        allowed_formats: ['jpeg', 'jpg', 'png']
    }
});

module.exports = { cloudinary, storage };
