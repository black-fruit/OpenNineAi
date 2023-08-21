'use strict';

var __decorate = this && this["__decorate"] || function (_0x589c15, _0x56819a, _0x50bb8c, _0x553eca) {
  var _0x195d16 = arguments['length'],
      _0x45d772 = _0x195d16 < 3 ? _0x56819a : _0x553eca === null ? _0x553eca = Object['getOwnPropertyDescriptor'](_0x56819a, _0x50bb8c) : _0x553eca,
      _0x465ae0;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x45d772 = Reflect["decorate"](_0x589c15, _0x56819a, _0x50bb8c, _0x553eca);
  } else {
    for (var _0x385bd8 = _0x589c15["length"] - 1; _0x385bd8 >= 0; _0x385bd8--) {
      if (_0x465ae0 = _0x589c15[_0x385bd8]) {
        _0x45d772 = (_0x195d16 < 3 ? _0x465ae0(_0x45d772) : _0x195d16 > 3 ? _0x465ae0(_0x56819a, _0x50bb8c, _0x45d772) : _0x465ae0(_0x56819a, _0x50bb8c)) || _0x45d772;
      }
    }
  }

  _0x195d16 > 3 && _0x45d772 && Object["defineProperty"](_0x56819a, _0x50bb8c, _0x45d772);
  return _0x45d772;
},
    __metadata = this && this['__metadata'] || function (_0x5ae15c, _0x191e9d) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === "function") {
    return Reflect["metadata"](_0x5ae15c, _0x191e9d);
  }
},
    __param = this && this["__param"] || function (_0x21fed6, _0x3cc0a2) {
  return function (_0x5cb2ce, _0x632f68) {
    _0x3cc0a2(_0x5cb2ce, _0x632f68, _0x21fed6);
  };
};

Object['defineProperty'](exports, "__esModule", {
  'value': true
});
exports["BadwordsController"] = void 0;

const badwords_service_1 = require("./badwords.service"),
      common_1 = require('@nestjs/common'),
      swagger_1 = require('@nestjs/swagger'),
      queryBadWords_dto_1 = require("./dto/queryBadWords.dto"),
      updateBadWords_dto_1 = require("./dto/updateBadWords.dto"),
      delBadWords_dto_1 = require("./dto/delBadWords.dto"),
      addBadWords_dto_1 = require("./dto/addBadWords.dto"),
      superAuth_guard_1 = require('../../common/auth/superAuth.guard');

let BadwordsController = class BadwordsController {
  constructor(_0x12d578) {
    this["badwordsService"] = _0x12d578;
  }

  ["queryBadWords"](_0x1ede00) {
    return this["badwordsService"]["queryBadWords"](_0x1ede00);
  }

  ["delBadWords"](_0x27c858) {
    return this["badwordsService"]["delBadWords"](_0x27c858);
  }

  ['updateBadWords'](_0x2a01e5) {
    return this["badwordsService"]["updateBadWords"](_0x2a01e5);
  }

  ["addBadWord"](_0x219379) {
    return this["badwordsService"]["addBadWord"](_0x219379);
  }

};

__decorate([(0, common_1["Get"])("query"), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有敏感词"
}), __param(0, (0, common_1['Query'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryBadWords_dto_1["QueryBadWordsDto"]]), __metadata('design:returntype', void 0)], BadwordsController["prototype"], 'queryBadWords', null);

__decorate([(0, common_1["Post"])("del"), (0, swagger_1["ApiOperation"])({
  'summary': "删除敏感词"
}), (0, common_1['UseGuards'])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1['Body'])()), __metadata("design:type", Function), __metadata('design:paramtypes', [delBadWords_dto_1["DelBadWordsDto"]]), __metadata("design:returntype", void 0)], BadwordsController["prototype"], "delBadWords", null);

__decorate([(0, common_1['Post'])("update"), (0, swagger_1["ApiOperation"])({
  'summary': "更新敏感词"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata('design:paramtypes', [updateBadWords_dto_1["UpdateBadWordsDto"]]), __metadata("design:returntype", void 0)], BadwordsController["prototype"], "updateBadWords", null);

__decorate([(0, common_1["Post"])("add"), (0, swagger_1["ApiOperation"])({
  'summary': '新增敏感词'
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [addBadWords_dto_1["AddBadWordDto"]]), __metadata("design:returntype", void 0)], BadwordsController['prototype'], "addBadWord", null);

BadwordsController = __decorate([(0, swagger_1["ApiTags"])('badWords'), (0, common_1['Controller'])("badwords"), __metadata('design:paramtypes', [badwords_service_1['BadwordsService']])], BadwordsController);
exports["BadwordsController"] = BadwordsController;