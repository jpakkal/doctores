const express = require('express');
const db = require('../utils/database');

const Router = express.Router();

Router.get('/', async function (request, response) {
    try {
        const result = await db.query('SELECT 1 + 1 as solution');
        response.json({ result });
    } catch (err) {
        response.status(400).json({ err });
    }
});

Router.get('/hello', function (request, response) {
    response.send('Hello World');
});

module.exports = Router;