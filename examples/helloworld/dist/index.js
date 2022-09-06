"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = exports.watch = exports.createComponent = exports.createPage = exports.createApp = void 0;
// createApp 名字冲突，所以 * as了
var platform = __importStar(require("./platform/index"));
function createApp(config) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var mpx = new EXPORT_MPX();
    // ...rest 透传过去没问题啊，但是createApp只有俩参数，并没做解构处理，其他两个方法同理
    // 另外发现，不注册App方法，page居然也能运行, 应该是App,page,component分别独立运行的
    platform.createApp.apply(platform, __spreadArray([Object.assign({ proto: mpx.proto }, config)], rest, false));
}
exports.createApp = createApp;
function createPage(config) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var mpx = new EXPORT_MPX();
    platform.createPage.apply(platform, __spreadArray([Object.assign({ proto: mpx.proto }, config)], rest, false));
}
exports.createPage = createPage;
function createComponent(config) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var mpx = new EXPORT_MPX();
    platform.createComponent.apply(platform, __spreadArray([Object.assign({ proto: mpx.proto }, config)], rest, false));
}
exports.createComponent = createComponent;
var observable;
exports.observable = observable;
var watch;
exports.watch = watch;
function factory() {
    function MPX() {
    }
    return MPX;
}
var EXPORT_MPX = factory();
exports.default = EXPORT_MPX;
