'use strict';

var __decorate = this && this['__decorate'] || function (_0x9c5789, _0x45ccfd, _0x447fab, _0x2cad08) {
  var _0xebc04e = arguments["length"],
      _0x2a9859 = _0xebc04e < 3 ? _0x45ccfd : _0x2cad08 === null ? _0x2cad08 = Object["getOwnPropertyDescriptor"](_0x45ccfd, _0x447fab) : _0x2cad08,
      _0x2849f7;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === 'function') {
    _0x2a9859 = Reflect["decorate"](_0x9c5789, _0x45ccfd, _0x447fab, _0x2cad08);
  } else {
    for (var _0x3c24bf = _0x9c5789['length'] - 1; _0x3c24bf >= 0; _0x3c24bf--) {
      if (_0x2849f7 = _0x9c5789[_0x3c24bf]) {
        _0x2a9859 = (_0xebc04e < 3 ? _0x2849f7(_0x2a9859) : _0xebc04e > 3 ? _0x2849f7(_0x45ccfd, _0x447fab, _0x2a9859) : _0x2849f7(_0x45ccfd, _0x447fab)) || _0x2a9859;
      }
    }
  }

  _0xebc04e > 3 && _0x2a9859 && Object["defineProperty"](_0x45ccfd, _0x447fab, _0x2a9859);
  return _0x2a9859;
},
    __metadata = this && this["__metadata"] || function (_0x307b77, _0x51be92) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x307b77, _0x51be92);
  }
},
    __param = this && this["__param"] || function (_0x272971, _0x372275) {
  return function (_0x40feb2, _0x4fd539) {
    _0x372275(_0x40feb2, _0x4fd539, _0x272971);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["MidjourneyController"] = void 0;

const superAuth_guard_1 = require("../../common/auth/superAuth.guard"),
      midjourney_service_1 = require('./midjourney.service'),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      common_1 = require('@nestjs/common'),
      swagger_1 = require("@nestjs/swagger"),
      axios_1 = require('axios'),
      getList_dto_1 = require("./dto/getList.dto"),
      adminAuth_guard_1 = require('../../common/auth/adminAuth.guard');

let MidjourneyController = class MidjourneyController {
  constructor(_0x5e438b) {
    this["midjourneyService"] = _0x5e438b;
  }

  async ["getDrawList"](_0x1ba9c8, _0x53e1f8) {
    return await this["midjourneyService"]["getDrawList"](_0x1ba9c8, _0x53e1f8);
  }

  async ["getList"](_0x4b817d) {
    return await this["midjourneyService"]['getList'](_0x4b817d);
  }

  async ["getAdminDrawList"](_0x2ef7e5, _0x21bbfb) {
    return await this["midjourneyService"]["getAdminDrawList"](_0x2ef7e5, _0x21bbfb);
  }

  async ['recDraw'](_0x515bf1) {
    return await this["midjourneyService"]["recDraw"](_0x515bf1);
  }

  async ["download"](_0x1a0426, _0x14c8aa) {
    console["log"]("url: ", _0x1a0426);

    const _0x32048f = await axios_1['default']["get"](_0x1a0426, {
      'responseType': "arraybuffer"
    }),
          _0x286a52 = Buffer["from"](_0x32048f["data"], 'binary');

    _0x14c8aa['set']({
      'Content-Type': 'image/png'
    });

    _0x14c8aa["send"](_0x286a52);
  }

  async ["deleteDraw"](_0x421ed6, _0x4b821e) {
    return await this["midjourneyService"]["deleteDraw"](_0x421ed6, _0x4b821e);
  }

  async ["delLog"](_0x51d555, _0x3df6df) {
    return await this['midjourneyService']["delLog"](_0x51d555, _0x3df6df);
  }

};

__decorate([(0, common_1["Get"])("drawList"), (0, swagger_1['ApiOperation'])({
  'summary': "获取我的绘画列表"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1['JwtAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1['Query'])()), __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], "getDrawList", null);

__decorate([(0, common_1["Get"])("getList"), (0, swagger_1["ApiOperation"])({
  'summary': "获取绘画列表"
}), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [getList_dto_1['GetListDto']]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], "getList", null);

__decorate([(0, common_1["Get"])("adminDrawList"), (0, swagger_1["ApiOperation"])({
  'summary': "管理端获取绘画列表"
}), (0, common_1['UseGuards'])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, getList_dto_1["GetListDto"]]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], "getAdminDrawList", null);

__decorate([(0, common_1['Post'])("rec"), (0, swagger_1["ApiOperation"])({
  'summary': '推荐图片'
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], "recDraw", null);

__decorate([(0, common_1['Post'])("download"), (0, swagger_1["ApiOperation"])({
  'summary': "下载绘画"
}), __param(0, (0, common_1["Body"])("url")), __param(1, (0, common_1["Res"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [String, Object]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], 'download', null);

__decorate([(0, common_1["Post"])('delete'), (0, swagger_1["ApiOperation"])({
  'summary': "删除绘画"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])('id')), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Object]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], "deleteDraw", null);

__decorate([(0, common_1["Post"])("del"), (0, swagger_1["ApiOperation"])({
  'summary': "删除log"
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [Object, Object]), __metadata("design:returntype", Promise)], MidjourneyController["prototype"], "delLog", null);

MidjourneyController = __decorate([(0, common_1['Controller'])("midjourney"), __metadata("design:paramtypes", [midjourney_service_1["MidjourneyService"]])], MidjourneyController);
exports["MidjourneyController"] = MidjourneyController;