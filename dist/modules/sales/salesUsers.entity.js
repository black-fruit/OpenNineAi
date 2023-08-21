'use strict';

var __decorate = this && this["__decorate"] || function (_0xbd923b, _0x13af29, _0x4ad674, _0x3abc7a) {
  var _0x240417 = arguments["length"],
      _0x215bff = _0x240417 < 3 ? _0x13af29 : _0x3abc7a === null ? _0x3abc7a = Object["getOwnPropertyDescriptor"](_0x13af29, _0x4ad674) : _0x3abc7a,
      _0x1e1006;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === 'function') {
    _0x215bff = Reflect['decorate'](_0xbd923b, _0x13af29, _0x4ad674, _0x3abc7a);
  } else {
    for (var _0x5ca6af = _0xbd923b['length'] - 1; _0x5ca6af >= 0; _0x5ca6af--) {
      if (_0x1e1006 = _0xbd923b[_0x5ca6af]) {
        _0x215bff = (_0x240417 < 3 ? _0x1e1006(_0x215bff) : _0x240417 > 3 ? _0x1e1006(_0x13af29, _0x4ad674, _0x215bff) : _0x1e1006(_0x13af29, _0x4ad674)) || _0x215bff;
      }
    }
  }

  _0x240417 > 3 && _0x215bff && Object["defineProperty"](_0x13af29, _0x4ad674, _0x215bff);
  return _0x215bff;
},
    __metadata = this && this['__metadata'] || function (_0x12b8b0, _0x34df2e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x12b8b0, _0x34df2e);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SalesUsersEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let SalesUsersEntity = class SalesUsersEntity extends baseEntity_1['BaseEntity'] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "分销人用户Id"
}), __metadata('design:type', Number)], SalesUsersEntity['prototype'], "userId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "分销人的提成比例"
}), __metadata("design:type", Number)], SalesUsersEntity["prototype"], 'performanceRatio', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "分销人的自定义称号等级",
  'nullable': true
}), __metadata("design:type", String)], SalesUsersEntity["prototype"], "salesOutletName", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "分销人账户总金额",
  'type': 'decimal',
  'scale': 2,
  'precision': 10,
  'default': 0
}), __metadata('design:type', Number)], SalesUsersEntity["prototype"], 'totalAmount', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "分销人账户已经提现金额",
  'type': 'decimal',
  'scale': 2,
  'precision': 10,
  'default': 0
}), __metadata("design:type", Number)], SalesUsersEntity['prototype'], "withdrawalAmount", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "分销人账户可提现金额",
  'type': 'decimal',
  'scale': 2,
  'precision': 10,
  'default': 0
}), __metadata('design:type', Number)], SalesUsersEntity['prototype'], 'distributionBalance', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '分销人账户正在提现的金额',
  'type': "decimal",
  'scale': 2,
  'precision': 10,
  'default': 0
}), __metadata("design:type", Number)], SalesUsersEntity["prototype"], "drawMoneyIn", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "累计成功提成的订单量",
  'default': 0
}), __metadata("design:type", Number)], SalesUsersEntity["prototype"], 'orderCount', void 0);

SalesUsersEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "sales_users"
})], SalesUsersEntity);
exports['SalesUsersEntity'] = SalesUsersEntity;