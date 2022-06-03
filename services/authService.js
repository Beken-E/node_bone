const catchAsync = require('../utils/catchAsync')
const logger = require('../utils/logger').writeLog;
const jwt = require('jsonwebtoken');
const config = require('../config/config').secret;


const jwtGenerate = catchAsync(async (req, res) => {
    let body = req.body;
    console.log(body)
    logger(body)
    let token = '';
    try {
        token = jwt.sign({
			data: 'user'
		}, config.jwt, { expiresIn: '8h' });
  
    } catch (err) {
        res.status(500).send(err);
        //console.log(err)
    }
    let response = {
        user: 'user',
        token
    }
    res.send(response);
  });

  module.exports = {
    jwtGenerate
  }