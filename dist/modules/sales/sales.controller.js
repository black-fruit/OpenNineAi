'use strict';

var __decorate = this && this["__decorate"] || function (_0x30bbc2, _0x1764bd, _0x54ce18, _0x375123) {
  var _0x32ff46 = arguments["length"],
      _0x442f72 = _0x32ff46 < 3 ? _0x1764bd : _0x375123 === null ? _0x375123 = Object["getOwnPropertyDescriptor"](_0x1764bd, _0x54ce18) : _0x375123,
      _0x5bab45;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x442f72 = Reflect["decorate"](_0x30bbc2, _0x1764bd, _0x54ce18, _0x375123);
  } else {
    for (var _0x5632c5 = _0x30bbc2["length"] - 1; _0x5632c5 >= 0; _0x5632c5--) {
      if (_0x5bab45 = _0x30bbc2[_0x5632c5]) {
        _0x442f72 = (_0x32ff46 < 3 ? _0x5bab45(_0x442f72) : _0x32ff46 > 3 ? _0x5bab45(_0x1764bd, _0x54ce18, _0x442f72) : _0x5bab45(_0x1764bd, _0x54ce18)) || _0x442f72;
      }
    }
  }

  _0x32ff46 > 3 && _0x442f72 && Object["defineProperty"](_0x1764bd, _0x54ce18, _0x442f72);
  return _0x442f72;
},
    __metadata = this && this["__metadata"] || function (_0x5e36dc, _0x26ed9d) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x5e36dc, _0x26ed9d);
  }
},
    __param = this && this['__param'] || function (_0x1a545c, _0x17fe60) {
  return function (_0x3abfc3, _0x3a5e1a) {
    _0x17fe60(_0x3abfc3, _0x3a5e1a, _0x1a545c);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["SalesController"] = void 0;

const common_1 = require('@nestjs/common'),
      swagger_1 = require("@nestjs/swagger"),
      sales_service_1 = require("./sales.service"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      recordsQuery_dto_1 = require("./dto/recordsQuery.dto"),
      appForMoney_dto_1 = require("./dto/appForMoney.dto"),
      drawMoneyOrder_dto_1 = require("./dto/drawMoneyOrder.dto"),
      salesOrder_dto_1 = require("./dto/salesOrder.dto"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard"),
      auditOrder_dto_1 = require("./dto/auditOrder.dto"),
      salesUserList_dto_1 = require("./dto/salesUserList.dto"),
      updateUserSales_dto_1 = require("./dto/updateUserSales.dto");

let SalesController = class SalesController {
  constructor(_0x57050c) {
    this["salesService"] = _0x57050c;
  }

  async ["getMineAccount"](_0x453460) {
    return this["salesService"]["getMineAccount"](_0x453460);
  }

  async ["getMineRecords"](_0x15fa4a, _0x452f0a) {
    return this["salesService"]["getMineRecords"](_0x15fa4a, _0x452f0a);
  }

  async ["inviteRecords"](_0x28d570, _0x3002d2) {
    return this['salesService']['inviteRecords'](_0x28d570, _0x3002d2);
  }

  async ['appForMoney'](_0x1dfe28, _0x5b5906) {
    return this["salesService"]["appForMoney"](_0x1dfe28, _0x5b5906);
  }

  async ["drawMoneyOrder"](_0x1cc0d3, _0x33d68e) {
    return this["salesService"]["drawMoneyOrder"](_0x1cc0d3, _0x33d68e);
  }

  async ["salesOrder"](_0xe7246a, _0x39a36e) {
    return this["salesService"]["salesOrder"](_0xe7246a, _0x39a36e);
  }

  async ['auditOrder'](_0x134436, _0x2b3e6e) {
    return this["salesService"]["auditOrder"](_0x134436, _0x2b3e6e);
  }

  async ['salesUserList'](_0x4a4ed9, _0x5d6b54) {
    return this["salesService"]["salesUserList"](_0x4a4ed9, _0x5d6b54);
  }

  async ["updateUserSales"](_0x3f723d, _0x19e200) {
    return this['salesService']["updateUserSales"](_0x3f723d, _0x19e200);
  }

};

__decorate([(0, common_1["Get"])('mineAccount'), (0, swagger_1['ApiOperation'])({
  'summary': '获取个人分销账户'
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata("design:returntype", Promise)], SalesController["prototype"], "getMineAccount", null);

__decorate([(0, common_1["Get"])("mineRecords"), (0, swagger_1["ApiOperation"])({
  'summary': '获取个人推介记录'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, recordsQuery_dto_1["RecordsQueryDto"]]), __metadata("design:returntype", Promise)], SalesController["prototype"], "getMineRecords", null);

__decorate([(0, common_1["Get"])("inviteRecords"), (0, swagger_1['ApiOperation'])({
  'summary': "管理端获取个人推介记录"
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1['Query'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, recordsQuery_dto_1["RecordsQueryDto"]]), __metadata('design:returntype', Promise)], SalesController["prototype"], "inviteRecords", null);

__decorate([(0, common_1['Post'])('appForMoney'), (0, swagger_1["ApiOperation"])({
  'summary': "申请提现"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, appForMoney_dto_1['AppForMoneyDto']]), __metadata('design:returntype', Promise)], SalesController["prototype"], "appForMoney", null);

__decorate([(0, common_1['Get'])("drawMoneyOrder"), (0, swagger_1["ApiOperation"])({
  'summary': "获取个人提款工单列表"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, drawMoneyOrder_dto_1["drawMoneyOrderDto"]]), __metadata("design:returntype", Promise)], SalesController["prototype"], "drawMoneyOrder", null);

__decorate([(0, common_1["Get"])("salesOrder"), (0, swagger_1["ApiOperation"])({
  'summary': "管理端获取工单列表"
}), (0, common_1["UseGuards"])(adminAuth_guard_1['AdminAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, salesOrder_dto_1["salesOrderDto"]]), __metadata('design:returntype', Promise)], SalesController["prototype"], "salesOrder", null);

__decorate([(0, common_1["Post"])('auditOrder'), (0, swagger_1["ApiOperation"])({
  'summary': '审核工单'
}), (0, common_1["UseGuards"])(superAuth_guard_1['SuperAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1['Body'])()), __metadata('design:type', Function), __metadata('design:paramtypes', [Object, auditOrder_dto_1["AuditOrderDto"]]), __metadata("design:returntype", Promise)], SalesController["prototype"], "auditOrder", null);

__decorate([(0, common_1["Get"])('salesUserList'), (0, swagger_1["ApiOperation"])({
  'summary': "查询用户佣金账户"
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, salesUserList_dto_1["SalesUserListDto"]]), __metadata("design:returntype", Promise)], SalesController["prototype"], "salesUserList", null);

__decorate([(0, common_1["Post"])("updateUserSales"), (0, swagger_1["ApiOperation"])({
  'summary': "修改用户佣金账户"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, updateUserSales_dto_1["UpdateUserSalesDto"]]), __metadata("design:returntype", Promise)], SalesController["prototype"], 'updateUserSales', null);

SalesController = __decorate([(0, swagger_1['ApiTags'])("sales"), (0, common_1["Controller"])("sales"), __metadata('design:paramtypes', [sales_service_1["SalesService"]])], SalesController);
exports["SalesController"] = SalesController;