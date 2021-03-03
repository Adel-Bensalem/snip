const app = require("express")();
const { createImageCropRouter } = require("./cropImage");

const createServer = (core, port) => {
  app.use(createImageCropRouter(core));
  app.listen(port);
};

module.exports = { createServer };
