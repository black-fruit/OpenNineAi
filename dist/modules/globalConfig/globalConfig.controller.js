'use strict';

var __decorate = this && this["__decorate"] || function (_0xfecd6f, _0x2d2671, _0x2ad65f, _0x28e6db) {
  var _0x6dc399 = arguments['length'],
      _0x9a0423 = _0x6dc399 < 3 ? _0x2d2671 : _0x28e6db === null ? _0x28e6db = Object["getOwnPropertyDescriptor"](_0x2d2671, _0x2ad65f) : _0x28e6db,
      _0x41f7b4;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x9a0423 = Reflect["decorate"](_0xfecd6f, _0x2d2671, _0x2ad65f, _0x28e6db);
  } else {
    for (var _0x1dc50e = _0xfecd6f["length"] - 1; _0x1dc50e >= 0; _0x1dc50e--) {
      if (_0x41f7b4 = _0xfecd6f[_0x1dc50e]) {
        _0x9a0423 = (_0x6dc399 < 3 ? _0x41f7b4(_0x9a0423) : _0x6dc399 > 3 ? _0x41f7b4(_0x2d2671, _0x2ad65f, _0x9a0423) : _0x41f7b4(_0x2d2671, _0x2ad65f)) || _0x9a0423;
      }
    }
  }

  _0x6dc399 > 3 && _0x9a0423 && Object['defineProperty'](_0x2d2671, _0x2ad65f, _0x9a0423);
  return _0x9a0423;
},
    __metadata = this && this["__metadata"] || function (_0x45d1da, _0x3d24f9) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x45d1da, _0x3d24f9);
  }
},
    __param = this && this["__param"] || function (_0x3863d5, _0x2f1a90) {
  return function (_0xf403be, _0xd2b397) {
    _0x2f1a90(_0xf403be, _0xd2b397, _0x3863d5);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["GlobalConfigController"] = void 0;

const swagger_1 = require("@nestjs/swagger"),
      setConfig_dto_1 = require("./dto/setConfig.dto"),
      globalConfig_service_1 = require("./globalConfig.service"),
      common_1 = require('@nestjs/common'),
      queryConfig_dto_1 = require("./dto/queryConfig.dto"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard");

let GlobalConfigController = class GlobalConfigController {
  constructor(_0x4d16f3) {
    this["globalConfigService"] = _0x4d16f3;
  }

  ["queryAllConfig"](_0x2b394c) {
    return this["globalConfigService"]["queryAllConfig"](_0x2b394c);
  }

  ["queryFrontConfig"](_0x3ba9e0) {
    return this["globalConfigService"]["queryFrontConfig"](_0x3ba9e0);
  }

  ["queryGptKeys"](_0x873c9b) {
    return this['globalConfigService']['queryGptKeys'](_0x873c9b);
  }

  ["setGptKeys"](_0x15d58f) {
    return this["globalConfigService"]["setGptKeys"](_0x15d58f);
  }

  ["queryConfig"](_0x223919, _0x39318e) {
    return this["globalConfigService"]["queryConfig"](_0x223919, _0x39318e);
  }

  ["notice"](_0x32162c) {
    return this["globalConfigService"]["notice"](_0x32162c);
  }

  ["setConfig"](_0x4eb27a) {
    return this["globalConfigService"]["setConfig"](_0x4eb27a);
  }

  ["queryNotice"]() {
    return this['globalConfigService']["queryNotice"]();
  }

};

__decorate([(0, swagger_1["ApiOperation"])({
  'summary': '查询所有配置'
}), (0, common_1['Get'])("queryAll"), (0, common_1['UseGuards'])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], GlobalConfigController["prototype"], 'queryAllConfig', null);

__decorate([(0, swagger_1["ApiOperation"])({
  'summary': '查询前端网站的所有配置'
}), (0, common_1['Get'])("queryFronet"), __param(0, (0, common_1['Query'])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], GlobalConfigController["prototype"], "queryFrontConfig", null);

__decorate([(0, swagger_1['ApiOperation'])({
  'summary': "查询所有gpt的key"
}), (0, common_1["Get"])("queryGptKeys"), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata('design:returntype', void 0)], GlobalConfigController["prototype"], 'queryGptKeys', null);

__decorate([(0, swagger_1["ApiOperation"])({
  'summary': "设置gpt的key"
}), (0, common_1["Post"])("setGptKeys"), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [Object]), __metadata("design:returntype", void 0)], GlobalConfigController['prototype'], "setGptKeys", null);

__decorate([(0, swagger_1['ApiOperation'])({
  'summary': '查询所有配置'
}), (0, common_1["Post"])('query'), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryConfig_dto_1["QueryConfigDto"], Object]), __metadata("design:returntype", void 0)], GlobalConfigController['prototype'], "queryConfig", null);

__decorate([(0, swagger_1["ApiOperation"])({
  'summary': "查询公告"
}), (0, common_1["Get"])("note"), __param(0, (0, common_1["Query"])('notice')), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], GlobalConfigController['prototype'], "notice", null);

__decorate([(0, swagger_1["ApiOperation"])({
  'summary': '设置配置信息'
}), (0, common_1['Post'])("set"), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata('design:paramtypes', [setConfig_dto_1['SetConfigDto']]), __metadata('design:returntype', void 0)], GlobalConfigController["prototype"], "setConfig", null);

__decorate([(0, swagger_1["ApiOperation"])({
  'summary': "用户端查询公告信息"
}), (0, common_1["Get"])("notice"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], GlobalConfigController["prototype"], 'queryNotice', null);

GlobalConfigController = __decorate([(0, swagger_1["ApiTags"])("config"), (0, common_1["Controller"])("config"), __metadata('design:paramtypes', [globalConfig_service_1["GlobalConfigService"]])], GlobalConfigController);
exports["GlobalConfigController"] = GlobalConfigController;