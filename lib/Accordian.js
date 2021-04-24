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
require("./Accordion.css");
var Accordion = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.wrap, wrap = _b === void 0 ? false : _b, _c = _a.defaultOpen, defaultOpen = _c === void 0 ? false : _c;
    var _d = react_1.useState(defaultOpen), isOpen = _d[0], setIsOpen = _d[1];
    title = title.toString();
    content = content.toString();
    var styleObject = {
        container: {
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            width: wrap ? 'fit-content' : '100%'
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        title: {
            color: '#22242E',
            fontSize: 20,
            letterSpacing: 0.3,
            textAlign: 'left',
            flexGrow: 1
        },
        content: {
            color: '#636672',
            fontSize: 15,
            lineHeight: 22,
            textAlign: 'justify',
            width: '100%'
        },
        icon: {
            width: 20,
            height: 20,
            stroke: '#22242E',
            strokeWidth: 4,
        },
        contentContainer: {},
    };
    return (react_1.default.createElement("div", { className: "react-accordion-collapsible-container", style: styleObject.container },
        react_1.default.createElement("div", { className: "react-accordion-collapsible-title-container", style: styleObject.titleContainer },
            react_1.default.createElement("p", { className: "react-accordion-collapsible-title", style: styleObject.title }, title),
            react_1.default.createElement(react_1.default.Fragment, null, isOpen ?
                // Minus icon (accordion open)
                react_1.default.createElement("svg", { className: "icon", viewBox: "0 0 24 24", width: 20, height: 20, style: styleObject.icon },
                    react_1.default.createElement("path", { d: "M 2,12 L 22,12 M 12,2 L 12,22" }))
                :
                    // Plus icon (accordion closed)
                    react_1.default.createElement("svg", { className: "icon", viewBox: "0 0 24 24", width: 20, height: 20, style: styleObject.icon },
                        react_1.default.createElement("path", { d: "M 2,12 L 22,12" })))),
        react_1.default.createElement("div", { className: "react-accordion-collapsible-content-container", style: styleObject.contentContainer },
            react_1.default.createElement("p", { className: "content", style: styleObject.content }, content))));
};
exports.default = Accordion;
/*

<Accordion
    title="This is title"
    content="this is content"
    defaultOpen={true}
    wrap={false}
/>

*/ 
//# sourceMappingURL=Accordian.js.map