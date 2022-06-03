const jwt = require('jsonwebtoken')
const secret = require('../config/config').secret;
const logger = require('../utils/logger').writeLog;


const checkAuth = (req, res, next) => {
    const authorization = req['headers']['Authorization'] || req['headers']['authorization'];
    if (!authorization) return res.status(401).send('Не авторизован');
    const token = authorization.split(' ')[1];

    try {
		let sessionData = jwt.verify(token, secret.jwt); 
		req.sessionData = sessionData;
	} catch (err) {
		return res.status(401).send('Не авторизован');
	}

	next();
}

const jwtGenerate = (req, res) => {
  let body = req.body;
  console.log(body)
  logger(body)
  let token = '';
  try {
      token = jwt.sign({
    data: 'user'
  }, secret.jwt, { expiresIn: '8h' });

  } catch (err) {
      res.status(500).send(err);
      //console.log(err)
  }
  let response = {
      user: 'user',
      token
  }
  res.send(response);
}

module.exports = {
  checkAuth,
  jwtGenerate
  }