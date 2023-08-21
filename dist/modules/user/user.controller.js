'use strict';

var __decorate = this && this["__decorate"] || function (_0x4ee69c, _0x506a0c, _0x207938, _0x2a79b3) {
  var _0x30dcd3 = arguments["length"],
      _0x3495fa = _0x30dcd3 < 3 ? _0x506a0c : _0x2a79b3 === null ? _0x2a79b3 = Object['getOwnPropertyDescriptor'](_0x506a0c, _0x207938) : _0x2a79b3,
      _0x5aef09;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3495fa = Reflect["decorate"](_0x4ee69c, _0x506a0c, _0x207938, _0x2a79b3);
  } else {
    for (var _0x371d08 = _0x4ee69c["length"] - 1; _0x371d08 >= 0; _0x371d08--) {
      if (_0x5aef09 = _0x4ee69c[_0x371d08]) {
        _0x3495fa = (_0x30dcd3 < 3 ? _0x5aef09(_0x3495fa) : _0x30dcd3 > 3 ? _0x5aef09(_0x506a0c, _0x207938, _0x3495fa) : _0x5aef09(_0x506a0c, _0x207938)) || _0x3495fa;
      }
    }
  }

  _0x30dcd3 > 3 && _0x3495fa && Object["defineProperty"](_0x506a0c, _0x207938, _0x3495fa);
  return _0x3495fa;
},
    __metadata = this && this["__metadata"] || function (_0x260886, _0x2a1000) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x260886, _0x2a1000);
  }
},
    __param = this && this["__param"] || function (_0x18fb05, _0x5b2316) {
  return function (_0x497a57, _0x126971) {
    _0x5b2316(_0x497a57, _0x126971, _0x18fb05);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['UserController'] = void 0;

const user_service_1 = require("./user.service"),
      common_1 = require('@nestjs/common'),
      swagger_1 = require("@nestjs/swagger"),
      updateUser_dto_1 = require('./dto/updateUser.dto'),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      userRecharge_dto_1 = require("./dto/userRecharge.dto"),
      queryAllUser_dto_1 = require("./dto/queryAllUser.dto"),
      queryOne_dto_1 = require('./dto/queryOne.dto'),
      updateUserStatus_dto_1 = require("./dto/updateUserStatus.dto"),
      resetUserPass_dto_1 = require("./dto/resetUserPass.dto"),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard"),
      queryInviteRecord_dto_1 = require("./dto/queryInviteRecord.dto");

let UserController = class UserController {
  constructor(_0x3ea20d) {
    this['userService'] = _0x3ea20d;
  }

  async ['update'](_0x3a0c36, _0x16275a) {
    return await this["userService"]['updateInfo'](_0x3a0c36, _0x16275a);
  }

  async ["genInviteCode"](_0x4c11c1) {
    return await this["userService"]["genInviteCode"](_0x4c11c1);
  }

  async ["getInviteRecord"](_0x119c88, _0x512677) {
    return await this["userService"]["getInviteRecord"](_0x119c88, _0x512677);
  }

  async ["inviteLink"](_0x4d271a) {
    return await this["userService"]["inviteLink"](_0x4d271a);
  }

  async ['userRecharge'](_0x1d241e) {
    return await this['userService']["userRecharge"](_0x1d241e);
  }

  async ["queryAll"](_0x54ee70, _0x23986a) {
    return await this["userService"]["queryAll"](_0x54ee70, _0x23986a);
  }

  async ["queryOne"](_0x29fb4b) {
    return await this["userService"]['queryOne'](_0x29fb4b);
  }

  async ["updateStatus"](_0xfa1722) {
    return await this["userService"]["updateStatus"](_0xfa1722);
  }

  async ["resetUserPass"](_0x4657ae) {
    return await this['userService']["resetUserPass"](_0x4657ae);
  }

};

__decorate([(0, common_1['Post'])("update"), (0, swagger_1["ApiOperation"])({
  'summary': "更新用户信息"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1['JwtAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [updateUser_dto_1["UpdateUserDto"], Object]), __metadata("design:returntype", Promise)], UserController['prototype'], "update", null);

__decorate([(0, common_1['Post'])("genInviteCode"), (0, swagger_1["ApiOperation"])({
  'summary': "生成邀请码"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], UserController["prototype"], "genInviteCode", null);

__decorate([(0, common_1['Get'])("inviteRecord"), (0, swagger_1['ApiOperation'])({
  'summary': "获取我的邀请记录"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1['Query'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, queryInviteRecord_dto_1["queryInviteRecordDto"]]), __metadata("design:returntype", Promise)], UserController['prototype'], "getInviteRecord", null);

__decorate([(0, common_1["Get"])("inviteLink"), (0, swagger_1["ApiOperation"])({
  'summary': '邀请链接被点击'
}), __param(0, (0, common_1["Query"])("code")), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", Promise)], UserController["prototype"], 'inviteLink', null);

__decorate([(0, common_1["Post"])('recharge'), (0, swagger_1["ApiOperation"])({
  'summary': "用户充值"
}), (0, common_1["UseGuards"])(superAuth_guard_1['SuperAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [userRecharge_dto_1["UserRechargeDto"]]), __metadata("design:returntype", Promise)], UserController["prototype"], 'userRecharge', null);

__decorate([(0, common_1["Get"])('queryAll'), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有用户"
}), (0, common_1['UseGuards'])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Query'])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [queryAllUser_dto_1["QueryAllUserDto"], Object]), __metadata('design:returntype', Promise)], UserController['prototype'], 'queryAll', null);

__decorate([(0, common_1["Get"])("queryOne"), (0, swagger_1['ApiOperation'])({
  'summary': '查询单个用户'
}), (0, common_1["UseGuards"])(adminAuth_guard_1['AdminAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [queryOne_dto_1["QueryOneUserDto"]]), __metadata('design:returntype', Promise)], UserController["prototype"], "queryOne", null);

__decorate([(0, common_1["Post"])("updateStatus"), (0, swagger_1["ApiOperation"])({
  'summary': "更新用户状态"
}), (0, common_1['UseGuards'])(superAuth_guard_1['SuperAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [updateUserStatus_dto_1['UpdateUserStatusDto']]), __metadata("design:returntype", Promise)], UserController["prototype"], "updateStatus", null);

__decorate([(0, common_1['Post'])("resetUserPass"), (0, swagger_1["ApiOperation"])({
  'summary': '重置用户密码'
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [resetUserPass_dto_1["ResetUserPassDto"]]), __metadata('design:returntype', Promise)], UserController["prototype"], "resetUserPass", null);

UserController = __decorate([(0, common_1["Controller"])("user"), (0, swagger_1["ApiTags"])('user'), __metadata("design:paramtypes", [user_service_1["UserService"]])], UserController);
exports['UserController'] = UserController;