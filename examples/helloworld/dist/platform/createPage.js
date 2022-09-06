"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPage(options) {
    var config = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        config[_i - 1] = arguments[_i];
    }
    // @ts-ignore Page是微信小程序原生内置方法
    Page(options);
    console.log(config, 'Page');
}
exports.default = createPage;
