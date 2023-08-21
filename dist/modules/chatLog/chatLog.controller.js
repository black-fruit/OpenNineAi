'use strict';

var __decorate = this && this['__decorate'] || function (_0x32c85d, _0xdda449, _0x287668, _0x202363) {
  var _0x150edc = arguments["length"],
      _0x414037 = _0x150edc < 3 ? _0xdda449 : _0x202363 === null ? _0x202363 = Object['getOwnPropertyDescriptor'](_0xdda449, _0x287668) : _0x202363,
      _0x10a25a;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === 'function') {
    _0x414037 = Reflect['decorate'](_0x32c85d, _0xdda449, _0x287668, _0x202363);
  } else {
    for (var _0x5dd747 = _0x32c85d["length"] - 1; _0x5dd747 >= 0; _0x5dd747--) {
      if (_0x10a25a = _0x32c85d[_0x5dd747]) {
        _0x414037 = (_0x150edc < 3 ? _0x10a25a(_0x414037) : _0x150edc > 3 ? _0x10a25a(_0xdda449, _0x287668, _0x414037) : _0x10a25a(_0xdda449, _0x287668)) || _0x414037;
      }
    }
  }

  _0x150edc > 3 && _0x414037 && Object['defineProperty'](_0xdda449, _0x287668, _0x414037);
  return _0x414037;
},
    __metadata = this && this['__metadata'] || function (_0x1ce057, _0x2e9cf0) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === 'function') {
    return Reflect["metadata"](_0x1ce057, _0x2e9cf0);
  }
},
    __param = this && this["__param"] || function (_0x52165c, _0x3e61e2) {
  return function (_0x43ad53, _0x144014) {
    _0x3e61e2(_0x43ad53, _0x144014, _0x52165c);
  };
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['ChatLogController'] = void 0;

const common_1 = require("@nestjs/common"),
      swagger_1 = require("@nestjs/swagger"),
      jwtAuth_guard_1 = require("../../common/auth/jwtAuth.guard"),
      chatLog_service_1 = require("./chatLog.service"),
      queryAllDrawLog_dto_1 = require("./dto/queryAllDrawLog.dto"),
      queryAllChatLog_dto_1 = require("./dto/queryAllChatLog.dto"),
      recDrawImg_dto_1 = require("./dto/recDrawImg.dto"),
      superAuth_guard_1 = require("../../common/auth/superAuth.guard"),
      adminAuth_guard_1 = require("../../common/auth/adminAuth.guard"),
      queryMyChatLog_dto_1 = require("./dto/queryMyChatLog.dto"),
      exportExcelChatlog_dto_1 = require("./dto/exportExcelChatlog.dto"),
      chatList_dto_1 = require('./dto/chatList.dto'),
      del_dto_1 = require('./dto/del.dto'),
      delByGroup_dto_1 = require("./dto/delByGroup.dto"),
      queryByAppId_dto_1 = require('./dto/queryByAppId.dto');

let ChatLogController = class ChatLogController {
  constructor(_0x449328) {
    this["chatLogService"] = _0x449328;
  }

  ["querDrawLog"](_0x3d1df0, _0xfceced) {
    return this["chatLogService"]['querDrawLog'](_0xfceced, _0x3d1df0);
  }

  ["recDrawImg"](_0x173e7a) {
    return this["chatLogService"]["recDrawImg"](_0x173e7a);
  }

  ["querAllDrawLog"](_0x1232a3) {
    return this["chatLogService"]["querAllDrawLog"](_0x1232a3);
  }

  ["queryAllChatLog"](_0xcca226, _0x158db5) {
    return this["chatLogService"]["querAllChatLog"](_0xcca226, _0x158db5);
  }

  ["exportExcel"](_0x7a666b, _0x17340c) {
    return this["chatLogService"]["exportExcel"](_0x7a666b, _0x17340c);
  }

  ['chatList'](_0x79cea7, _0x53160a) {
    return this["chatLogService"]['chatList'](_0x79cea7, _0x53160a);
  }

  ["del"](_0x14f99e, _0xde7e44) {
    return this["chatLogService"]["deleteChatLog"](_0x14f99e, _0xde7e44);
  }

  ["delByGroupId"](_0x4879f7, _0x3c6409) {
    return this["chatLogService"]["delByGroupId"](_0x4879f7, _0x3c6409);
  }

  ["byAppId"](_0x58f5aa, _0x4a0d99) {
    return this["chatLogService"]['byAppId'](_0x58f5aa, _0x4a0d99);
  }

};

__decorate([(0, common_1["Get"])('draw'), (0, swagger_1['ApiOperation'])({
  'summary': '查询我的绘制记录'
}), (0, swagger_1["ApiBearerAuth"])(), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), __param(0, (0, common_1['Query'])()), __param(1, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryMyChatLog_dto_1["QuerMyChatLogDto"], Object]), __metadata('design:returntype', void 0)], ChatLogController['prototype'], "querDrawLog", null);

