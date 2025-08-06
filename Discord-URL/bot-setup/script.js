// runs node server

const express = require('express');
const path = require('path');
const app = express();

app.listen(5500, () => console.log('listening at 5500'));
app.use(express.static(path.join(__dirname, '../Chrome')));


// TODO: recieve message and send to message.js
app.use(express.json());
app.post('/api', (request, response) =>{
  console.log('URL:', request.body);
  const data = request.body;
  response.json({
    status: 'success',
    url: request.body.url
  });
});
