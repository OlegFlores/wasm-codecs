"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultInputInfo = exports.defaultEncodeOptions = void 0;

var _colorspace = require("./colorspace");

const defaultInputInfo = exports.defaultInputInfo = {
  width: 0,
  height: 0,
  channels: 3
};
const defaultEncodeOptions = exports.defaultEncodeOptions = {
  quality: 75,
  baseline: false,
  arithmetic: false,
  progressive: true,
  optimizeCoding: true,
  smoothing: 0,
  colorSpace: _colorspace.ColorSpace.YCbCr,
  quantTable: 3,
  trellisMultipass: false,
  trellisOptZero: false,
  trellisOptTable: false,
  trellisLoops: 1,
  autoSubsample: true,
  chromaSubsample: 2,
  separateChromaQuality: false,
  chromaQuality: 75
};