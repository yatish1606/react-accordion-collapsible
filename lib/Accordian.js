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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Accordion = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.wrap, wrap = _b === void 0 ? false : _b, _c = _a.defaultOpen, defaultOpen = _c === void 0 ? false : _c;
    var _d = react_1.useState(defaultOpen), isOpen = _d[0], setIsOpen = _d[1];
    title = title.toString();
    content = content.toString();
    return (react_1.default.createElement("div", { className: "react-accordion-collapsible-container", style: {} },
        react_1.default.createElement("div", { className: "react-accordion-collapsible-title-conainer" }, title),
        react_1.default.createElement("div", { className: "react-accordion-collapsible-content-conainer", style: {} },
            content,
            " ",
            wrap.toString(),
            " ",
            defaultOpen.toString())));
};
exports.default = Accordion;
//# sourceMappingURL=Accordian.js.map