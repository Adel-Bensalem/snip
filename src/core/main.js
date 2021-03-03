const { createCropImageInteractor } = require("./useCases/cropImage");

const createCore = ({ getFileType, getImageDimensions, cropImage }) => ({
  cropImage: createCropImageInteractor(
    getFileType,
    getImageDimensions,
    cropImage
  ),
});

module.exports = { createCore };
