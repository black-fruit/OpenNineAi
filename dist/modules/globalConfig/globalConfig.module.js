'use strict';

var __decorate = this && this["__decorate"] || function (_0x30169c, _0x29b6de, _0x10d743, _0x504578) {
  var _0x25c711 = arguments["length"],
      _0x52a514 = _0x25c711 < 3 ? _0x29b6de : _0x504578 === null ? _0x504578 = Object["getOwnPropertyDescriptor"](_0x29b6de, _0x10d743) : _0x504578,
      _0x319834;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x52a514 = Reflect["decorate"](_0x30169c, _0x29b6de, _0x10d743, _0x504578);
  } else {
    for (var _0x4e860b = _0x30169c['length'] - 1; _0x4e860b >= 0; _0x4e860b--) {
      if (_0x319834 = _0x30169c[_0x4e860b]) {
        _0x52a514 = (_0x25c711 < 3 ? _0x319834(_0x52a514) : _0x25c711 > 3 ? _0x319834(_0x29b6de, _0x10d743, _0x52a514) : _0x319834(_0x29b6de, _0x10d743)) || _0x52a514;
      }
    }
  }

  _0x25c711 > 3 && _0x52a514 && Object["defineProperty"](_0x29b6de, _0x10d743, _0x52a514);
  return _0x52a514;
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["GlobalConfigModule"] = void 0;

const common_1 = require("@nestjs/common"),
      globalConfig_controller_1 = require('./globalConfig.controller'),
      globalConfig_service_1 = require("./globalConfig.service"),
      typeorm_1 = require("@nestjs/typeorm"),
      config_entity_1 = require("./config.entity");

let GlobalConfigModule = class GlobalConfigModule {};
GlobalConfigModule = __decorate([(0, common_1["Global"])(), (0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]["forFeature"]([config_entity_1["ConfigEntity"]])],
  'providers': [globalConfig_service_1["GlobalConfigService"]],
  'controllers': [globalConfig_controller_1["GlobalConfigController"]],
  'exports': [globalConfig_service_1["GlobalConfigService"]]
})], GlobalConfigModule);
exports["GlobalConfigModule"] = GlobalConfigModule;