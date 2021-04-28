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
const react_1 = __importStar(require("react"));
const Accordion = ({ id = Math.floor(Math.random() * Date.now()), title, content, wrap = false, defaultOpen = false, expandIcon = null, collapseIcon = null, animation = true, animationDuration = 0.25, children = react_1.default.createElement(react_1.default.Fragment, null), reverseIconPosition = false, iconSize = 16, onClick = () => { }, onExpand = () => { }, onCollapse = () => { }, activeTitleColor = '#22242E', contentCharLimit = null, }) => {
    const [isOpen, setIsOpen] = react_1.useState(defaultOpen);
    title = title.toString();
    content = content.toString();
    if (contentCharLimit !== null) {
        content = content.length > contentCharLimit ? content.slice(0, contentCharLimit).concat(' ... ') : content;
    }
    const transitionDuration = animationDuration.toString().indexOf('s') === -1 ? `${animationDuration.toString()}s` : `${animationDuration.toString()}`;
    const onClickHandler = (e) => {
        setIsOpen(!isOpen);
        onClick(e);
        isOpen ? onCollapse(e) : onExpand(e);
    };
    const styleObject = {
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
            transitionDuration,
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
            transitionDuration,
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
        react_1.default.createElement("div", { className: "react-accordion-collapsible-container", style: styleObject.container, key: id },
            react_1.default.createElement("div", { className: "react-accordion-collapsible-title-container", style: styleObject.titleContainer, onClick: e => onClickHandler(e) },
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
//# sourceMappingURL=Accordian.js.map