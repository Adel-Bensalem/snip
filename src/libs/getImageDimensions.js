const sizeOf = require("image-size");

const getImageDimensions = (file) =>
  new Promise((resolve, reject) =>
    sizeOf(file, (err, dimensions) =>
      !err ? resolve(dimensions) : reject(err)
    )
  );

module.exports = { getImageDimensions };
