'use strict';

var __decorate = this && this["__decorate"] || function (_0x1c4819, _0x4cdd7b, _0x289b34, _0xf4c68f) {
  var _0x451485 = arguments["length"],
      _0x37c92e = _0x451485 < 3 ? _0x4cdd7b : _0xf4c68f === null ? _0xf4c68f = Object["getOwnPropertyDescriptor"](_0x4cdd7b, _0x289b34) : _0xf4c68f,
      _0x344f8d;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x37c92e = Reflect["decorate"](_0x1c4819, _0x4cdd7b, _0x289b34, _0xf4c68f);
  } else {
    for (var _0xbf2e87 = _0x1c4819["length"] - 1; _0xbf2e87 >= 0; _0xbf2e87--) {
      if (_0x344f8d = _0x1c4819[_0xbf2e87]) {
        _0x37c92e = (_0x451485 < 3 ? _0x344f8d(_0x37c92e) : _0x451485 > 3 ? _0x344f8d(_0x4cdd7b, _0x289b34, _0x37c92e) : _0x344f8d(_0x4cdd7b, _0x289b34)) || _0x37c92e;
      }
    }
  }

  _0x451485 > 3 && _0x37c92e && Object["defineProperty"](_0x4cdd7b, _0x289b34, _0x37c92e);
  return _0x37c92e;
},
    __metadata = this && this["__metadata"] || function (_0x6286c2, _0x11a5dc) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x6286c2, _0x11a5dc);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['UserAppsEntity'] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let UserAppsEntity = class UserAppsEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户ID"
}), __metadata("design:type", Number)], UserAppsEntity["prototype"], "userId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "应用ID"
}), __metadata("design:type", Number)], UserAppsEntity["prototype"], "appId", void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': '应用分类ID'
}), __metadata('design:type', Number)], UserAppsEntity['prototype'], 'catId', void 0);

__decorate([(0, typeorm_1['Column'])({
  'comment': "app类型 system/user",
  'default': "user"
}), __metadata("design:type", String)], UserAppsEntity["prototype"], "appType", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "是否公开到公告菜单",
  'default': false
}), __metadata('design:type', Boolean)], UserAppsEntity["prototype"], "public", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "app状态 1正常 2审核 3违规",
  'default': 1
}), __metadata("design:type", Number)], UserAppsEntity["prototype"], 'status', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "App应用排序、数字越大越靠前",
  'default': 100
}), __metadata("design:type", Number)], UserAppsEntity["prototype"], "order", void 0);

UserAppsEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "user_apps"
})], UserAppsEntity);
exports["UserAppsEntity"] = UserAppsEntity;