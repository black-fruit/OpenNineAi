'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['createRandomUid'] = void 0;

const guid_typescript_1 = require("guid-typescript");

function createRandomUid() {
  const _0x510a56 = guid_typescript_1["Guid"]['create']();

  return _0x510a56["toString"]()["substr"](0, 10)['replace']('-', '');
}

exports["createRandomUid"] = createRandomUid;