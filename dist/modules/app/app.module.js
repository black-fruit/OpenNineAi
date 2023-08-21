'use strict';

var __decorate = this && this['__decorate'] || function (_0x3f8e96, _0x98607c, _0x52fdfb, _0x14508f) {
  var _0x5ba1f1 = arguments["length"],
      _0x1778fe = _0x5ba1f1 < 3 ? _0x98607c : _0x14508f === null ? _0x14508f = Object["getOwnPropertyDescriptor"](_0x98607c, _0x52fdfb) : _0x14508f,
      _0x430cca;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x1778fe = Reflect['decorate'](_0x3f8e96, _0x98607c, _0x52fdfb, _0x14508f);
  } else {
    for (var _0x40d5f2 = _0x3f8e96["length"] - 1; _0x40d5f2 >= 0; _0x40d5f2--) {
      if (_0x430cca = _0x3f8e96[_0x40d5f2]) {
        _0x1778fe = (_0x5ba1f1 < 3 ? _0x430cca(_0x1778fe) : _0x5ba1f1 > 3 ? _0x430cca(_0x98607c, _0x52fdfb, _0x1778fe) : _0x430cca(_0x98607c, _0x52fdfb)) || _0x1778fe;
      }
    }
  }

  _0x5ba1f1 > 3 && _0x1778fe && Object["defineProperty"](_0x98607c, _0x52fdfb, _0x1778fe);
  return _0x1778fe;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["AppModule"] = void 0;

const common_1 = require("@nestjs/common"),
      app_controller_1 = require("./app.controller"),
      app_service_1 = require("./app.service"),
      typeorm_1 = require("@nestjs/typeorm"),
      appCats_entity_1 = require("./appCats.entity"),
      app_entity_1 = require("./app.entity"),
      userApps_entity_1 = require("./userApps.entity");

let AppModule = class AppModule {};
AppModule = __decorate([(0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([appCats_entity_1["AppCatsEntity"], app_entity_1["AppEntity"], userApps_entity_1['UserAppsEntity']])],
  'controllers': [app_controller_1['AppController']],
  'providers': [app_service_1['AppService']]
})], AppModule);
exports["AppModule"] = AppModule;