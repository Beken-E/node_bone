const multer = require('multer');
const catchAsync = require('../utils/catchAsync')
var logger = require('../utils/logger').writeLog;

const imgHandler = catchAsync(async (req, res) => {
    let body = req.body;

    const fileStorge = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'D:\\new_project\\images')
        },
        filename: (req, file, cb) => {
            console.log(file)
            cb(null, Date.now() + ".PNG");
        }
    });
    
    const upload = multer({
        storage: fileStorge
    });
    
    upload.single('image')

    logger(body)

    try {
        console.log(req.file)
        res.send('ok');
  
    } catch (err) {

        res.send(err);
    }
  });


  module.exports = {
    imgHandler
  }