'use strict';

var __decorate = this && this["__decorate"] || function (_0x3ba1d3, _0x28b7d4, _0x1ce0ed, _0x1c439b) {
  var _0x4981fe = arguments["length"],
      _0x8f3ff5 = _0x4981fe < 3 ? _0x28b7d4 : _0x1c439b === null ? _0x1c439b = Object['getOwnPropertyDescriptor'](_0x28b7d4, _0x1ce0ed) : _0x1c439b,
      _0x52759c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x8f3ff5 = Reflect["decorate"](_0x3ba1d3, _0x28b7d4, _0x1ce0ed, _0x1c439b);
  } else {
    for (var _0x54f6f8 = _0x3ba1d3["length"] - 1; _0x54f6f8 >= 0; _0x54f6f8--) {
      if (_0x52759c = _0x3ba1d3[_0x54f6f8]) {
        _0x8f3ff5 = (_0x4981fe < 3 ? _0x52759c(_0x8f3ff5) : _0x4981fe > 3 ? _0x52759c(_0x28b7d4, _0x1ce0ed, _0x8f3ff5) : _0x52759c(_0x28b7d4, _0x1ce0ed)) || _0x8f3ff5;
      }
    }
  }

  _0x4981fe > 3 && _0x8f3ff5 && Object['defineProperty'](_0x28b7d4, _0x1ce0ed, _0x8f3ff5);
  return _0x8f3ff5;
},
    __metadata = this && this["__metadata"] || function (_0x1e4201, _0x55dd92) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect['metadata'](_0x1e4201, _0x55dd92);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["AccountLogEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let AccountLogEntity = class AccountLogEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'comment': "用户ID"
}), __metadata('design:type', Number)], AccountLogEntity["prototype"], 'userId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '会员套餐名称',
  'nullable': true
}), __metadata("design:type", String)], AccountLogEntity['prototype'], "pkgName", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "推荐人ID、返佣用户ID",
  'nullable': true
}), __metadata('design:type', Number)], AccountLogEntity["prototype"], "rebateUserId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "充值套餐ID",
  'nullable': true
}), __metadata("design:type", Number)], AccountLogEntity['prototype'], 'packageId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "会员有效天数",
  'nullable': true
}), __metadata("design:type", Number)], AccountLogEntity["prototype"], 'memberDays', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "账户充值类型"
}), __metadata("design:type", Number)], AccountLogEntity['prototype'], "rechargeType", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "模型3对话次数"
}), __metadata("design:type", Number)], AccountLogEntity['prototype'], "model3Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "模型4对话次数"
}), __metadata("design:type", Number)], AccountLogEntity["prototype"], "model4Count", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "MJ绘画次数"
}), __metadata("design:type", Number)], AccountLogEntity["prototype"], 'drawMjCount', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "套餐有效期"
}), __metadata("design:type", Number)], AccountLogEntity['prototype'], 'days', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "随机订单uid"
}), __metadata("design:type", String)], AccountLogEntity["prototype"], "uid", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '扩展字段',
  'nullable': true
}), __metadata("design:type", String)], AccountLogEntity["prototype"], "extent", void 0);

AccountLogEntity = __decorate([(0, typeorm_1['Entity'])({
  'name': "account_log"
})], AccountLogEntity);
exports['AccountLogEntity'] = AccountLogEntity;