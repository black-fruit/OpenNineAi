'use strict';

Object['defineProperty'](exports, '__esModule', {
  'value': true
});
exports["UserStatusErrMsg"] = exports['UserStatusEnum'] = void 0;
var UserStatusEnum;

(function (_0xf9a233) {
  _0xf9a233[_0xf9a233["PENDING"] = 0] = "PENDING";
  _0xf9a233[_0xf9a233['ACTIVE'] = 1] = "ACTIVE";
  _0xf9a233[_0xf9a233['LOCKED'] = 2] = "LOCKED";
  _0xf9a233[_0xf9a233["BLACKLISTED"] = 3] = "BLACKLISTED";
})(UserStatusEnum = exports['UserStatusEnum'] || (exports["UserStatusEnum"] = {}));

exports['UserStatusErrMsg'] = {
  [UserStatusEnum["PENDING"]]: '当前账户未激活,请前往邮箱验证或重新发送验证码！',
  [UserStatusEnum["ACTIVE"]]: '当前账户已激活！',
  [UserStatusEnum['LOCKED']]: "当前账户已锁定,请联系管理员解锁！",
  [UserStatusEnum['BLACKLISTED']]: "当前账户已被永久封禁！"
};