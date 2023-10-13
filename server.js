// In order to use the express npm package you need to require it
const express = require('express');
const path = require('path');

// The config method injects the variables contained in the .env file into the process.env object
// We can call the config function immediately after requiring the dotenv package
// because the process.env object already exists.
require('dotenv').config();

// With express, you can invoke the top level function instead of calling express.function() every time.
// By default, the express function creates an app.
// This instantiates the application
const app = express();

/*
 * If the request is for a static file, attempt to serve it directly from the "public" folder.
 * 
 * - This middleware makes all files in the "public" folder directly accessible to the internet.
 * - Search for the file specified in the url.
 * - (e.g http://dreamygardens.com/images/banner.jpg)
 */
app.use(express.static('public'));

/*
 * If the request is NOT for a static file, attempt to route the request to a backend API endpoint.
 * 
 * - Search for an express route that matches the path in the url.
 * - (e.g. http://dreamygardens.com/api/inspos)
 */
app.use('/api', require('./routes/inspos'));

/*
 * If the route isn't found in the backend API, load the frontend and attempt to route to a page.
 *
 * - Let react router search for a route that matches the path in the url.
 * - (e.g http://dreamygardens.com/gallery)
 */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public','index.html'));
})

// Our app needs to listen for incoming requests. A callback function can be invoked anytime we start listening
// If you don't provide a port, the express app will default to port 3000
app.listen(3000, () => {
    console.log('Server is listening...');
});