"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createComponent(options) {
    var config = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        config[_i - 1] = arguments[_i];
    }
    // @ts-ignore Component是微信小程序原生内置方法
    Component(options);
    console.log(config, 'Component');
}
exports.default = createComponent;
