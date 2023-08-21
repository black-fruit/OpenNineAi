'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['MidjourneyActionEnum'] = exports["MidjourneyStatusEnum"] = void 0;
var MidjourneyStatusEnum;

(function (_0xbb99f3) {
  _0xbb99f3[_0xbb99f3["WAITING"] = 1] = "WAITING";
  _0xbb99f3[_0xbb99f3["DRAWING"] = 2] = "DRAWING";
  _0xbb99f3[_0xbb99f3["DRAWED"] = 3] = "DRAWED";
  _0xbb99f3[_0xbb99f3['DRAWFAIL'] = 4] = 'DRAWFAIL';
  _0xbb99f3[_0xbb99f3["DRAWTIMEOUT"] = 5] = "DRAWTIMEOUT";
})(MidjourneyStatusEnum = exports["MidjourneyStatusEnum"] || (exports['MidjourneyStatusEnum'] = {}));

var MidjourneyActionEnum;

(function (_0x57806f) {
  _0x57806f[_0x57806f["DRAW"] = 1] = "DRAW";
  _0x57806f[_0x57806f["UPSCALE"] = 2] = 'UPSCALE';
  _0x57806f[_0x57806f["VARIATION"] = 3] = "VARIATION";
  _0x57806f[_0x57806f['GENERATE'] = 4] = "GENERATE";
  _0x57806f[_0x57806f["REGENERATE"] = 5] = 'REGENERATE';
  _0x57806f[_0x57806f["ZOOM"] = 6] = 'ZOOM';
  _0x57806f[_0x57806f["VARY"] = 7] = 'VARY';
})(MidjourneyActionEnum = exports["MidjourneyActionEnum"] || (exports["MidjourneyActionEnum"] = {}));