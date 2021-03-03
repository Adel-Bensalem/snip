const { createCore } = require("./core/main");
const { getFileType } = require("./libs/getFileType");
const { getImageDimensions } = require("./libs/getImageDimensions");
const { cropImage } = require("./libs/cropImage");
const { createServer } = require("./server/main");
const port = process.env.PORT || 3000;

createServer(createCore({ getFileType, getImageDimensions, cropImage }), port);
