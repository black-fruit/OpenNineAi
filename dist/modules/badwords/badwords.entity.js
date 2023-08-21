'use strict';

var __decorate = this && this["__decorate"] || function (_0x178291, _0x324265, _0x454078, _0x2f47a0) {
  var _0x33d453 = arguments["length"],
      _0x350e8d = _0x33d453 < 3 ? _0x324265 : _0x2f47a0 === null ? _0x2f47a0 = Object["getOwnPropertyDescriptor"](_0x324265, _0x454078) : _0x2f47a0,
      _0x427583;

  if (typeof Reflect === 'object' && typeof Reflect['decorate'] === "function") {
    _0x350e8d = Reflect['decorate'](_0x178291, _0x324265, _0x454078, _0x2f47a0);
  } else {
    for (var _0x45cd05 = _0x178291["length"] - 1; _0x45cd05 >= 0; _0x45cd05--) {
      if (_0x427583 = _0x178291[_0x45cd05]) {
        _0x350e8d = (_0x33d453 < 3 ? _0x427583(_0x350e8d) : _0x33d453 > 3 ? _0x427583(_0x324265, _0x454078, _0x350e8d) : _0x427583(_0x324265, _0x454078)) || _0x350e8d;
      }
    }
  }

  _0x33d453 > 3 && _0x350e8d && Object['defineProperty'](_0x324265, _0x454078, _0x350e8d);
  return _0x350e8d;
},
    __metadata = this && this["__metadata"] || function (_0x566bb0, _0x2a1a1d) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x566bb0, _0x2a1a1d);
  }
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["BadWordsEntity"] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let BadWordsEntity = class BadWordsEntity extends baseEntity_1['BaseEntity'] {};

__decorate([(0, typeorm_1["Column"])({
  'length': 20,
  'comment': "敏感词"
}), __metadata("design:type", String)], BadWordsEntity["prototype"], "word", void 0);

__decorate([(0, typeorm_1['Column'])({
  'default': 1,
  'comment': "敏感词开启状态"
}), __metadata("design:type", Number)], BadWordsEntity['prototype'], "status", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'comment': '敏感词触发次数'
}), __metadata("design:type", Number)], BadWordsEntity['prototype'], 'count', void 0);

BadWordsEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "bad_words"
})], BadWordsEntity);
exports["BadWordsEntity"] = BadWordsEntity;