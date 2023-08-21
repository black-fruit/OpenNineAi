'use strict';

var __decorate = this && this['__decorate'] || function (_0x48ce3e, _0x32b9bf, _0x4e2492, _0xe1f4e) {
  var _0x5e6a15 = arguments["length"],
      _0x5efb02 = _0x5e6a15 < 3 ? _0x32b9bf : _0xe1f4e === null ? _0xe1f4e = Object["getOwnPropertyDescriptor"](_0x32b9bf, _0x4e2492) : _0xe1f4e,
      _0x4255c3;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x5efb02 = Reflect["decorate"](_0x48ce3e, _0x32b9bf, _0x4e2492, _0xe1f4e);
  } else {
    for (var _0x16d791 = _0x48ce3e["length"] - 1; _0x16d791 >= 0; _0x16d791--) {
      if (_0x4255c3 = _0x48ce3e[_0x16d791]) {
        _0x5efb02 = (_0x5e6a15 < 3 ? _0x4255c3(_0x5efb02) : _0x5e6a15 > 3 ? _0x4255c3(_0x32b9bf, _0x4e2492, _0x5efb02) : _0x4255c3(_0x32b9bf, _0x4e2492)) || _0x5efb02;
      }
    }
  }

  _0x5e6a15 > 3 && _0x5efb02 && Object["defineProperty"](_0x32b9bf, _0x4e2492, _0x5efb02);
  return _0x5efb02;
},
    __metadata = this && this["__metadata"] || function (_0x412702, _0x19c9fc) {
  if (typeof Reflect === "object" && typeof Reflect['metadata'] === 'function') {
    return Reflect["metadata"](_0x412702, _0x19c9fc);
  }
},
    __param = this && this["__param"] || function (_0x381c34, _0x50c472) {
  return function (_0x15386b, _0x4a03c6) {
    _0x50c472(_0x15386b, _0x4a03c6, _0x381c34);
  };
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["AutoreplyController"] = void 0;

const autoreply_service_1 = require("./autoreply.service"),
      common_1 = require("@nestjs/common"),
      swagger_1 = require('@nestjs/swagger'),
      queryAutoReply_dto_1 = require("./dto/queryAutoReply.dto"),
      addAutoReply_dto_1 = require("./dto/addAutoReply.dto"),
      updateAutoReply_dto_1 = require("./dto/updateAutoReply.dto"),
      delBadWords_dto_1 = require("./dto/delBadWords.dto"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard");

let AutoreplyController = class AutoreplyController {
  constructor(_0x8885f6) {
    this["autoreplyService"] = _0x8885f6;
  }

  ["queryAutoreply"](_0x276e94) {
    return this["autoreplyService"]['queryAutoreply'](_0x276e94);
  }

  ["addAutoreply"](_0x5d6e4b) {
    return this["autoreplyService"]['addAutoreply'](_0x5d6e4b);
  }

  ["updateAutoreply"](_0x301447) {
    return this["autoreplyService"]["updateAutoreply"](_0x301447);
  }

  ['delAutoreply'](_0x264b52) {
    return this["autoreplyService"]["delAutoreply"](_0x264b52);
  }

};

__decorate([(0, common_1["Get"])("query"), (0, swagger_1['ApiOperation'])({
  'summary': '查询自动回复'
}), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryAutoReply_dto_1["QueryAutoReplyDto"]]), __metadata("design:returntype", void 0)], AutoreplyController["prototype"], "queryAutoreply", null);

__decorate([(0, common_1['Post'])('add'), (0, swagger_1["ApiOperation"])({
  'summary': "添加自动回复"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [addAutoReply_dto_1["AddAutoReplyDto"]]), __metadata("design:returntype", void 0)], AutoreplyController["prototype"], "addAutoreply", null);

__decorate([(0, common_1["Post"])("update"), (0, swagger_1["ApiOperation"])({
  'summary': "修改自动回复"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1["ApiBearerAuth"])(), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [updateAutoReply_dto_1["UpdateAutpReplyDto"]]), __metadata("design:returntype", void 0)], AutoreplyController["prototype"], "updateAutoreply", null);

__decorate([(0, common_1["Post"])("del"), (0, swagger_1['ApiOperation'])({
  'summary': "删除自动回复"
}), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1['Body'])()), __metadata('design:type', Function), __metadata('design:paramtypes', [delBadWords_dto_1['DelAutoReplyDto']]), __metadata("design:returntype", void 0)], AutoreplyController["prototype"], "delAutoreply", null);

AutoreplyController = __decorate([(0, swagger_1['ApiTags'])("autoreply"), (0, common_1["Controller"])('autoreply'), __metadata("design:paramtypes", [autoreply_service_1['AutoreplyService']])], AutoreplyController);
exports["AutoreplyController"] = AutoreplyController;