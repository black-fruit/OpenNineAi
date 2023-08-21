'use strict';

var __decorate = this && this['__decorate'] || function (_0x24acf, _0x1a5423, _0x53fe9d, _0x357e10) {
  var _0x36278e = arguments['length'],
      _0x2b3164 = _0x36278e < 3 ? _0x1a5423 : _0x357e10 === null ? _0x357e10 = Object["getOwnPropertyDescriptor"](_0x1a5423, _0x53fe9d) : _0x357e10,
      _0x2abf28;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x2b3164 = Reflect["decorate"](_0x24acf, _0x1a5423, _0x53fe9d, _0x357e10);
  } else {
    for (var _0x2987a4 = _0x24acf["length"] - 1; _0x2987a4 >= 0; _0x2987a4--) {
      if (_0x2abf28 = _0x24acf[_0x2987a4]) {
        _0x2b3164 = (_0x36278e < 3 ? _0x2abf28(_0x2b3164) : _0x36278e > 3 ? _0x2abf28(_0x1a5423, _0x53fe9d, _0x2b3164) : _0x2abf28(_0x1a5423, _0x53fe9d)) || _0x2b3164;
      }
    }
  }

  _0x36278e > 3 && _0x2b3164 && Object['defineProperty'](_0x1a5423, _0x53fe9d, _0x2b3164);
  return _0x2b3164;
},
    __metadata = this && this["__metadata"] || function (_0x2636a5, _0xc6ac0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x2636a5, _0xc6ac0);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['OrderEntity'] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let OrderEntity = class OrderEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'unique': true,
  'comment': "订单ID",
  'length': 64
}), __metadata("design:type", String)], OrderEntity["prototype"], "orderId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'unique': true,
  'comment': "交易ID（服务商）",
  'length': 32,
  'nullable': true
}), __metadata("design:type", String)], OrderEntity['prototype'], "tradeId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '支付平台【epay|hupi】）',
  'length': 32,
  'nullable': true
}), __metadata("design:type", String)], OrderEntity["prototype"], "payPlatform", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "用户ID",
  'nullable': true
}), __metadata("design:type", Number)], OrderEntity["prototype"], "userId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "商品ID",
  'nullable': true
}), __metadata("design:type", Number)], OrderEntity["prototype"], 'goodsId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '数量',
  'default': 1
}), __metadata("design:type", Number)], OrderEntity["prototype"], 'count', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "套餐价格￥",
  'type': 'decimal',
  'scale': 2,
  'precision': 10
}), __metadata('design:type', Number)], OrderEntity["prototype"], "price", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "订单总金额",
  'type': "decimal",
  'scale': 2,
  'precision': 10
}), __metadata("design:type", Number)], OrderEntity['prototype'], "total", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "订单状态（0：未支付、1：已支付、2、支付失败、3：支付超时）",
  'default': 0
}), __metadata("design:type", Number)], OrderEntity["prototype"], 'status', void 0);

__decorate([(0, typeorm_1["Column"])({
  'type': "datetime",
  'length': 0,
  'nullable': true,
  'comment': "支付时间"
}), __metadata("design:type", Date)], OrderEntity["prototype"], "paydAt", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '支付渠道）',
  'length': 32,
  'nullable': true
}), __metadata("design:type", String)], OrderEntity["prototype"], 'channel', void 0);

OrderEntity = __decorate([(0, typeorm_1['Entity'])({
  'name': 'order'
})], OrderEntity);
exports['OrderEntity'] = OrderEntity;