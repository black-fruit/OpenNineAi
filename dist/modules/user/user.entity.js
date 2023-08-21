'use strict';

var __decorate = this && this["__decorate"] || function (_0xa139e5, _0x5d34c4, _0x1c05e5, _0x4003a0) {
  var _0x3c8469 = arguments["length"],
      _0x5536d3 = _0x3c8469 < 3 ? _0x5d34c4 : _0x4003a0 === null ? _0x4003a0 = Object["getOwnPropertyDescriptor"](_0x5d34c4, _0x1c05e5) : _0x4003a0,
      _0xb5a088;

  if (typeof Reflect === 'object' && typeof Reflect["decorate"] === "function") {
    _0x5536d3 = Reflect["decorate"](_0xa139e5, _0x5d34c4, _0x1c05e5, _0x4003a0);
  } else {
    for (var _0x267036 = _0xa139e5["length"] - 1; _0x267036 >= 0; _0x267036--) {
      if (_0xb5a088 = _0xa139e5[_0x267036]) {
        _0x5536d3 = (_0x3c8469 < 3 ? _0xb5a088(_0x5536d3) : _0x3c8469 > 3 ? _0xb5a088(_0x5d34c4, _0x1c05e5, _0x5536d3) : _0xb5a088(_0x5d34c4, _0x1c05e5)) || _0x5536d3;
      }
    }
  }

  _0x3c8469 > 3 && _0x5536d3 && Object["defineProperty"](_0x5d34c4, _0x1c05e5, _0x5536d3);
  return _0x5536d3;
},
    __metadata = this && this["__metadata"] || function (_0x159f76, _0x360cfd) {
  if (typeof Reflect === 'object' && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x159f76, _0x360cfd);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['UserEntity'] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let UserEntity = class UserEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1['Column'])({
  'length': 12,
  'comment': "用户昵称"
}), __metadata("design:type", String)], UserEntity["prototype"], "username", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 64,
  'comment': "用户密码",
  'nullable': true
}), __metadata("design:type", String)], UserEntity["prototype"], "password", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 0,
  'comment': "用户状态"
}), __metadata("design:type", Number)], UserEntity["prototype"], "status", void 0);

__decorate([(0, typeorm_1["Column"])({
  'default': 1,
  'comment': "用户性别"
}), __metadata('design:type', Number)], UserEntity["prototype"], "sex", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 64,
  'unique': true,
  'comment': "用户邮箱"
}), __metadata("design:type", String)], UserEntity["prototype"], "email", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 64,
  'nullable': true,
  'comment': "用户手机号"
}), __metadata("design:type", String)], UserEntity['prototype'], "phone", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 300,
  'nullable': true,
  'default': "https://public-1300678944.cos.ap-shanghai.myqcloud.com/ai/7f042f63f.png",
  'comment': "用户头像"
}), __metadata("design:type", String)], UserEntity["prototype"], "avatar", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 300,
  'nullable': true,
  'default': "我是一台基于深度学习和自然语言处理技术的 AI 机器人，旨在为用户提供高效、精准、个性化的智能服务。",
  'comment': '用户签名'
}), __metadata("design:type", String)], UserEntity['prototype'], "sign", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 64,
  'default': '',
  'comment': "注册IP",
  'nullable': true
}), __metadata("design:type", String)], UserEntity["prototype"], "registerIp", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 64,
  'default': '',
  'comment': "最后一次登录IP",
  'nullable': true
}), __metadata("design:type", String)], UserEntity['prototype'], "lastLoginIp", void 0);

__decorate([(0, typeorm_1["Column"])({
  'length': 10,
  'default': '',
  'comment': '用户邀请码'
}), __metadata("design:type", String)], UserEntity['prototype'], "inviteCode", void 0);

__decorate([(0, typeorm_1['Column'])({
  'length': 10,
  'default': '',
  'comment': "用户填写的别人的邀请码"
}), __metadata('design:type', String)], UserEntity["prototype"], "invitedBy", void 0);

__decorate([(0, typeorm_1['Column'])({
  'length': 10,
  'default': "viewer",
  'comment': "用户角色"
}), __metadata("design:type", String)], UserEntity["prototype"], "role", void 0);

__decorate([(0, typeorm_1['Column'])({
  'length': 64,
  'default': '',
  'comment': "微信openId",
  'nullable': true
}), __metadata('design:type', String)], UserEntity["prototype"], "openId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'length': 64,
  'comment': "用户注册来源",
  'nullable': true
}), __metadata('design:type', String)], UserEntity["prototype"], "client", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户邀请链接被点击次数",
  'default': 0
}), __metadata("design:type", Number)], UserEntity["prototype"], "inviteLinkCount", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "用户连续签到天数",
  'default': 0
}), __metadata("design:type", Number)], UserEntity['prototype'], "consecutiveDays", void 0);

UserEntity = __decorate([(0, typeorm_1['Entity'])({
  'name': "users"
})], UserEntity);
exports["UserEntity"] = UserEntity;