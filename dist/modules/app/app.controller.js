'use strict';

var __decorate = this && this['__decorate'] || function (_0x1b4feb, _0x3e9e3b, _0x38057a, _0x1c6ca1) {
  var _0x3e8423 = arguments["length"],
      _0x1e94f9 = _0x3e8423 < 3 ? _0x3e9e3b : _0x1c6ca1 === null ? _0x1c6ca1 = Object["getOwnPropertyDescriptor"](_0x3e9e3b, _0x38057a) : _0x1c6ca1,
      _0x4336c5;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x1e94f9 = Reflect["decorate"](_0x1b4feb, _0x3e9e3b, _0x38057a, _0x1c6ca1);
  } else {
    for (var _0x2df7f7 = _0x1b4feb["length"] - 1; _0x2df7f7 >= 0; _0x2df7f7--) {
      if (_0x4336c5 = _0x1b4feb[_0x2df7f7]) {
        _0x1e94f9 = (_0x3e8423 < 3 ? _0x4336c5(_0x1e94f9) : _0x3e8423 > 3 ? _0x4336c5(_0x3e9e3b, _0x38057a, _0x1e94f9) : _0x4336c5(_0x3e9e3b, _0x38057a)) || _0x1e94f9;
      }
    }
  }

  _0x3e8423 > 3 && _0x1e94f9 && Object["defineProperty"](_0x3e9e3b, _0x38057a, _0x1e94f9);
  return _0x1e94f9;
},
    __metadata = this && this['__metadata'] || function (_0x4a5259, _0x54c197) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x4a5259, _0x54c197);
  }
},
    __param = this && this["__param"] || function (_0x52097b, _0x19d607) {
  return function (_0x57f148, _0x78bb35) {
    _0x19d607(_0x57f148, _0x78bb35, _0x52097b);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['AppController'] = void 0;

const app_service_1 = require('./app.service'),
      common_1 = require("@nestjs/common"),
      swagger_1 = require("@nestjs/swagger"),
      createCats_dto_1 = require("./dto/createCats.dto"),
      updateCats_dto_1 = require("./dto/updateCats.dto"),
      deleteCats_dto_1 = require("./dto/deleteCats.dto"),
      queryCats_dto_1 = require("./dto/queryCats.dto"),
      createApp_dto_1 = require("./dto/createApp.dto"),
      updateApp_dto_1 = require("./dto/updateApp.dto"),
      deleteApp_dto_1 = require('./dto/deleteApp.dto'),
      queryApp_dto_1 = require("./dto/queryApp.dto"),
      superAuth_guard_1 = require('../../common/auth/superAuth.guard'),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      jwtAuth_guard_1 = require('../../common/auth/jwtAuth.guard'),
      collectApp_dto_1 = require("./dto/collectApp.dto"),
      custonApp_dto_1 = require("./dto/custonApp.dto");

let AppController = class AppController {
  constructor(_0x371776) {
    this["appService"] = _0x371776;
  }

  ['appCatsList'](_0x135ece) {
    return this["appService"]['appCatsList'](_0x135ece);
  }

  ["catsList"]() {
    const _0x1cd987 = {
      'status': 1,
      'page': 1,
      'size': 1000,
      'name': ''
    };
    return this["appService"]["appCatsList"](_0x1cd987);
  }

  ["createAppCat"](_0x1987d6) {
    return this["appService"]['createAppCat'](_0x1987d6);
  }

  ["updateAppCats"](_0x2e00d4) {
    return this["appService"]['updateAppCats'](_0x2e00d4);
  }

  ["delAppCat"](_0x42ac7f) {
    return this["appService"]["delAppCat"](_0x42ac7f);
  }

  ["appList"](_0x870bc0, _0x7f61d4) {
    return this["appService"]["appList"](_0x870bc0, _0x7f61d4);
  }

  ['list'](_0x329920, _0x417a65) {
    return this['appService']['frontAppList'](_0x329920, _0x417a65);
  }

  ["createApp"](_0x4428e6) {
    return this['appService']["createApp"](_0x4428e6);
  }

  ["customApp"](_0x213e5b, _0x43b297) {
    return this["appService"]["customApp"](_0x213e5b, _0x43b297);
  }

  ["updateApp"](_0x58c2eb) {
    return this["appService"]["updateApp"](_0x58c2eb);
  }

  ["delApp"](_0x1fbb2e) {
    return this["appService"]["delApp"](_0x1fbb2e);
  }

  ["auditPass"](_0x53a00b) {
    return this["appService"]["auditPass"](_0x53a00b);
  }

  ["auditFail"](_0x1769aa) {
    return this["appService"]["auditFail"](_0x1769aa);
  }

  ["delMineApp"](_0x884c1e, _0x325dd0) {
    return this["appService"]['delMineApp'](_0x884c1e, _0x325dd0);
  }

  ["collect"](_0x5d1ccb, _0x39758f) {
    return this['appService']["collect"](_0x5d1ccb, _0x39758f);
  }

  ['mineApps'](_0xd79520) {
    return this['appService']["mineApps"](_0xd79520);
  }

};

__decorate([(0, common_1["Get"])('queryAppCats'), (0, swagger_1["ApiOperation"])({
  'summary': '获取App分类列表'
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [queryCats_dto_1['QuerCatsDto']]), __metadata('design:returntype', void 0)], AppController["prototype"], 'appCatsList', null);

__decorate([(0, common_1["Get"])("queryCats"), (0, swagger_1["ApiOperation"])({
  'summary': '用户端获取App分类列表'
}), __metadata('design:type', Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], AppController["prototype"], "catsList", null);

__decorate([(0, common_1["Post"])('createAppCats'), (0, swagger_1["ApiOperation"])({
  'summary': "添加App分类"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [createCats_dto_1["CreateCatsDto"]]), __metadata("design:returntype", void 0)], AppController["prototype"], "createAppCat", null);

__decorate([(0, common_1["Post"])("updateAppCats"), (0, swagger_1['ApiOperation'])({
  'summary': "修改App分类"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [updateCats_dto_1["UpdateCatsDto"]]), __metadata("design:returntype", void 0)], AppController["prototype"], "updateAppCats", null);

__decorate([(0, common_1['Post'])('delAppCats'), (0, swagger_1["ApiOperation"])({
  'summary': "删除App分类"
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [deleteCats_dto_1["DeleteCatsDto"]]), __metadata('design:returntype', void 0)], AppController["prototype"], 'delAppCat', null);

__decorate([(0, common_1["Get"])('queryApp'), (0, swagger_1["ApiOperation"])({
  'summary': "获取App列表"
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, queryApp_dto_1["QuerAppDto"]]), __metadata("design:returntype", void 0)], AppController['prototype'], "appList", null);

__decorate([(0, common_1['Get'])('list'), (0, swagger_1['ApiOperation'])({
  'summary': '客户端获取App'
}), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1['Query'])()), __metadata("design:type", Function), __metadata('design:paramtypes', [Object, queryApp_dto_1["QuerAppDto"]]), __metadata("design:returntype", void 0)], AppController["prototype"], "list", null);

__decorate([(0, common_1["Post"])("createApp"), (0, swagger_1['ApiOperation'])({
  'summary': "添加App"
}), (0, common_1["UseGuards"])(superAuth_guard_1['SuperAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [createApp_dto_1['CreateAppDto']]), __metadata("design:returntype", void 0)], AppController["prototype"], "createApp", null);

__decorate([(0, common_1["Post"])("customApp"), (0, swagger_1['ApiOperation'])({
  'summary': "添加自定义App"
}), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [custonApp_dto_1['CustomAppDto'], Object]), __metadata("design:returntype", void 0)], AppController["prototype"], "customApp", null);

__decorate([(0, common_1["Post"])("updateApp"), (0, swagger_1["ApiOperation"])({
  'summary': "修改App"
}), (0, common_1["UseGuards"])(superAuth_guard_1['SuperAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [updateApp_dto_1["UpdateAppDto"]]), __metadata("design:returntype", void 0)], AppController['prototype'], "updateApp", null);

__decorate([(0, common_1['Post'])("delApp"), (0, swagger_1['ApiOperation'])({
  'summary': "删除App"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [deleteApp_dto_1['OperateAppDto']]), __metadata('design:returntype', void 0)], AppController['prototype'], "delApp", null);

__decorate([(0, common_1["Post"])("auditPass"), (0, swagger_1["ApiOperation"])({
  'summary': "审核通过App"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [deleteApp_dto_1["OperateAppDto"]]), __metadata("design:returntype", void 0)], AppController['prototype'], "auditPass", null);

__decorate([(0, common_1['Post'])("auditFail"), (0, swagger_1['ApiOperation'])({
  'summary': "审核拒绝App"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [deleteApp_dto_1['OperateAppDto']]), __metadata('design:returntype', void 0)], AppController["prototype"], "auditFail", null);

__decorate([(0, common_1["Post"])('delMineApp'), (0, swagger_1['ApiOperation'])({
  'summary': "删除个人App"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __param(1, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [deleteApp_dto_1["OperateAppDto"], Object]), __metadata("design:returntype", void 0)], AppController['prototype'], "delMineApp", null);

__decorate([(0, common_1["Post"])("collect"), (0, swagger_1["ApiOperation"])({
  'summary': '收藏/取消收藏App'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [collectApp_dto_1['CollectAppDto'], Object]), __metadata("design:returntype", void 0)], AppController['prototype'], "collect", null);

__decorate([(0, common_1["Get"])("mineApps"), (0, swagger_1["ApiOperation"])({
  'summary': '我的收藏'
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Req"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata('design:returntype', void 0)], AppController["prototype"], "mineApps", null);

AppController = __decorate([(0, swagger_1['ApiTags'])("App"), (0, common_1["Controller"])("app"), __metadata('design:paramtypes', [app_service_1["AppService"]])], AppController);
exports["AppController"] = AppController;