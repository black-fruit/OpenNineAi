'use strict';

var __decorate = this && this['__decorate'] || function (_0x4327d3, _0x12b85d, _0x319b3f, _0x98557f) {
  var _0x1815d6 = arguments["length"],
      _0x253c1f = _0x1815d6 < 3 ? _0x12b85d : _0x98557f === null ? _0x98557f = Object["getOwnPropertyDescriptor"](_0x12b85d, _0x319b3f) : _0x98557f,
      _0xea1b82;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x253c1f = Reflect['decorate'](_0x4327d3, _0x12b85d, _0x319b3f, _0x98557f);
  } else {
    for (var _0x596826 = _0x4327d3["length"] - 1; _0x596826 >= 0; _0x596826--) {
      if (_0xea1b82 = _0x4327d3[_0x596826]) {
        _0x253c1f = (_0x1815d6 < 3 ? _0xea1b82(_0x253c1f) : _0x1815d6 > 3 ? _0xea1b82(_0x12b85d, _0x319b3f, _0x253c1f) : _0xea1b82(_0x12b85d, _0x319b3f)) || _0x253c1f;
      }
    }
  }

  _0x1815d6 > 3 && _0x253c1f && Object["defineProperty"](_0x12b85d, _0x319b3f, _0x253c1f);
  return _0x253c1f;
},
    __metadata = this && this["__metadata"] || function (_0x146f4e, _0x2de99f) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x146f4e, _0x2de99f);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["BalanceEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require('../../common/entity/baseEntity');

let BalanceEntity = class BalanceEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户ID"
}), __metadata("design:type", Number)], BalanceEntity["prototype"], 'userId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户账户余额"
}), __metadata('design:type', Number)], BalanceEntity['prototype'], "balance", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户使用次数余额"
}), __metadata("design:type", Number)], BalanceEntity["prototype"], "usesLeft", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "绘画使用次数余额"
}), __metadata('design:type', Number)], BalanceEntity['prototype'], "paintCount", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'comment': "用户总计使用的token数量"
}), __metadata("design:type", Number)], BalanceEntity["prototype"], 'useTokens', void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'comment': "用户总计使用的对话次数"
}), __metadata('design:type', Number)], BalanceEntity["prototype"], "useChats", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'comment': "用户总计使用的绘画次数"
}), __metadata("design:type", Number)], BalanceEntity['prototype'], "usePaints", void 0);

BalanceEntity = __decorate([(0, typeorm_1['Entity'])({
  'name': "balance"
})], BalanceEntity);
exports['BalanceEntity'] = BalanceEntity;