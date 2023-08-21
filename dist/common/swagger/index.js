'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});
exports['createSwagger'] = void 0;

const swagger_1 = require("@nestjs/swagger"),
      swaggerOptions = new swagger_1["DocumentBuilder"]()["setTitle"]("Nine Team api document")["setDescription"]("Nine Team api document")['setVersion']("1.0.0")["addBearerAuth"]()["build"]();

function createSwagger(_0x370df8) {
  const _0x29b8c7 = swagger_1["SwaggerModule"]['createDocument'](_0x370df8, swaggerOptions);

  swagger_1["SwaggerModule"]["setup"]('/docs', _0x370df8, _0x29b8c7);
}

exports["createSwagger"] = createSwagger;