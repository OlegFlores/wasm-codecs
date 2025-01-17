"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGrayscale = exports.ColorSpace = void 0;

let ColorSpace = exports.ColorSpace = /*#__PURE__*/function (ColorSpace) {
  ColorSpace[ColorSpace["UNKNOWN"] = 0] = "UNKNOWN";
  ColorSpace[ColorSpace["GRAYSCALE"] = 1] = "GRAYSCALE";
  ColorSpace[ColorSpace["RGB"] = 2] = "RGB";
  ColorSpace[ColorSpace["YCbCr"] = 3] = "YCbCr";
  ColorSpace[ColorSpace["CMYK"] = 4] = "CMYK";
  ColorSpace[ColorSpace["YCCK"] = 5] = "YCCK";
  return ColorSpace;
}({});
/**
 * Checks if a raw input image is a grayscale image
 *
 * @param {Buffer} data Raw input image data
 * @param {number} channels Number of channels
 * @returns {boolean} Wheter the raw input image data is grayscale or not
 */


const isGrayscale = (data, channels) => {
  for (let i = 0; i < data.length; i += channels) {
    for (let j = 1; j < channels && i + j < data.length; j += 1) {
      if (data[i] !== data[i + j]) {
        return false;
      }
    }
  }

  return true;
};

exports.isGrayscale = isGrayscale;