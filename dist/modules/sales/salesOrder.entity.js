'use strict';

var __decorate = this && this["__decorate"] || function (_0x501c8d, _0xc35753, _0x5815e6, _0x520ffd) {
  var _0x27d616 = arguments['length'],
      _0x1608a5 = _0x27d616 < 3 ? _0xc35753 : _0x520ffd === null ? _0x520ffd = Object["getOwnPropertyDescriptor"](_0xc35753, _0x5815e6) : _0x520ffd,
      _0x77fb30;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === 'function') {
    _0x1608a5 = Reflect['decorate'](_0x501c8d, _0xc35753, _0x5815e6, _0x520ffd);
  } else {
    for (var _0x13112d = _0x501c8d["length"] - 1; _0x13112d >= 0; _0x13112d--) {
      if (_0x77fb30 = _0x501c8d[_0x13112d]) {
        _0x1608a5 = (_0x27d616 < 3 ? _0x77fb30(_0x1608a5) : _0x27d616 > 3 ? _0x77fb30(_0xc35753, _0x5815e6, _0x1608a5) : _0x77fb30(_0xc35753, _0x5815e6)) || _0x1608a5;
      }
    }
  }

  _0x27d616 > 3 && _0x1608a5 && Object["defineProperty"](_0xc35753, _0x5815e6, _0x1608a5);
  return _0x1608a5;
},
    __metadata = this && this["__metadata"] || function (_0x35a8c7, _0x245a64) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x35a8c7, _0x245a64);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SalesOrderEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let SalesOrderEntity = class SalesOrderEntity extends baseEntity_1['BaseEntity'] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "申请提现人用户Id"
}), __metadata("design:type", Number)], SalesOrderEntity["prototype"], "userId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "申请提现的金额"
}), __metadata("design:type", Number)], SalesOrderEntity["prototype"], 'withdrawalAmount', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "工单状态"
}), __metadata("design:type", Number)], SalesOrderEntity["prototype"], 'orderStatus', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '审核状态'
}), __metadata("design:type", Number)], SalesOrderEntity['prototype'], "auditStatus", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "审核人",
  'nullable': true
}), __metadata("design:type", Number)], SalesOrderEntity["prototype"], "auditUserId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "打款状态",
  'nullable': true
}), __metadata("design:type", Number)], SalesOrderEntity["prototype"], "paymentStatus", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "提现渠道 1: 支付宝 2： 微信",
  'nullable': true
}), __metadata("design:type", Number)], SalesOrderEntity["prototype"], 'withdrawalChannels', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "提现联系信息、备注即可",
  'nullable': true
}), __metadata("design:type", String)], SalesOrderEntity['prototype'], "contactInformation", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "提现备注留言",
  'nullable': true
}), __metadata('design:type', String)], SalesOrderEntity["prototype"], "remark", void 0);

SalesOrderEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "sales_order"
})], SalesOrderEntity);
exports["SalesOrderEntity"] = SalesOrderEntity;