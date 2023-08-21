'use strict';

var __decorate = this && this["__decorate"] || function (_0x57b5ad, _0x360acc, _0x46ed4c, _0x631cff) {
  var _0x171b69 = arguments['length'],
      _0x2a06a5 = _0x171b69 < 3 ? _0x360acc : _0x631cff === null ? _0x631cff = Object["getOwnPropertyDescriptor"](_0x360acc, _0x46ed4c) : _0x631cff,
      _0x492eb8;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x2a06a5 = Reflect['decorate'](_0x57b5ad, _0x360acc, _0x46ed4c, _0x631cff);
  } else {
    for (var _0x408cbb = _0x57b5ad['length'] - 1; _0x408cbb >= 0; _0x408cbb--) {
      if (_0x492eb8 = _0x57b5ad[_0x408cbb]) {
        _0x2a06a5 = (_0x171b69 < 3 ? _0x492eb8(_0x2a06a5) : _0x171b69 > 3 ? _0x492eb8(_0x360acc, _0x46ed4c, _0x2a06a5) : _0x492eb8(_0x360acc, _0x46ed4c)) || _0x2a06a5;
      }
    }
  }

  _0x171b69 > 3 && _0x2a06a5 && Object["defineProperty"](_0x360acc, _0x46ed4c, _0x2a06a5);
  return _0x2a06a5;
},
    __metadata = this && this['__metadata'] || function (_0x4c39f2, _0x2b296b) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x4c39f2, _0x2b296b);
  }
},
    __param = this && this['__param'] || function (_0x2cbf3c, _0x2b7b0d) {
  return function (_0x532237, _0x486629) {
    _0x2b7b0d(_0x532237, _0x486629, _0x2cbf3c);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["UserBalanceController"] = void 0;

const common_1 = require("@nestjs/common"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      swagger_1 = require("@nestjs/swagger"),
      userBalance_service_1 = require("./userBalance.service"),
      superAuth_guard_1 = require('../../common/auth/superAuth.guard'),
      adminAuth_guard_1 = require('../../common/auth/adminAuth.guard');

let UserBalanceController = class UserBalanceController {
  constructor(_0x4d30c2) {
    this["userBalanceService"] = _0x4d30c2;
  }

  async ["getRechargeLog"](_0x3c9921, _0x431ef3) {
    return this['userBalanceService']['getRechargeLog'](_0x3c9921, _0x431ef3);
  }

  async ['getAccountLog'](_0x26d264, _0x7d4f2b) {
    return this["userBalanceService"]['getAccountLog'](_0x26d264, _0x7d4f2b);
  }

  async ["getBalance"](_0x4aa21a) {
    return this['userBalanceService']["queryUserBalance"](_0x4aa21a["user"]['id']);
  }

  async ["upgradeBalance"]() {
    return this["userBalanceService"]["upgradeBalance"]();
  }

};

__decorate([(0, common_1["Get"])("rechargeLog"), (0, swagger_1["ApiOperation"])({
  'summary': "获取个人充值记录"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1['Query'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", Promise)], UserBalanceController['prototype'], "getRechargeLog", null);

__decorate([(0, common_1['Get'])("accountLog"), (0, swagger_1["ApiOperation"])({
  'summary': "获取所有人账户记录"
}), (0, common_1['UseGuards'])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1['Query'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", Promise)], UserBalanceController["prototype"], "getAccountLog", null);

__decorate([(0, common_1['Get'])("query"), (0, swagger_1["ApiOperation"])({
  'summary': "获取个人余额信息"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], UserBalanceController['prototype'], "getBalance", null);

__decorate([(0, common_1['Post'])("upgradeBalance"), (0, swagger_1["ApiOperation"])({
  'summary': "升级V1.5 数据迁移job"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __metadata('design:type', Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], UserBalanceController["prototype"], "upgradeBalance", null);

UserBalanceController = __decorate([(0, swagger_1["ApiTags"])("balance"), (0, common_1["Controller"])("balance"), __metadata('design:paramtypes', [userBalance_service_1["UserBalanceService"]])], UserBalanceController);
exports['UserBalanceController'] = UserBalanceController;