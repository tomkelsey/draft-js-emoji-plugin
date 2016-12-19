'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findWithRegex = require('find-with-regex');

var _findWithRegex2 = _interopRequireDefault(_findWithRegex);

var _emojione = require('emojione');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unicodeRegex = new RegExp(_emojione.unicodeRegexp, 'g');

exports.default = function (contentBlock, callback) {
  (0, _findWithRegex2.default)(unicodeRegex, contentBlock, callback);
};