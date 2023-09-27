const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.send('My first GET API route');
})

app.listen(3000, () => {
    console.log('Server is listening...');
});