'use strict';

var __decorate = this && this['__decorate'] || function (_0x1aa786, _0xb04a46, _0x44bad3, _0x2a7d55) {
  var _0x5ba375 = arguments["length"],
      _0x10b611 = _0x5ba375 < 3 ? _0xb04a46 : _0x2a7d55 === null ? _0x2a7d55 = Object["getOwnPropertyDescriptor"](_0xb04a46, _0x44bad3) : _0x2a7d55,
      _0x27c41c;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x10b611 = Reflect['decorate'](_0x1aa786, _0xb04a46, _0x44bad3, _0x2a7d55);
  } else {
    for (var _0xab7b0a = _0x1aa786["length"] - 1; _0xab7b0a >= 0; _0xab7b0a--) {
      if (_0x27c41c = _0x1aa786[_0xab7b0a]) {
        _0x10b611 = (_0x5ba375 < 3 ? _0x27c41c(_0x10b611) : _0x5ba375 > 3 ? _0x27c41c(_0xb04a46, _0x44bad3, _0x10b611) : _0x27c41c(_0xb04a46, _0x44bad3)) || _0x10b611;
      }
    }
  }

  _0x5ba375 > 3 && _0x10b611 && Object["defineProperty"](_0xb04a46, _0x44bad3, _0x10b611);
  return _0x10b611;
},
    __metadata = this && this['__metadata'] || function (_0x52bca5, _0x490ab9) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x52bca5, _0x490ab9);
  }
};

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['ChatGroupEntity'] = void 0;

const typeorm_1 = require("typeorm"),
      baseEntity_1 = require("../../common/entity/baseEntity");

let ChatGroupEntity = class ChatGroupEntity extends baseEntity_1["BaseEntity"] {};

__decorate([(0, typeorm_1["Column"])({
  'comment': "用户ID"
}), __metadata("design:type", Number)], ChatGroupEntity["prototype"], 'userId', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '是否置顶聊天',
  'type': "boolean",
  'default': false
}), __metadata('design:type', Boolean)], ChatGroupEntity["prototype"], "isSticky", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': '分组名称',
  'nullable': true
}), __metadata("design:type", String)], ChatGroupEntity["prototype"], 'title', void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "应用ID",
  'nullable': true
}), __metadata('design:type', Number)], ChatGroupEntity['prototype'], "appId", void 0);

__decorate([(0, typeorm_1["Column"])({
  'comment': "是否删除了",
  'default': false
}), __metadata("design:type", Boolean)], ChatGroupEntity["prototype"], "isDelete", void 0);

ChatGroupEntity = __decorate([(0, typeorm_1["Entity"])({
  'name': "chat_group"
})], ChatGroupEntity);
exports["ChatGroupEntity"] = ChatGroupEntity;