require('dotenv').config();
const { request, response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', (request, response) => {
    response.send('Hello World !')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});