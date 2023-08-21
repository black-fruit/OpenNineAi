'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports["compileNetwork"] = void 0;

const axios_1 = require("axios");

function formatSearchData(_0xd778fa, _0x2cbde4) {
  const _0x40d1ee = _0xd778fa['map'](({
    "title": _0x4e126e,
    "body": _0x39a6c2,
    "href": _0x4e6147
  }) => "'" + _0x4e126e + "' : " + _0x39a6c2 + " ;")["join"]("\n\n"),
        _0x4e1d4e = "Instructions: Reply to me in the language of my request or question above. Give a comprehensive answer to the question or request I have made above. Below are some results from a web search. Use the following results to summarize the answers \n\n";

  return _0x2cbde4 + "\n\n" + _0x4e1d4e + "\n" + _0x40d1ee;
}

async function compileNetwork(_0x4a8b0d, _0x1dda05 = 7) {
  let _0x18fbdf = [];

  try {
    const _0x201d71 = await axios_1["default"]['get']('https://s0.awsl.app/search?q=' + _0x4a8b0d + "&max_results=" + _0x1dda05);

    _0x18fbdf = _0x201d71["data"];
  } catch (_0x4d57b6) {
    _0x18fbdf = [];
  }

  return _0x18fbdf["length"] === 0 ? _0x4a8b0d : formatSearchData(_0x18fbdf, _0x4a8b0d);
}

exports["compileNetwork"] = compileNetwork;