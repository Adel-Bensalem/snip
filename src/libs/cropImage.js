const sharp = require("sharp");

const mimeTypeMap = {
  "image/webp": "webp",
  "image/gif": "gif",
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/tiff": "tiff",
  "image/avif": "avif",
  "image/heif": "heif",
};

const cropImage = ({ data, type, dimensions }, output) => {
  const top = output.top || 0;
  const left = output.left || 0;

  return sharp(data)
    .extract({
      top,
      left,
      width: (output.right || dimensions.width) - left,
      height: (output.bottom || dimensions.height) - top,
    })
    .resize(
      output.width || dimensions.width,
      output.height || dimensions.height,
      {
        fit: "contain",
      }
    )
    [mimeTypeMap[type] || "jpeg"]()
    .toBuffer()
    .then((buffer) => ({ data: buffer, type }));
};

module.exports = { cropImage };
