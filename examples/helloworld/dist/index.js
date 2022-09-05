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
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = exports.watch = exports.createComponent = exports.createPage = exports.createApp = void 0;
// createApp 名字冲突，所以 * as了
var platform = __importStar(require("./platform/index"));
function createApp(config) {
    var mpx = new EXPORT_MPX();
    platform.createApp(config);
}
exports.createApp = createApp;
function createPage(config) {
    platform.createPage(config);
}
exports.createPage = createPage;
function createComponent(config) {
    platform.createComponent(config);
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
