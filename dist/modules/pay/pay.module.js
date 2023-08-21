'use strict';

var __decorate = this && this['__decorate'] || function (_0x10eea8, _0x595ba8, _0x50f867, _0x363508) {
  var _0x22029b = arguments['length'],
      _0x47daf3 = _0x22029b < 3 ? _0x595ba8 : _0x363508 === null ? _0x363508 = Object['getOwnPropertyDescriptor'](_0x595ba8, _0x50f867) : _0x363508,
      _0x2d2e75;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === 'function') {
    _0x47daf3 = Reflect['decorate'](_0x10eea8, _0x595ba8, _0x50f867, _0x363508);
  } else {
    for (var _0x80b63f = _0x10eea8['length'] - 1; _0x80b63f >= 0; _0x80b63f--) {
      if (_0x2d2e75 = _0x10eea8[_0x80b63f]) {
        _0x47daf3 = (_0x22029b < 3 ? _0x2d2e75(_0x47daf3) : _0x22029b > 3 ? _0x2d2e75(_0x595ba8, _0x50f867, _0x47daf3) : _0x2d2e75(_0x595ba8, _0x50f867)) || _0x47daf3;
      }
    }
  }

  _0x22029b > 3 && _0x47daf3 && Object["defineProperty"](_0x595ba8, _0x50f867, _0x47daf3);
  return _0x47daf3;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["PayModule"] = void 0;

const common_1 = require("@nestjs/common"),
      pay_controller_1 = require('./pay.controller'),
      pay_service_1 = require("./pay.service"),
      order_entity_1 = require("../order/order.entity"),
      cramiPackage_entity_1 = require("../crami/cramiPackage.entity"),
      typeorm_1 = require("@nestjs/typeorm");

let PayModule = class PayModule {};
PayModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]['forFeature']([order_entity_1['OrderEntity'], cramiPackage_entity_1['CramiPackageEntity']])],
  'controllers': [pay_controller_1['PayController']],
  'providers': [pay_service_1["PayService"]],
  'exports': [pay_service_1["PayService"]]
})], PayModule);
exports["PayModule"] = PayModule;