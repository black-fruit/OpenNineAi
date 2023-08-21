'use strict';

var __decorate = this && this["__decorate"] || function (_0x2b2758, _0x267bd0, _0x24c8db, _0x2ac259) {
  var _0x2daf9b = arguments['length'],
      _0x2172b0 = _0x2daf9b < 3 ? _0x267bd0 : _0x2ac259 === null ? _0x2ac259 = Object["getOwnPropertyDescriptor"](_0x267bd0, _0x24c8db) : _0x2ac259,
      _0x310ceb;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x2172b0 = Reflect["decorate"](_0x2b2758, _0x267bd0, _0x24c8db, _0x2ac259);
  } else {
    for (var _0x5cab47 = _0x2b2758["length"] - 1; _0x5cab47 >= 0; _0x5cab47--) {
      if (_0x310ceb = _0x2b2758[_0x5cab47]) {
        _0x2172b0 = (_0x2daf9b < 3 ? _0x310ceb(_0x2172b0) : _0x2daf9b > 3 ? _0x310ceb(_0x267bd0, _0x24c8db, _0x2172b0) : _0x310ceb(_0x267bd0, _0x24c8db)) || _0x2172b0;
      }
    }
  }

  _0x2daf9b > 3 && _0x2172b0 && Object["defineProperty"](_0x267bd0, _0x24c8db, _0x2172b0);
  return _0x2172b0;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["TypeOrmQueryFailedFilter"] = void 0;

const common_1 = require('@nestjs/common'),
      typeorm_1 = require("typeorm");

let TypeOrmQueryFailedFilter = class TypeOrmQueryFailedFilter {
  ["catch"](_0x18910c, _0x345512) {
    const _0x8c2bbc = _0x345512['switchToHttp'](),
          _0x1ce716 = _0x8c2bbc["getResponse"](),
          _0x51eb88 = _0x8c2bbc["getRequest"]();

    if (_0x18910c["code"] === 'ER_DUP_ENTRY') {
      throw new common_1["BadRequestException"]("该记录已经存在，请勿重复添加！");
    } else {
      console["log"]("other query error");
    }

    _0x1ce716['status'](500)["json"]({
      'statusCode': 500,
      'timestamp': new Date()["toISOString"](),
      'path': _0x51eb88['url'],
      'message': "Database query failed: " + _0x18910c["message"]
    });
  }

};
TypeOrmQueryFailedFilter = __decorate([(0, common_1['Catch'])(typeorm_1["QueryFailedError"])], TypeOrmQueryFailedFilter);
exports['TypeOrmQueryFailedFilter'] = TypeOrmQueryFailedFilter;