__decorate([(0, common_1['Post'])("recDrawImg"), (0, swagger_1["ApiOperation"])({
  'summary': '推荐此图片对外展示'
}), (0, swagger_1["ApiBearerAuth"])(), (0, common_1["UseGuards"])(superAuth_guard_1["SuperAuthGuard"]), __param(0, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [recDrawImg_dto_1["recDrawImgDto"]]), __metadata("design:returntype", void 0)], ChatLogController["prototype"], "recDrawImg", null);

__decorate([(0, common_1["Get"])("drawAll"), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有的绘制记录"
}), __param(0, (0, common_1["Query"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [queryAllDrawLog_dto_1["QuerAllDrawLogDto"]]), __metadata("design:returntype", void 0)], ChatLogController["prototype"], "querAllDrawLog", null);

__decorate([(0, common_1["Get"])("chatAll"), (0, swagger_1["ApiOperation"])({
  'summary': "查询所有的问答记录"
}), (0, swagger_1["ApiBearerAuth"])(), (0, common_1["UseGuards"])(adminAuth_guard_1["AdminAuthGuard"]), __param(0, (0, common_1['Query'])()), __param(1, (0, common_1['Req'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [queryAllChatLog_dto_1["QuerAllChatLogDto"], Object]), __metadata('design:returntype', void 0)], ChatLogController["prototype"], "queryAllChatLog", null);

__decorate([(0, common_1["Post"])("exportExcel"), (0, swagger_1['ApiOperation'])({
  'summary': "导出问答记录"
}), (0, swagger_1['ApiBearerAuth'])(), __param(0, (0, common_1["Body"])()), __param(1, (0, common_1["Res"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [exportExcelChatlog_dto_1['ExportExcelChatlogDto'], Object]), __metadata("design:returntype", void 0)], ChatLogController["prototype"], "exportExcel", null);

__decorate([(0, common_1["Get"])("chatList"), (0, swagger_1['ApiOperation'])({
  'summary': "查询我的问答记录"
}), (0, swagger_1['ApiBearerAuth'])(), (0, common_1['UseGuards'])(jwtAuth_guard_1['JwtAuthGuard']), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Query"])()), __metadata("design:type", Function), __metadata('design:paramtypes', [Object, chatList_dto_1['ChatListDto']]), __metadata("design:returntype", void 0)], ChatLogController["prototype"], 'chatList', null);

__decorate([(0, common_1['Post'])("del"), (0, swagger_1["ApiOperation"])({
  'summary': "删除我的问答记录"
}), (0, swagger_1["ApiBearerAuth"])(), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), __param(0, (0, common_1['Req'])()), __param(1, (0, common_1["Body"])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, del_dto_1["DelDto"]]), __metadata('design:returntype', void 0)], ChatLogController["prototype"], 'del', null);

__decorate([(0, common_1["Post"])("delByGroupId"), (0, swagger_1["ApiOperation"])({
  'summary': "清空一组对话"
}), (0, swagger_1["ApiBearerAuth"])(), (0, common_1["UseGuards"])(jwtAuth_guard_1["JwtAuthGuard"]), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1["Body"])()), __metadata('design:type', Function), __metadata("design:paramtypes", [Object, delByGroup_dto_1["DelByGroupDto"]]), __metadata("design:returntype", void 0)], ChatLogController['prototype'], 'delByGroupId', null);

__decorate([(0, common_1['Get'])("byAppId"), (0, swagger_1["ApiOperation"])({
  'summary': "查询某个应用的问答记录"
}), (0, swagger_1["ApiBearerAuth"])(), (0, common_1['UseGuards'])(jwtAuth_guard_1["JwtAuthGuard"]), __param(0, (0, common_1["Req"])()), __param(1, (0, common_1['Query'])()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, queryByAppId_dto_1["QueryByAppIdDto"]]), __metadata('design:returntype', void 0)], ChatLogController['prototype'], "byAppId", null);

ChatLogController = __decorate([(0, common_1["Controller"])("chatLog"), (0, swagger_1["ApiTags"])("ChatLog"), __metadata('design:paramtypes', [chatLog_service_1["ChatLogService"]])], ChatLogController);
exports["ChatLogController"] = ChatLogController;