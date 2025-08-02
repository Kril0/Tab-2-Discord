const express = require('express');
const { port } = require('./config.json');

const app = express();

const path = require('path');

app.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'Chrome', 'Main.html'));
});

app.listen(port, () => console.log('App listening at http://localhost: ' + port));