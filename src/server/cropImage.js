const router = require("express").Router();
const formData = require("express-form-data");
const os = require("os");
const options = { uploadDir: os.tmpdir(), autoClean: true };

const createImageCropRouter = (core) => {
  router.use(formData.parse(options));
  router.use(formData.format());
  router.use(formData.stream());
  router.use(formData.union());

  router.post("/images", ({ body }, res) =>
    core
      .cropImage(body.file.path, {
        width: parseInt(body.width),
        height: parseInt(body.height),
        top: parseInt(body.top),
        left: parseInt(body.left),
        bottom: parseInt(body.bottom),
        right: parseInt(body.right),
      })
      .then(({ data, type }) =>
        res.header("Content-Type", type).status(200).send(data)
      )
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      })
  );

  return router;
};

module.exports = { createImageCropRouter };
