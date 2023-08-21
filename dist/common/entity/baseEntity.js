'use strict';

var __decorate = this && this["__decorate"] || function (_0x27a968, _0x388d7f, _0x10a26c, _0x27d928) {
  var _0x41f282 = arguments["length"],
      _0x506430 = _0x41f282 < 3 ? _0x388d7f : _0x27d928 === null ? _0x27d928 = Object["getOwnPropertyDescriptor"](_0x388d7f, _0x10a26c) : _0x27d928,
      _0x1b7ec2;

  if (typeof Reflect === "object" && typeof Reflect["decorate"] === "function") {
    _0x506430 = Reflect['decorate'](_0x27a968, _0x388d7f, _0x10a26c, _0x27d928);
  } else {
    for (var _0x5cca01 = _0x27a968["length"] - 1; _0x5cca01 >= 0; _0x5cca01--) {
      if (_0x1b7ec2 = _0x27a968[_0x5cca01]) {
        _0x506430 = (_0x41f282 < 3 ? _0x1b7ec2(_0x506430) : _0x41f282 > 3 ? _0x1b7ec2(_0x388d7f, _0x10a26c, _0x506430) : _0x1b7ec2(_0x388d7f, _0x10a26c)) || _0x506430;
      }
    }
  }

  _0x41f282 > 3 && _0x506430 && Object["defineProperty"](_0x388d7f, _0x10a26c, _0x506430);
  return _0x506430;
},
    __metadata = this && this["__metadata"] || function (_0x28561a, _0x241266) {
  if (typeof Reflect === "object" && typeof Reflect["metadata"] === "function") {
    return Reflect["metadata"](_0x28561a, _0x241266);
  }
};

Object["defineProperty"](exports, '__esModule', {
  'value': true
});
exports["BaseEntity"] = void 0;

const typeorm_1 = require("typeorm");

let BaseEntity = class BaseEntity {};

__decorate([(0, typeorm_1['PrimaryGeneratedColumn'])(), __metadata("design:type", Number)], BaseEntity['prototype'], 'id', void 0);

__decorate([(0, typeorm_1["CreateDateColumn"])({
  'type': "datetime",
  'length': 0,
  'nullable': false,
  'name': "createdAt",
  'comment': "创建时间"
}), __metadata("design:type", Date)], BaseEntity["prototype"], "createdAt", void 0);

__decorate([(0, typeorm_1["UpdateDateColumn"])({
  'type': "datetime",
  'length': 0,
  'nullable': false,
  'name': "updatedAt",
  'comment': "更新时间"
}), __metadata("design:type", Date)], BaseEntity["prototype"], "updatedAt", void 0);

__decorate([(0, typeorm_1["DeleteDateColumn"])({
  'type': "datetime",
  'length': 0,
  'nullable': false,
  'name': "deletedAt",
  'comment': "删除时间"
}), __metadata("design:type", Date)], BaseEntity["prototype"], "deletedAt", void 0);

BaseEntity = __decorate([(0, typeorm_1["Entity"])()], BaseEntity);
exports['BaseEntity'] = BaseEntity;