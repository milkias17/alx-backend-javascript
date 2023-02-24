const express = require('express');

const app = express();
app.listen(7865, '127.0.0.1', () => console.log('API available on localhost port 7865'));

app.get('/', (request, response) => response.end('Welcome to the payment system'));
