require('dotenv').config();
const { request, response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./app/router');
// sécurity
const cors = require('cors');
//autorise all
app.use(cors());
// express json
app.use(express.json());
// router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});