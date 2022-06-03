const express = require('express')
const app = express()
const routes = require('./routes/router.js');
const { initPool } = require('./dbdrivers/oracle');
const { checkAuth, jwtGenerate } = require('./middlewares/authMiddleware');
const {bodyParserMiddleware} = require('./middlewares/bodyParser')

app.listen(5000, () => {
    console.log('Server running on localhost:5000...')
  })

initPool();

app.use(express.json());

let counter = 0;

app.use(function (req, res, next) {
    counter += 1;
    req.sequence = counter; 
    next();
})

app.use('/v1/jwtGenerate', jwtGenerate);

//app.use(checkAuth);

app.use('/v1', routes);


module.exports = app;