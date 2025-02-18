const express = require('express');
 
const router = express.Router();
 
const testController = require('../controllers/testController');
 
 
 
 
application.get('/test', function(req, res) {
    res.send('Hello World');
});
 