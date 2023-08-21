'use strict';

var __decorate = this && this["__decorate"] || function (_0x2c1f78, _0x2eafb1, _0x26e11c, _0x8f16dd) {
  var _0x2408db = arguments["length"],
      _0x4754f7 = _0x2408db < 3 ? _0x2eafb1 : _0x8f16dd === null ? _0x8f16dd = Object["getOwnPropertyDescriptor"](_0x2eafb1, _0x26e11c) : _0x8f16dd,
      _0x3a602b;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x4754f7 = Reflect["decorate"](_0x2c1f78, _0x2eafb1, _0x26e11c, _0x8f16dd);
  } else {
    for (var _0x1d6467 = _0x2c1f78['length'] - 1; _0x1d6467 >= 0; _0x1d6467--) {
      if (_0x3a602b = _0x2c1f78[_0x1d6467]) {
        _0x4754f7 = (_0x2408db < 3 ? _0x3a602b(_0x4754f7) : _0x2408db > 3 ? _0x3a602b(_0x2eafb1, _0x26e11c, _0x4754f7) : _0x3a602b(_0x2eafb1, _0x26e11c)) || _0x4754f7;
      }
    }
  }

  _0x2408db > 3 && _0x4754f7 && Object["defineProperty"](_0x2eafb1, _0x26e11c, _0x4754f7);
  return _0x4754f7;
},
    __metadata = this && this["__metadata"] || function (_0x36db1e, _0x1163f6) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x36db1e, _0x1163f6);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UserBalanceEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let UserBalanceEntity = class UserBalanceEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': '用户ID'
}), __metadata("design:type", Number)], UserBalanceEntity['prototype'], 'userId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "充值的套餐包含的模型3次数",
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], "model3Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "充值的套餐包含的模型4次数",
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity['prototype'], 'model4Count', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '充值的套餐包含的MJ绘画次数',
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], "drawMjCount", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '当前使用的套餐ID',
  'default': 0,
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity['prototype'], "packageId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "会员模型3额度",
  'default': 0,
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], "memberModel3Count", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '会员模型4额度',
  'default': 0,
  'nullable': true
}), __metadata('design:type', Number)], UserBalanceEntity['prototype'], 'memberModel4Count', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "会员MJ绘画额度",
  'default': 0,
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], "memberDrawMjCount", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "已经使用的对话3的模型次数",
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], "useModel3Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "已经使用的对话4的模型次数",
  'nullable': true
}), __metadata('design:type', Number)], UserBalanceEntity["prototype"], 'useModel4Count', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "已经使用的对话3的模型Token",
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], "useModel3Token", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "已经使用的对话4的模型Token",
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity['prototype'], "useModel4Token", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "已经使用的MJ绘画Token",
  'nullable': true
}), __metadata("design:type", Number)], UserBalanceEntity["prototype"], 'useDrawMjToken', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "扩展字段",
  'nullable': true
}), __metadata("design:type", String)], UserBalanceEntity['prototype'], "extent", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "会员到期时间 0：不是 1：是",
  'nullable': true
}), __metadata("design:type", Date)], UserBalanceEntity['prototype'], "expirationTime", void 0);

UserBalanceEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': 'user_balances'
})], UserBalanceEntity);
exports['UserBalanceEntity'] = UserBalanceEntity;