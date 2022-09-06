"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createApp(options) {
    // @ts-ignore App是微信小程序原生内置方法
    var config = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        config[_i - 1] = arguments[_i];
    }
    // 暂时没想到什么场景需要自定义渲染方法
    var ctor = config.customCtor || global.currentCtor || App;
    ctor(options);
}
exports.default = createApp;
