const { isFileImage } = require("../entities/isFileImage");

const createCropImageInteractor = (
  getFileType,
  getImageDimensions,
  cropImage
) => (file, output) =>
  getFileType(file).then(
    (type) =>
      isFileImage(type) &&
      getImageDimensions(file).then((dimensions) =>
        cropImage({ data: file, type, dimensions }, output)
      )
  );

module.exports = { createCropImageInteractor };
