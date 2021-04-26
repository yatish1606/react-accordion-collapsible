"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Accordian_1 = __importDefault(require("./Accordian"));
var MultiAccordion = function (_a) {
    var items = _a.items, _b = _a.allowMultipleExpanded, allowMultipleExpanded = _b === void 0 ? false : _b, _c = _a.wrap, wrap = _c === void 0 ? false : _c, _d = _a.defaultOpen, defaultOpen = _d === void 0 ? [] : _d, _e = _a.expandIcon, expandIcon = _e === void 0 ? null : _e, _f = _a.collapseIcon, collapseIcon = _f === void 0 ? null : _f, _g = _a.animation, animation = _g === void 0 ? true : _g, _h = _a.animationDuration, animationDuration = _h === void 0 ? 0.25 : _h, _j = _a.reverseIconPosition, reverseIconPosition = _j === void 0 ? false : _j, _k = _a.iconSize, iconSize = _k === void 0 ? 16 : _k, _l = _a.activeTitleColor, activeTitleColor = _l === void 0 ? '#22242E' : _l, _m = _a.contentCharLimit, contentCharLimit = _m === void 0 ? null : _m;
    var _o = react_1.useState(allowMultipleExpanded ? null : 0), activeAccordion = _o[0], setActiveAccordion = _o[1];
    var _p = react_1.useState(defaultOpen), defaultOpenArray = _p[0], setDefaultOpenArray = _p[1];
    var setActiveState = function (index) {
        if (allowMultipleExpanded) {
            var tempArray = __spreadArray([], defaultOpenArray);
            if (tempArray.indexOf(index) === -1)
                tempArray.push(index);
            else
                tempArray.splice(tempArray.indexOf(index), 1);
            setDefaultOpenArray(tempArray);
            return;
        }
        setActiveAccordion(index);
    };
    return (react_1.default.createElement(react_1.Fragment, null, items.map(function (_a, index) {
        var title = _a.title, content = _a.content;
        return react_1.default.createElement(Accordian_1.default, { id: index, title: title, content: content, wrap: wrap, onClick: function () { return setActiveState(index); }, defaultOpen: allowMultipleExpanded ? (defaultOpenArray === null || defaultOpenArray === void 0 ? void 0 : defaultOpenArray.indexOf(index)) !== -1 : activeAccordion === index, expandIcon: expandIcon, collapseIcon: collapseIcon, animation: animation, animationDuration: animationDuration, reverseIconPosition: reverseIconPosition, iconSize: iconSize, activeTitleColor: activeTitleColor, contentCharLimit: contentCharLimit });
    })));
};
exports.default = MultiAccordion;
//# sourceMappingURL=MultiAccordion.js.map