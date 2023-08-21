'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["OpenAiErrorCodeMessage"] = exports["ErrorMessageEnum"] = void 0;
var ErrorMessageEnum;

(function (_0x205647) {
  _0x205647["USERNAME_OR_EMAIL_ALREADY_REGISTERED"] = "用户名或邮箱已注册！";
  _0x205647['USER_NOT_FOUND'] = "用户不存在！";
  _0x205647["VERIFICATION_NOT_FOUND"] = '验证记录不存在！';
  _0x205647["VERIFICATION_CODE_EXPIRED"] = '验证码已过期！';
  _0x205647["VERIFICATION_CODE_INVALID"] = '验证码无效！';
  _0x205647["VERIFICATION_CODE_MISMATCH"] = '验证码不匹配！';
  _0x205647["VERIFICATION_CODE_SEND_FAILED"] = "验证码发送失败！";
  _0x205647["VERIFICATION_CODE_SEND_TOO_OFTEN"] = '验证码发送过于频繁！';
})(ErrorMessageEnum = exports['ErrorMessageEnum'] || (exports["ErrorMessageEnum"] = {}));

exports["OpenAiErrorCodeMessage"] = {
  400: "[OpenAI] 当前请求上下文过长、试试开启一个新对话吧或删除当前页面内容吧......",
  401: "服务出现错误、请稍后再试一次吧[401]",
  403: "[OpenAI] 服务器拒绝访问，请稍后再试 | Server refused to access, please try again later",
  429: "出现点小错误、重新再试一次吧[429]",
  502: "[OpenAI] 错误的网关 |  Bad Gateway",
  503: "[OpenAI] 服务器繁忙，请稍后再试 | Server is busy, please try again later",
  504: "[OpenAI] 网关超时 | Gateway Time-out",
  500: "[OpenAI] 服务器繁忙，请稍后再试 | Internal Server Error"
};