'use strict';

var __decorate = this && this["__decorate"] || function (_0xff9434, _0x47253f, _0x47ce0c, _0x22e529) {
  var _0x33ad82 = arguments["length"],
      _0x3fbc41 = _0x33ad82 < 3 ? _0x47253f : _0x22e529 === null ? _0x22e529 = Object["getOwnPropertyDescriptor"](_0x47253f, _0x47ce0c) : _0x22e529,
      _0x9fcfe7;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x3fbc41 = Reflect["decorate"](_0xff9434, _0x47253f, _0x47ce0c, _0x22e529);
  } else {
    for (var _0x4c9cfa = _0xff9434["length"] - 1; _0x4c9cfa >= 0; _0x4c9cfa--) {
      if (_0x9fcfe7 = _0xff9434[_0x4c9cfa]) {
        _0x3fbc41 = (_0x33ad82 < 3 ? _0x9fcfe7(_0x3fbc41) : _0x33ad82 > 3 ? _0x9fcfe7(_0x47253f, _0x47ce0c, _0x3fbc41) : _0x9fcfe7(_0x47253f, _0x47ce0c)) || _0x3fbc41;
      }
    }
  }

  _0x33ad82 > 3 && _0x3fbc41 && Object["defineProperty"](_0x47253f, _0x47ce0c, _0x3fbc41);
  return _0x3fbc41;
},
    __metadata = this && this["__metadata"] || function (_0xe6664a, _0x463a17) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0xe6664a, _0x463a17);
  }
},
    __param = this && this['__param'] || function (_0x1a3d8b, _0xab1acd) {
  return function (_0x3d1556, _0x5498d1) {
    _0xab1acd(_0x3d1556, _0x5498d1, _0x1a3d8b);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports['CramiController'] = void 0;

const crami_service_1 = require("./crami.service"),
      common_1 = require("@nestjs/common"),
      swagger_1 = require('@nestjs/swagger'),
      createPackage_dto_1 = require('./dto/createPackage.dto'),
      updatePackage_dto_1 = require("./dto/updatePackage.dto"),
      createCrami_dto_1 = require("./dto/createCrami.dto"),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      useCrami_dto_1 = require('./dto/useCrami.dto'),
      queryAllPackage_dto_1 = require("./dto/queryAllPackage.dto"),
      deletePackage_dto_1 = require("./dto/deletePackage.dto"),
      queryAllCrami_dto_1 = require("./dto/queryAllCrami.dto"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      batchDelCrami_dto_1 = require("./dto/batchDelCrami.dto");

let CramiController = class CramiController {
  constructor(_0x2a7b52) {
    this["cramiService"] = _0x2a7b52;
  }

  async ["queryOnePackage"](_0x5c07c2) {
    return this["cramiService"]["queryOnePackage"](_0x5c07c2);
  }

  async ["queryAllPackage"](_0x234596) {
    return this['cramiService']['queryAllPackage'](_0x234596);
  }

  async ['createPackage'](_0x3604b7) {
    return this["cramiService"]['createPackage'](_0x3604b7);
  }

  async ["updatePackage"](_0x251144) {
    return this["cramiService"]['updatePackage'](_0x251144);
  }

  async ['delPackage'](_0x4a3c84) {
    return this["cramiService"]["delPackage"](_0x4a3c84);
  }

  async ["createCrami"](_0x1cd436) {
    return this["cramiService"]['createCrami'](_0x1cd436);
  }

  async ['useCrami'](_0x32c360, _0x15a7e1) {
    return this["cramiService"]["useCrami"](_0x32c360, _0x15a7e1);
  }

  async ['queryAllCrami'](_0x3d7180, _0x239483) {
    return this['cramiService']["queryAllCrami"](_0x3d7180, _0x239483);
  }

  async ["delCrami"](_0x58f72e) {
    return this['cramiService']["delCrami"](_0x58f72e);
  }

  async ['batchDelCrami'](_0x511116) {
    return this["cramiService"]["batchDelCrami"](_0x511116);
  }

};

__decorate([(0, common_1["Get"])('queryOnePackage'), (0, swagger_1['ApiOperation'])({
  'summary': "查询单个套餐"
}), __param(0, (0, common_1["Query"])('id')), __metadata("design:type", Function), __metadata('design:paramtypes', [Number]), __metadata("design:returntype", Promise)], CramiController['prototype'], 'queryOnePackage', null);

__decorate([(0, common_1["Get"])("queryAllPackage"), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有套餐"
}), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryAllPackage_dto_1['QuerAllPackageDto']]), __metadata("design:returntype", Promise)], CramiController["prototype"], "queryAllPackage", null);

__decorate([(0, common_1["Post"])("createPackage"), (0, swagger_1["ApiOperation"])({
  'summary': '创建套餐'
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [createPackage_dto_1["CreatePackageDto"]]), __metadata("design:returntype", Promise)], CramiController["prototype"], 'createPackage', null);

__decorate([(0, common_1["Post"])("updatePackage"), (0, swagger_1["ApiOperation"])({
  'summary': "更新套餐"
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [updatePackage_dto_1["UpdatePackageDto"]]), __metadata("design:returntype", Promise)], CramiController["prototype"], 'updatePackage', null);

__decorate([(0, common_1['Post'])("delPackage"), (0, swagger_1["ApiOperation"])({
  'summary': "删除套餐"
}), (0, common_1["UseGuards"])(superAuth_guard_1['SuperAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [deletePackage_dto_1["DeletePackageDto"]]), __metadata("design:returntype", Promise)], CramiController["prototype"], 'delPackage', null);

__decorate([(0, common_1["Post"])("createCrami"), (0, swagger_1['ApiOperation'])({
  'summary': "生成卡密"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [createCrami_dto_1["CreatCramiDto"]]), __metadata("design:returntype", Promise)], CramiController["prototype"], "createCrami", null);

__decorate([(0, common_1["Post"])('useCrami'), (0, swagger_1['ApiOperation'])({
  'summary': "使用卡密"
}), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, useCrami_dto_1["UseCramiDto"]]), __metadata("design:returntype", Promise)], CramiController["prototype"], "useCrami", null);

__decorate([(0, common_1['Get'])("queryAllCrami"), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有卡密"
}), (0, common_1["UseGuards"])(adminAuth_guard_1['AdminAuthGuard']), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Query"])()), __param(1, (0, common_1["Req"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [queryAllCrami_dto_1["QuerAllCramiDto"], Object]), __metadata("design:returntype", Promise)], CramiController['prototype'], "queryAllCrami", null);

__decorate([(0, common_1["Post"])('delCrami'), (0, swagger_1["ApiOperation"])({
  'summary': '删除卡密'
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])('id')), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", Promise)], CramiController['prototype'], 'delCrami', null);

__decorate([(0, common_1["Post"])('batchDelCrami'), (0, swagger_1["ApiOperation"])({
  'summary': '批量删除卡密'
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [batchDelCrami_dto_1["BatchDelCramiDto"]]), __metadata('design:returntype', Promise)], CramiController["prototype"], "batchDelCrami", null);

CramiController = __decorate([(0, swagger_1["ApiTags"])("Crami"), (0, common_1["Controller"])("crami"), __metadata('design:paramtypes', [crami_service_1["CramiService"]])], CramiController);
exports["CramiController"] = CramiController;