'use strict';

var __decorate = this && this["__decorate"] || function (_0x3ff7df, _0x9af4e9, _0x145c7e, _0xcaba5e) {
  var _0x49fa7e = arguments["length"],
      _0xa4db16 = _0x49fa7e < 3 ? _0x9af4e9 : _0xcaba5e === null ? _0xcaba5e = Object['getOwnPropertyDescriptor'](_0x9af4e9, _0x145c7e) : _0xcaba5e,
      _0x1c7730;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0xa4db16 = Reflect["decorate"](_0x3ff7df, _0x9af4e9, _0x145c7e, _0xcaba5e);
  } else {
    for (var _0x3d5352 = _0x3ff7df['length'] - 1; _0x3d5352 >= 0; _0x3d5352--) {
      if (_0x1c7730 = _0x3ff7df[_0x3d5352]) {
        _0xa4db16 = (_0x49fa7e < 3 ? _0x1c7730(_0xa4db16) : _0x49fa7e > 3 ? _0x1c7730(_0x9af4e9, _0x145c7e, _0xa4db16) : _0x1c7730(_0x9af4e9, _0x145c7e)) || _0xa4db16;
      }
    }
  }

  _0x49fa7e > 3 && _0xa4db16 && Object["defineProperty"](_0x9af4e9, _0x145c7e, _0xa4db16);
  return _0xa4db16;
},
    __metadata = this && this['__metadata'] || function (_0x18cd98, _0x59e77e) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x18cd98, _0x59e77e);
  }
},
    __param = this && this["__param"] || function (_0x2e5a28, _0x40f23c) {
  return function (_0x47e487, _0x45a4f0) {
    _0x40f23c(_0x47e487, _0x45a4f0, _0x2e5a28);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['ChatGroupController'] = void 0;

const swagger_1 = require("@nestjs/swagger"),
      chatGroup_service_1 = require("./chatGroup.service"),
      common_1 = require("@nestjs/common"),
      createGroup_dto_1 = require("./dto/createGroup.dto"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      delGroup_dto_1 = require("./dto/delGroup.dto"),
      updateGroup_dto_1 = require("./dto/updateGroup.dto");

let ChatGroupController = class ChatGroupController {
  constructor(_0x2c5bbf) {
    this["chatGroupService"] = _0x2c5bbf;
  }

  ["create"](_0x18af0a, _0x183f90) {
    return this["chatGroupService"]["create"](_0x18af0a, _0x183f90);
  }

  ["query"](_0xd6eb5a) {
    return this["chatGroupService"]['query'](_0xd6eb5a);
  }

  ["update"](_0x371655, _0x343ef4) {
    return this["chatGroupService"]["update"](_0x371655, _0x343ef4);
  }

  ["del"](_0x2190ba, _0x486851) {
    return this["chatGroupService"]["del"](_0x2190ba, _0x486851);
  }

  ["delAll"](_0x4dc01b) {
    return this['chatGroupService']["delAll"](_0x4dc01b);
  }

};

__decorate([(0, common_1["Post"])('create'), (0, swagger_1['ApiOperation'])({
  'summary': '创建对话组'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1['JwtAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [createGroup_dto_1["CreateGroupDto"], Object]), __metadata('design:returntype', void 0)], ChatGroupController["prototype"], 'create', null);

__decorate([(0, common_1["Get"])("query"), (0, swagger_1["ApiOperation"])({
  'summary': "查询对话组"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], ChatGroupController["prototype"], 'query', null);

__decorate([(0, common_1['Post'])("update"), (0, swagger_1['ApiOperation'])({
  'summary': "更新对话组"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [updateGroup_dto_1['UpdateGroupDto'], Object]), __metadata("design:returntype", void 0)], ChatGroupController["prototype"], "update", null);

__decorate([(0, common_1["Post"])("del"), (0, swagger_1["ApiOperation"])({
  'summary': "删除对话组"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1['JwtAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [delGroup_dto_1['DelGroupDto'], Object]), __metadata('design:returntype', void 0)], ChatGroupController["prototype"], "del", null);

__decorate([(0, common_1["Post"])("delAll"), (0, swagger_1["ApiOperation"])({
  'summary': "删除对话组"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Req'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object]), __metadata('design:returntype', void 0)], ChatGroupController["prototype"], "delAll", null);

ChatGroupController = __decorate([(0, swagger_1["ApiTags"])("group"), (0, common_1['Controller'])("group"), __metadata("design:paramtypes", [chatGroup_service_1['ChatGroupService']])], ChatGroupController);
exports["ChatGroupController"] = ChatGroupController;