'use strict';

var __decorate = this && this["__decorate"] || function (_0x292d9d, _0x48c588, _0x3d7da4, _0x1c69d5) {
  var _0x4da9a6 = arguments["length"],
      _0x233954 = _0x4da9a6 < 3 ? _0x48c588 : _0x1c69d5 === null ? _0x1c69d5 = Object["getOwnPropertyDescriptor"](_0x48c588, _0x3d7da4) : _0x1c69d5,
      _0x10ed83;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x233954 = Reflect["decorate"](_0x292d9d, _0x48c588, _0x3d7da4, _0x1c69d5);
  } else {
    for (var _0xdf1a58 = _0x292d9d["length"] - 1; _0xdf1a58 >= 0; _0xdf1a58--) {
      if (_0x10ed83 = _0x292d9d[_0xdf1a58]) {
        _0x233954 = (_0x4da9a6 < 3 ? _0x10ed83(_0x233954) : _0x4da9a6 > 3 ? _0x10ed83(_0x48c588, _0x3d7da4, _0x233954) : _0x10ed83(_0x48c588, _0x3d7da4)) || _0x233954;
      }
    }
  }

  _0x4da9a6 > 3 && _0x233954 && Object["defineProperty"](_0x48c588, _0x3d7da4, _0x233954);
  return _0x233954;
},
    __metadata = this && this["__metadata"] || function (_0x55b30c, _0x552364) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect['metadata'](_0x55b30c, _0x552364);
  }
},
    DatabaseModule_1;

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["DatabaseModule"] = void 0;

const common_1 = require("@nestjs/common"),
      typeorm_1 = require('@nestjs/typeorm'),
      nestjs_config_1 = require("nestjs-config"),
      typeorm_2 = require("typeorm"),
      database_service_1 = require("./database.service");

let DatabaseModule = DatabaseModule_1 = class DatabaseModule {
  constructor(_0x2850c4, _0x3db7ac) {
    this["connection"] = _0x2850c4;
    this['config'] = _0x3db7ac;
    this["logger"] = new common_1['Logger'](DatabaseModule_1["name"]);
  }

  ["onModuleInit"]() {
    const {
      "database": _0x238ffe
    } = this["connection"]["options"];
    this["logger"]['log']("Your MySQL database named " + _0x238ffe + " has been connected");
  }

};
DatabaseModule = DatabaseModule_1 = __decorate([(0, common_1["Module"])({
  'imports': [typeorm_1["TypeOrmModule"]['forRootAsync']({
    'useFactory': _0xd2b95 => _0xd2b95["get"]("database"),
    'inject': [nestjs_config_1["ConfigService"]]
  })],
  'providers': [database_service_1["DatabaseService"]]
}), __metadata("design:paramtypes", [typeorm_2['Connection'], nestjs_config_1["ConfigService"]])], DatabaseModule);
exports["DatabaseModule"] = DatabaseModule;