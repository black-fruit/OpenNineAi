'use strict';

var __decorate = this && this["__decorate"] || function (_0x38eb2a, _0x3407cd, _0x369df2, _0x4ba033) {
  var _0x3ead40 = arguments["length"],
      _0x3742bc = _0x3ead40 < 3 ? _0x3407cd : _0x4ba033 === null ? _0x4ba033 = Object['getOwnPropertyDescriptor'](_0x3407cd, _0x369df2) : _0x4ba033,
      _0x4ade22;

  if (typeof Reflect === "object" && typeof Reflect['decorate'] === "function") {
    _0x3742bc = Reflect["decorate"](_0x38eb2a, _0x3407cd, _0x369df2, _0x4ba033);
  } else {
    for (var _0x5d3dba = _0x38eb2a["length"] - 1; _0x5d3dba >= 0; _0x5d3dba--) {
      if (_0x4ade22 = _0x38eb2a[_0x5d3dba]) {
        _0x3742bc = (_0x3ead40 < 3 ? _0x4ade22(_0x3742bc) : _0x3ead40 > 3 ? _0x4ade22(_0x3407cd, _0x369df2, _0x3742bc) : _0x4ade22(_0x3407cd, _0x369df2)) || _0x3742bc;
      }
    }
  }

  _0x3ead40 > 3 && _0x3742bc && Object["defineProperty"](_0x3407cd, _0x369df2, _0x3742bc);
  return _0x3742bc;
},
    __metadata = this && this["__metadata"] || function (_0x577db2, _0x264ddd) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x577db2, _0x264ddd);
  }
},
    __param = this && this["__param"] || function (_0x11a6fc, _0x118fab) {
  return function (_0x44bd7d, _0x4d168e) {
    _0x118fab(_0x44bd7d, _0x4d168e, _0x11a6fc);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['OrderController'] = void 0;

const jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      common_1 = require('@nestjs/common'),
      swagger_1 = require("@nestjs/swagger"),
      order_service_1 = require("./order.service"),
      buy_dto_1 = require('./dto/buy.dto'),
      queryByOrder_dto_1 = require("./dto/queryByOrder.dto"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      queryAllOrder_dto_1 = require("./dto/queryAllOrder.dto");

let OrderController = class OrderController {
  constructor(_0x13202f) {
    this['orderService'] = _0x13202f;
  }

  async ["buy"](_0x1ddd3d, _0x364f6b) {
    return this['orderService']["buy"](_0x1ddd3d, _0x364f6b);
  }

  async ["queryByOrderId"](_0x4e5285, _0x145b1e) {
    const {
      "id": _0x301507
    } = _0x4e5285['user'];
    return this["orderService"]["queryByOrderId"](_0x4e5285, _0x145b1e);
  }

  async ['queryAllOrder'](_0x3b5b5e) {
    return this['orderService']["queryAllOrder"](_0x3b5b5e);
  }

  async ["deleteOrder"](_0x3e1d40) {
    return this['orderService']['deleteOrder'](_0x3e1d40);
  }

};

__decorate([(0, common_1["Post"])("buy"), (0, swagger_1["ApiOperation"])({
  'summary': "购买商品"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [buy_dto_1["BuyDto"], Object]), __metadata("design:returntype", Promise)], OrderController["prototype"], "buy", null);

__decorate([(0, common_1['Get'])('queryByOrderId'), (0, swagger_1["ApiOperation"])({
  'summary': "查询订单"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1['Query'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, queryByOrder_dto_1["QueryByOrderIdDto"]]), __metadata("design:returntype", Promise)], OrderController["prototype"], "queryByOrderId", null);

__decorate([(0, common_1["Get"])('queryAll'), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有订单"
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryAllOrder_dto_1["QuerAllOrderDto"]]), __metadata("design:returntype", Promise)], OrderController["prototype"], "queryAllOrder", null);

__decorate([(0, common_1["Post"])("delete"), (0, swagger_1['ApiOperation'])({
  'summary': "删除订单"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), __param(0, (0, common_1['Body'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [queryByOrder_dto_1["QueryByOrderIdDto"]]), __metadata("design:returntype", Promise)], OrderController["prototype"], "deleteOrder", null);

OrderController = __decorate([(0, swagger_1["ApiTags"])('Order'), (0, common_1['Controller'])("order"), __metadata("design:paramtypes", [order_service_1["OrderService"]])], OrderController);
exports["OrderController"] = OrderController;