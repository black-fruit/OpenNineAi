'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["Result"] = void 0;

class Result {
  constructor(_0x55ec07, _0x24aca2, _0x4f04e8, _0x1749c1) {
    this["code"] = _0x55ec07;
    this["data"] = _0x4f04e8;
    this['success'] = _0x24aca2;
    this["message"] = _0x1749c1;
  }

  static ["success"](_0x2184a0, _0x1bf081 = '请求成功') {
    return new Result(200, true, _0x2184a0, _0x1bf081);
  }

  static ["fail"](_0xd745fb, _0xedcb45 = "请求失败", _0x59e59f) {
    return new Result(_0xd745fb, false, _0x59e59f, _0xedcb45);
  }

}

exports["Result"] = Result;