const express = require('express');
var logger = require('../utils/logger').writeLog;
const { getTestData } = require('../services/oracleService');
const { jwtGenerate } = require('../services/authService');
const { upload } = require('../middlewares/fileHandler')
const { imgHandler } = require('../services/imgService');

const router = express.Router();

router.post('/test', getTestData);
router.post('/jwtGenerate', jwtGenerate);
router.post('/images', upload.single("image"))
//router.post('/images', imgHandler)


module.exports = router;