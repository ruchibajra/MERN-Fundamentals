const multer = require('multer'); /**file handling like uplaod files in node js */
const { diskStorage } = require('multer');
// const diskStorage = multer.diskStorage;
const path = require('path');

// Regular expression to eliminate whitespace and special characters from file names
const re = new RegExp("\\s+", "g");
const sanitizeFileName = (imageName) => {
  return imageName.replace(re, "-").replace(/[^a-zA-Z0-9_\-\.]/g, "");
};

// Function to handle file naming
const filename = (req, file, next) => {
  let lastDotIndex = file.originalname.lastIndexOf("."); /**[ruchi profile, .png] */
  let originalname = file.originalname.substring(0, lastDotIndex); /** 0 index means [ruchi profile] */
  let ext = file.originalname.substring(lastDotIndex); /**[.png] */
  next(null, `${sanitizeFileName(originalname)}-${Date.now()}${ext}`); /** ruchi-profile-2024-07-29-9am.png */
};

// Function to filter file types - upload gareko file yo format ma cha ki nai check garni fn
const filter = (req, file, next) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "video/mp4",
    "image/gif",
    "application/pdf",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    next(null, true);
  } else {
    next(null, false);
    return next(
      new Error("Only .jpeg, .jpg, .png, .mp4, .gif and .pdf formats allowed!")
    );
  }
};

// Function to get the destination path
const getDestination = (folderName) => {
  return (req, file, next) => {
    next(null, path.join(__dirname, `../../uploads/${folderName}`));
  };
};

// Storage configurations
const profileImageStorage = diskStorage({
  destination: getDestination("profiles"), /** kata gayera store garne and  */
  filename, /**file ko name store garxa*/
});

// for product image if needed in future:
// const productImageStorage = diskStorage({
//   destination: getDestination("products"),
//   filename,
// });

// Multer instances
const profileImage = multer({
  storage: profileImageStorage,
  fileFilter: filter,
});

module.exports = {
  profileImage,
};