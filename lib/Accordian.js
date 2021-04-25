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
    var title = _a.title, content = _a.content, _b = _a.wrap, wrap = _b === void 0 ? false : _b, _c = _a.defaultOpen, defaultOpen = _c === void 0 ? false : _c, _d = _a.expandIcon, expandIcon = _d === void 0 ? null : _d, _e = _a.collapseIcon, collapseIcon = _e === void 0 ? null : _e, _f = _a.animation, animation = _f === void 0 ? true : _f, _g = _a.animationDuration, animationDuration = _g === void 0 ? 0.25 : _g, _h = _a.children, children = _h === void 0 ? react_1.default.createElement(react_1.default.Fragment, null) : _h, _j = _a.reverseIconPosition, reverseIconPosition = _j === void 0 ? false : _j, _k = _a.iconSize, iconSize = _k === void 0 ? 16 : _k, _l = _a.onClick, onClick = _l === void 0 ? function () { } : _l, _m = _a.onExpand, onExpand = _m === void 0 ? function () { } : _m, _o = _a.onCollapse, onCollapse = _o === void 0 ? function () { } : _o, _p = _a.activeTitleColor, activeTitleColor = _p === void 0 ? '#22242E' : _p;
    var _q = react_1.useState(defaultOpen), isOpen = _q[0], setIsOpen = _q[1];
    title = title.toString();
    content = content.toString();
    var transitionDuration = animationDuration.toString().indexOf('s') === -1 ? animationDuration.toString() + "s" : "" + animationDuration.toString();
    var onClickHandler = function (e) {
        setIsOpen(!isOpen);
        onClick(e);
        if (isOpen)
            onCollapse(e);
        else
            onExpand(e);
    };
    var styleObject = {
        container: {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: wrap ? 'fit-content' : 'auto',
            borderRadius: 8,
            overflow: 'hidden',
            margin: isOpen ? '10px' : '0 10px',
            // boxShadow : isOpen ? '0px 10px 15px #E5E5E5' : 'none'
        },
        titleContainer: {
            display: 'flex',
            flexDirection: reverseIconPosition ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            cursor: 'pointer',
            padding: isOpen ? '20px' : '10px 20px',
            transition: animation ? '0.2s ease-out' : 'none',
            transitionDuration: transitionDuration,
            backgroundColor: isOpen ? '#F0F0F0' : 'transparent'
        },
        title: {
            color: isOpen ? activeTitleColor : '#22242E',
            fontSize: 14.5,
            letterSpacing: 0.5,
            lineHeight: '19px',
            textAlign: 'left',
            flexGrow: 1,
            margin: 0,
            marginRight: reverseIconPosition ? 0 : 20,
            marginLeft: reverseIconPosition ? 20 : 0,
            fontWeight: 500,
            boxSizing: 'border-box',
            fontFamily: 'Plus Jakarta Display'
        },
        content: {
            color: '#636672',
            fontSize: 13.5,
            lineHeight: '17px',
            letterSpacing: 0.35,
            textAlign: 'justify',
            width: '100%',
            margin: 0,
            visibility: isOpen ? 'visible' : 'hidden',
            transition: 'visibility 0.15s ease-out',
            boxSizing: 'border-box',
            fontFamily: 'Plus Jakarta Text',
            fontWeight: 300,
        },
        icon: {
            width: iconSize,
            height: iconSize,
            stroke: '#22242E',
            strokeWidth: 3,
            strokeLinecap: 'round',
            transition: '0.2s ease-out',
            boxSizing: 'border-box'
        },
        contentContainer: {
            boxSizing: 'border-box',
            padding: isOpen ? '12px 20px 20px 20px' : '0 20px',
            height: isOpen ? 'auto' : 0,
            transition: animation ? '0.2s ease-out' : 'none',
            transitionDuration: transitionDuration,
            overflow: 'hidden',
            backgroundColor: 'white',
        },
        iconContainer: {
            height: '100%',
            minWidth: 20,
            disply: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-text.min.css" }),
            react_1.default.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css" })),
        react_1.default.createElement("div", { className: "react-accordion-collapsible-container", style: styleObject.container },
            react_1.default.createElement("div", { className: "react-accordion-collapsible-title-container", style: styleObject.titleContainer, onClick: function (e) { return onClickHandler(e); } },
                react_1.default.createElement("p", { className: "react-accordion-collapsible-title", style: styleObject.title }, title),
                react_1.default.createElement("div", { className: "react-accordion-collapsible-icon-container", style: styleObject.iconContainer }, isOpen ?
                    collapseIcon !== null ?
                        react_1.default.createElement(react_1.Fragment, null, collapseIcon)
                        :
                            // Minus icon (accordion open)
                            react_1.default.createElement("svg", { className: "icon", viewBox: "0 0 24 24", width: iconSize, height: iconSize, style: styleObject.icon },
                                react_1.default.createElement("path", { d: "M 2,12 L 22,12" }))
                    :
                        expandIcon !== null ?
                            react_1.default.createElement(react_1.Fragment, null, expandIcon)
                            :
                                // Plus icon (accordion closed)
                                react_1.default.createElement("svg", { className: "icon", viewBox: "0 0 24 24", width: iconSize, height: iconSize, style: styleObject.icon },
                                    react_1.default.createElement("path", { d: "M 2,12 L 22,12  M 12,2 L 12,22" })))),
            react_1.default.createElement("div", { className: "react-accordion-collapsible-content-container", style: styleObject.contentContainer },
                react_1.default.createElement("p", { className: "content", style: styleObject.content }, content),
                children))));
};
exports.default = Accordion;
/*

<Accordion
    title="This is title with a longer length just for testing better than lorem ipsum"
    content="this is content so maybe this can be used to test a accordion with larger content sizes"
    defaultOpen={false}
    wrap={true}
    animation={true}
    animationDuration={0.1}
/>

*/ 
//# sourceMappingURL=Accordian.js.map