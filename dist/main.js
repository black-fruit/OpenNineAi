'use strict';

Object["defineProperty"](exports, "__esModule", {
  'value': true
});

const Dotenv = require("dotenv");

Dotenv["config"]({
  'path': ".env"
});

const core_1 = require('@nestjs/core'),
      app_module_1 = require('./app.module'),
      swagger_1 = require("./common/swagger"),
      allExceptions_filter_1 = require("./common/filters/allExceptions.filter"),
      typeOrmQueryFailed_filter_1 = require("./common/filters/typeOrmQueryFailed.filter"),
      common_1 = require("@nestjs/common"),
      transform_interceptor_1 = require("./common/interceptors/transform.interceptor"),
      main_1 = require("./config/main"),
      initDatabase_1 = require("./modules/database/initDatabase"),
      compression = require("compression"),
      xmlBodyParser = require("express-xml-bodyparser");

async function bootstrap() {
  await (0, initDatabase_1["initDatabase"])();

  const _0x3e73c9 = await core_1["NestFactory"]["create"](app_module_1["AppModule"]);

  _0x3e73c9["use"](compression());

  _0x3e73c9["use"](xmlBodyParser());

  _0x3e73c9["enableCors"]();

  _0x3e73c9["setGlobalPrefix"](main_1["APIPREFIX"]);

  _0x3e73c9["useGlobalInterceptors"](new transform_interceptor_1["TransformInterceptor"]());

  _0x3e73c9["useGlobalFilters"](new typeOrmQueryFailed_filter_1["TypeOrmQueryFailedFilter"]());

  _0x3e73c9["useGlobalFilters"](new allExceptions_filter_1["AllExceptionsFilter"]());

  _0x3e73c9["useGlobalPipes"](new common_1['ValidationPipe']());

  _0x3e73c9["getHttpAdapter"]()["getInstance"]()['set']("views", "templates/pages");

  _0x3e73c9["getHttpAdapter"]()["getInstance"]()["set"]("view engine", "hbs");

  process['on']("uncaughtException", function (_0x1b34d7) {
    console["log"](_0x1b34d7);
  });
  (0, swagger_1["createSwagger"])(_0x3e73c9);

  const _0x2741ec = await _0x3e73c9["listen"](main_1["PORT"], () => {
    common_1["Logger"]["log"]("服务已经启动,接口请访问: http://localhost:" + main_1["PORT"] + main_1["APIPREFIX"], "Main");
    common_1['Logger']["log"]("swagger文档已经就绪,文档地址请访问: http://localhost:" + main_1["PORT"] + main_1["SWAGGERPREFIX"], "Main");
  });

  _0x2741ec["timeout"] = 300000;
}

bootstrap();