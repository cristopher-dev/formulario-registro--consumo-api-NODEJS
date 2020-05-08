// IMPORT MODULE
import path from 'path';
import multer from 'multer';

// SETTING FILE IMG
const storageimg = multer.diskStorage({
  destination: path.join(__dirname, './public/uploads'),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// UPLOAD
const multipleFile = multer({
  storage: storageimg,
  dest: path.join(__dirname, './public/uploads'),
  limits: { fileSize: 5000000 },
}).array('multipleFile');

export { multipleFile };
