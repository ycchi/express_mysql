const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../tmp/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

const upload = multer({
    dest: storage,
}).single(`file`)



// 12/11 - destination err
router.post('/', upload, (req, res, next) => {
    console.log(req.file)
    res.status(200).send(`success!`)
})


module.exports = router;