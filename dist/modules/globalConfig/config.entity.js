'use strict';

var __decorate = this && this["__decorate"] || function (_0x572edc, _0x25ddf2, _0x4a36de, _0x596029) {
  var _0x184114 = arguments["length"],
      _0x7d413b = _0x184114 < 3 ? _0x25ddf2 : _0x596029 === null ? _0x596029 = Object['getOwnPropertyDescriptor'](_0x25ddf2, _0x4a36de) : _0x596029,
      _0x3e1536;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x7d413b = Reflect['decorate'](_0x572edc, _0x25ddf2, _0x4a36de, _0x596029);
  } else {
    for (var _0x5f1699 = _0x572edc["length"] - 1; _0x5f1699 >= 0; _0x5f1699--) {
      if (_0x3e1536 = _0x572edc[_0x5f1699]) {
        _0x7d413b = (_0x184114 < 3 ? _0x3e1536(_0x7d413b) : _0x184114 > 3 ? _0x3e1536(_0x25ddf2, _0x4a36de, _0x7d413b) : _0x3e1536(_0x25ddf2, _0x4a36de)) || _0x7d413b;
      }
    }
  }

  _0x184114 > 3 && _0x7d413b && Object["defineProperty"](_0x25ddf2, _0x4a36de, _0x7d413b);
  return _0x7d413b;
},
    __metadata = this && this["__metadata"] || function (_0x2b04a2, _0x2a4058) {
  if (typeof Reflect === 'object' && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x2b04a2, _0x2a4058);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["ConfigEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require('../../common/entity/baseEntity');

let ConfigEntity = class ConfigEntity extends baseEntity_1['BaseEntity'] {};

__decorate([(0, typeorm_1["Column"])({
  'length': 255,
  'comment': '配置名称',
  'nullable': true
}), __metadata("design:type", String)], ConfigEntity["prototype"], "configKey", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 3000,
  'comment': "配置内容",
  'nullable': true
}), __metadata("design:type", String)], ConfigEntity["prototype"], "configVal", void 0);

__decorate([(0, typeorm_1['Column'])({
  'default': 0,
  'comment': "配置是否公开，公开内容对前端项目展示  0：不公开 1：公开"
}), __metadata("design:type", Number)], ConfigEntity["prototype"], "public", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'comment': "配置是否加密，加密内容仅仅super权限可看 0：不加 1：加"
}), __metadata("design:type", Number)], ConfigEntity["prototype"], "encry", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 1,
  'comment': "配置状态 0:关闭 1：启用"
}), __metadata("design:type", Number)], ConfigEntity["prototype"], "status", void 0);

ConfigEntity = __decorate([(0, typeorm_1['Entity'])({
  'name': "config"
})], ConfigEntity);
exports["ConfigEntity"] = ConfigEntity;