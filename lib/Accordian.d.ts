import { ReactElement, ReactNode, MouseEvent, FC } from 'react';
declare const Accordion: FC<{
    id?: number;
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
    contentCharLimit?: number | null;
}>;
export default Accordion;
//# sourceMappingURL=Accordian.d.ts.map