const multer = require('multer');


const fileStorge = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'D:\\new_project\\images\\file1')
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


module.exports = {
    upload
}