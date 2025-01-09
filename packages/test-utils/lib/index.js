"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeTmpBuffer = exports.initTestUtils = exports.getRawImage = exports.getImageMetadata = exports.getImageFile = exports.getImage = exports.getFileSize = exports.cleanup = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _sharp = _interopRequireDefault(require("sharp"));

var _rimraf = _interopRequireDefault(require("rimraf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const keepImageOutput = process.env.KEEP_IMAGE_OUTPUT === 'true';
let basePath;
let tmpFolder;
/**
 * Cleans up after the test
 */

const cleanup = (force = false) => {
  if (!keepImageOutput || force) {
    _rimraf.default.sync(tmpFolder);
  }
};
/**
 * Initializes the test utils
 *
 * @param {string} nextBasePath Base path of the tests
 */


exports.cleanup = cleanup;

const initTestUtils = nextBasePath => {
  basePath = nextBasePath;
  tmpFolder = _path.default.resolve(basePath, keepImageOutput ? 'out' : 'tmp');
  cleanup(true);
};
/**
 * Load image data from a file
 *
 * @param {string} fileName Image file name
 * @returns {Promise<{ data: Buffer; info: OutputInfo }>} Image data
 */


exports.initTestUtils = initTestUtils;

const getImage = async fileName => {
  return (0, _sharp.default)(_path.default.resolve(basePath, fileName)).toBuffer({
    resolveWithObject: true
  });
};
/**
 * Load image data from a file without sharp
 *
 * @param {string} fileName Image file name
 * @returns {Buffer} Image data
 */


exports.getImage = getImage;

const getImageFile = fileName => {
  return _fs.default.readFileSync(_path.default.resolve(basePath, fileName));
};
/**
 * Load raw image data from a file
 *
 * @param {string} fileName Image file name
 * @returns {Promise<{ data: Buffer; info: OutputInfo }} Raw image data
 */


exports.getImageFile = getImageFile;

const getRawImage = async fileName => {
  return (0, _sharp.default)(_path.default.resolve(basePath, fileName)).raw().toBuffer({
    resolveWithObject: true
  });
};
/**
 * Load image metadata
 *
 * @param {string} fileName Image file name
 * @returns {Promise<Metadata>} Image metadata
 */


exports.getRawImage = getRawImage;

const getImageMetadata = async fileName => {
  return (0, _sharp.default)(_path.default.resolve(basePath, fileName)).metadata();
};
/**
 * Returns the size in bytes of a file
 *
 * @param {string} fileName File name
 * @returns {number} File size in bytes
 */


exports.getImageMetadata = getImageMetadata;

const getFileSize = fileName => {
  return _fs.default.statSync(_path.default.resolve(basePath, fileName)).size;
};
/**
 * Writes a buffer into a temporary file
 *
 * @param {Buffer} data Buffer to write
 * @param {string} fileName File name
 * @returns {string} Path of the temporary file
 */


exports.getFileSize = getFileSize;

const writeTmpBuffer = (data, fileName) => {
  const outputPath = _path.default.resolve(tmpFolder, fileName);

  if (!_fs.default.existsSync(tmpFolder)) {
    _fs.default.mkdirSync(tmpFolder);
  }

  _fs.default.writeFileSync(outputPath, data);

  return `${keepImageOutput ? 'out' : 'tmp'}/${fileName}`;
};

exports.writeTmpBuffer = writeTmpBuffer;