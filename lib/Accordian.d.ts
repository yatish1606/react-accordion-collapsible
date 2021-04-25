import React, { ReactElement, ReactNode, MouseEvent } from 'react';
declare const Accordion: React.FC<{
    title: string | number;
    content: string | number;
    wrap?: boolean;
    defaultOpen?: boolean;
    expandIcon?: ReactElement | null;
    collapseIcon?: ReactElement | null;
    animation?: boolean;
    animationDuration?: number | string;
    children?: ReactNode;
    reverseIconPosition?: boolean;
    iconSize?: number;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onExpand?: (event: MouseEvent<HTMLDivElement>) => void;
    onCollapse?: (event: MouseEvent<HTMLDivElement>) => void;
    activeTitleColor?: string;
}>;
export default Accordion;
//# sourceMappingURL=Accordian.d.ts.map