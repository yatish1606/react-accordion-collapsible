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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Accordian_1 = __importDefault(require("./Accordian"));
function useForceUpdate() {
    const [value, setValue] = react_1.useState(0);
    return () => setValue(value => value + 1);
}
const MultiAccordion = ({ items, allowMultipleExpanded = false, wrap = false, defaultOpen = [], expandIcon = null, collapseIcon = null, animation = true, animationDuration = 0.25, reverseIconPosition = false, iconSize = 16, activeTitleColor = '#22242E', contentCharLimit = null }) => {
    const [activeAccordion, setActiveAccordion] = react_1.useState(allowMultipleExpanded ? [] : Array.from({ length: items.length }, i => i = false));
    const [defaultOpenArray, setDefaultOpenArray] = react_1.useState(defaultOpen);
    const forceUpdate = useForceUpdate();
    console.log('axctiveAcc', activeAccordion);
    const setActiveState = (index) => {
        if (allowMultipleExpanded) {
            const tempArray = [...defaultOpenArray];
            if (tempArray.indexOf(index) === -1)
                tempArray.push(index);
            else
                tempArray.splice(tempArray.indexOf(index), 1);
            setDefaultOpenArray(tempArray);
            return;
        }
        const tempArraySingleExpanded = [...activeAccordion];
        // accordion is already open
        if (tempArraySingleExpanded[index]) {
            tempArraySingleExpanded[index] = false;
        }
        else {
            tempArraySingleExpanded.map(i => i = false)[index] = true;
        }
        setActiveAccordion(tempArraySingleExpanded);
        console.log(tempArraySingleExpanded, activeAccordion);
        //forceUpdate()
    };
    return (react_1.default.createElement(react_1.Fragment, null, items.map(({ title, content, }, index) => {
        return react_1.default.createElement(Accordian_1.default, { id: index, title: title, content: content, wrap: wrap, onClick: () => setActiveState(index), defaultOpen: allowMultipleExpanded ? (defaultOpenArray === null || defaultOpenArray === void 0 ? void 0 : defaultOpenArray.indexOf(index)) !== -1 : activeAccordion[index], expandIcon: expandIcon, collapseIcon: collapseIcon, animation: animation, animationDuration: animationDuration, reverseIconPosition: reverseIconPosition, iconSize: iconSize, activeTitleColor: activeTitleColor, contentCharLimit: contentCharLimit });
    })));
};
exports.default = MultiAccordion;
//# sourceMappingURL=MultiAccordion.js.map