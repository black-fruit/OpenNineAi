'use strict';

var __decorate = this && this['__decorate'] || function (_0x540ddf, _0x5e419b, _0x2e87ca, _0x1b426c) {
  var _0x44ce0e = arguments["length"],
      _0x2e46be = _0x44ce0e < 3 ? _0x5e419b : _0x1b426c === null ? _0x1b426c = Object["getOwnPropertyDescriptor"](_0x5e419b, _0x2e87ca) : _0x1b426c,
      _0x53f5eb;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x2e46be = Reflect['decorate'](_0x540ddf, _0x5e419b, _0x2e87ca, _0x1b426c);
  } else {
    for (var _0x884862 = _0x540ddf["length"] - 1; _0x884862 >= 0; _0x884862--) {
      if (_0x53f5eb = _0x540ddf[_0x884862]) {
        _0x2e46be = (_0x44ce0e < 3 ? _0x53f5eb(_0x2e46be) : _0x44ce0e > 3 ? _0x53f5eb(_0x5e419b, _0x2e87ca, _0x2e46be) : _0x53f5eb(_0x5e419b, _0x2e87ca)) || _0x2e46be;
      }
    }
  }

  _0x44ce0e > 3 && _0x2e46be && Object["defineProperty"](_0x5e419b, _0x2e87ca, _0x2e46be);
  return _0x2e46be;
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["OrderModule"] = void 0;

const cramiPackage_entity_1 = require("./../crami/cramiPackage.entity"),
      common_1 = require("@nestjs/common"),
      order_controller_1 = require("./order.controller"),
      order_service_1 = require('./order.service'),
      order_entity_1 = require("./order.entity"),
      typeorm_1 = require("@nestjs/typeorm"),
      user_entity_1 = require("../user/user.entity");

let OrderModule = class OrderModule {};
OrderModule = __decorate([(0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([order_entity_1["OrderEntity"], cramiPackage_entity_1["CramiPackageEntity"], user_entity_1['UserEntity']])],
  'controllers': [order_controller_1["OrderController"]],
  'providers': [order_service_1["OrderService"]]
})], OrderModule);
exports["OrderModule"] = OrderModule;