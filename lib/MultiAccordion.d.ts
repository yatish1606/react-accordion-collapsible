import { FC, ReactElement } from 'react';
interface AccordionItem {
    title: string;
    content: string;
}
declare const MultiAccordion: FC<{
    items: Array<AccordionItem>;
    allowMultipleExpanded?: boolean;
    wrap?: boolean;
    defaultOpen?: Array<number>;
    expandIcon?: ReactElement | null;
    collapseIcon?: ReactElement | null;
    animation?: boolean;
    animationDuration?: number | string;
    reverseIconPosition?: boolean;
    iconSize?: number;
    activeTitleColor?: string;
    contentCharLimit?: number | null;
}>;
export default MultiAccordion;
//# sourceMappingURL=MultiAccordion.d.ts.map