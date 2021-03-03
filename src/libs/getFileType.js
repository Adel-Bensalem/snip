const FileType = require("file-type");

const getFileType = (file) => FileType.fromFile(file).then(({ mime }) => mime);

module.exports = { getFileType };
