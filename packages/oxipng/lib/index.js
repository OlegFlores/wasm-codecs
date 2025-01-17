"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _oxipng = _interopRequireDefault(require("./oxipng"));

var _options = require("./options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Encode a raw input image using oxipng
 *
 * @param {Buffer} image Raw image input buffer
 * @param {EncodeOptions} encodeOptions Encoding options passed to oxipng
 * @returns {Buffer} Processed image buffer
 */
const encode = (image, encodeOptions = {}) => {
  // merge default configs
  const filledEncodeOptions = { ..._options.defaultEncodeOptions,
    ...encodeOptions
  };

  const result = _oxipng.default.encode(new Uint8Array(image), filledEncodeOptions.level);

  return Buffer.from(result);
};

var _default = exports.default = encode;

module.exports = encode;