"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
function createApp(options) {
    // web的实现方式剔除掉
    var config = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        config[_i - 1] = arguments[_i];
    }
    var builtInMixins = [{
            getMpx: function () {
                return index_1.default;
            }
        }];
    options.mixins = builtInMixins;
    // 暂时没想到什么场景需要自定义渲染方法
    // @ts-ignore App是微信小程序原生内置方法
    var ctor = config.customCtor || global.currentCtor || App;
    ctor(options);
}
exports.default = createApp;
