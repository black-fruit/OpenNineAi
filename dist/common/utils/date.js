'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['isExpired'] = exports["formatCreateOrUpdateDate"] = exports["formatDate"] = void 0;

const dayjs = require('dayjs');

require("dayjs/locale/zh-cn");

const a = require("dayjs/plugin/utc"),
      b = require("dayjs/plugin/timezone");

dayjs['locale']("zh-cn");
dayjs["extend"](a);
dayjs['extend'](b);
dayjs['tz']['setDefault']('Asia/Shanghai');

function formatDate(_0x57f9a9, _0x9f2be = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(_0x57f9a9)["format"](_0x9f2be);
}

exports["formatDate"] = formatDate;

function formatCreateOrUpdateDate(_0x1d354c, _0x72457b = "YYYY-MM-DD HH:mm:ss") {
  if (Array["isArray"](_0x1d354c)) {
    return _0x1d354c["map"](_0x39f1bb => {
      _0x39f1bb["createdAt"] = (_0x39f1bb === null || _0x39f1bb === void 0 ? void 0 : _0x39f1bb["createdAt"]) ? dayjs(_0x39f1bb["createdAt"])["format"](_0x72457b) : dayjs()["format"](_0x72457b);
      _0x39f1bb["updatedAt"] = (_0x39f1bb === null || _0x39f1bb === void 0 ? void 0 : _0x39f1bb["updatedAt"]) ? dayjs(_0x39f1bb['updatedAt'])["format"](_0x72457b) : dayjs()['format'](_0x72457b);
      return _0x39f1bb;
    });
  } else {
    const _0x46f019 = JSON["parse"](JSON["stringify"](_0x1d354c));

    (_0x46f019 === null || _0x46f019 === void 0 ? void 0 : _0x46f019["createdAt"]) && (_0x46f019['createdAt'] = dayjs(_0x46f019["createdAt"])["format"](_0x72457b));
    (_0x46f019 === null || _0x46f019 === void 0 ? void 0 : _0x46f019["updatedAt"]) && (_0x46f019['updatedAt'] = dayjs(_0x46f019["updatedAt"])['format'](_0x72457b));
    return _0x46f019;
  }
}

exports["formatCreateOrUpdateDate"] = formatCreateOrUpdateDate;

function isExpired(_0x207c5f, _0x242786) {
  const _0x320926 = new Date(_0x207c5f["getTime"]() + _0x242786 * 24 * 60 * 60 * 1000),
        _0x3b1a1b = new Date();

  return _0x3b1a1b > _0x320926;
}

exports['isExpired'] = isExpired;
exports["default"] = dayjs;