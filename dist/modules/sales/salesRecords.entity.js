'use strict';

var __decorate = this && this['__decorate'] || function (_0xfaf2f1, _0x51760c, _0x45f581, _0x5906f5) {
  var _0x48f128 = arguments["length"],
      _0x20bbb1 = _0x48f128 < 3 ? _0x51760c : _0x5906f5 === null ? _0x5906f5 = Object["getOwnPropertyDescriptor"](_0x51760c, _0x45f581) : _0x5906f5,
      _0x47cbbe;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x20bbb1 = Reflect["decorate"](_0xfaf2f1, _0x51760c, _0x45f581, _0x5906f5);
  } else {
    for (var _0x1065f0 = _0xfaf2f1["length"] - 1; _0x1065f0 >= 0; _0x1065f0--) {
      if (_0x47cbbe = _0xfaf2f1[_0x1065f0]) {
        _0x20bbb1 = (_0x48f128 < 3 ? _0x47cbbe(_0x20bbb1) : _0x48f128 > 3 ? _0x47cbbe(_0x51760c, _0x45f581, _0x20bbb1) : _0x47cbbe(_0x51760c, _0x45f581)) || _0x20bbb1;
      }
    }
  }

  _0x48f128 > 3 && _0x20bbb1 && Object["defineProperty"](_0x51760c, _0x45f581, _0x20bbb1);
  return _0x20bbb1;
},
    __metadata = this && this["__metadata"] || function (_0x3c083f, _0x50c47e) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x3c083f, _0x50c47e);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SalesRecordsEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let SalesRecordsEntity = class SalesRecordsEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "邀请人ID"
}), __metadata("design:type", Number)], SalesRecordsEntity["prototype"], "inviterUserId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "被邀请人ID"
}), __metadata("design:type", Number)], SalesRecordsEntity["prototype"], "inviteeUserId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "订单ID"
}), __metadata('design:type', String)], SalesRecordsEntity["prototype"], "orderId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "订单价格",
  'type': "decimal",
  'scale': 2,
  'precision': 10
}), __metadata('design:type', Number)], SalesRecordsEntity["prototype"], "orderPrice", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "佣金金额",
  'type': "decimal",
  'scale': 2,
  'precision': 10
}), __metadata('design:type', Number)], SalesRecordsEntity["prototype"], "commissionAmount", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '佣金比例',
  'type': "decimal",
  'scale': 2,
  'precision': 10
}), __metadata("design:type", Number)], SalesRecordsEntity["prototype"], "commissionPercentage", void 0);

SalesRecordsEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "sales_records"
})], SalesRecordsEntity);
exports['SalesRecordsEntity'] = SalesRecordsEntity;