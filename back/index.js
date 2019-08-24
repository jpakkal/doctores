require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();

const TestRouter = require('./routes/test');

app.use(cors());
app.use('/test', TestRouter);

const [hostname, port] = ['localhost',8080];

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});