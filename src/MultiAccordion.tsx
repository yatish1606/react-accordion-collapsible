import React, { 
    FC, 
    Fragment,
    ReactElement,
    useState
} from 'react'
import Accordion from './Accordian'

interface AccordionItem {
    title : string,
    content : string,
}

const MultiAccordion : FC<{

    items : Array<AccordionItem>,
    allowMultipleExpanded ?: boolean,
    wrap ?: boolean,
    defaultOpen ?: Array<number>,
    expandIcon ?: ReactElement | null,
    collapseIcon ?: ReactElement | null,
    animation ?: boolean,
    animationDuration ?: number | string,
    reverseIconPosition ?: boolean,
    iconSize ?: number,
    activeTitleColor ?: string,
    contentCharLimit ?: number | null,

}> = ({
    items,
    allowMultipleExpanded = false,
    wrap = false,
    defaultOpen = [],
    expandIcon = null,
    collapseIcon = null,
    animation = true,
    animationDuration = 0.25,
    reverseIconPosition = false,
    iconSize = 16,
    activeTitleColor = '#22242E',
    contentCharLimit = null

}) => {

    const [activeAccordion, setActiveAccordion] = useState(allowMultipleExpanded ? null : 0)
    const [defaultOpenArray, setDefaultOpenArray] = useState(defaultOpen)


    const setActiveState = (index : number) => {
        if(allowMultipleExpanded) {
            const tempArray : Array<number> = [...defaultOpenArray]
            if(tempArray.indexOf(index) === -1) tempArray.push(index) 
            else tempArray.splice(tempArray.indexOf(index), 1)
            setDefaultOpenArray(tempArray)
            return
        }
        setActiveAccordion(index)
    }


    return (
        <Fragment>
            {items.map(({
                title,
                content,
            }, index) => {
                return <Accordion
                    id={index}
                    title={title}
                    content={content}
                    wrap={wrap}
                    onClick={() => setActiveState(index)}
                    defaultOpen={allowMultipleExpanded ? defaultOpenArray?.indexOf(index) !== -1 : activeAccordion === index}
                    expandIcon={expandIcon}
                    collapseIcon={collapseIcon}
                    animation={animation}
                    animationDuration={animationDuration}
                    reverseIconPosition={reverseIconPosition}
                    iconSize={iconSize}
                    activeTitleColor={activeTitleColor}
                    contentCharLimit={contentCharLimit}

                    />
            })}
        </Fragment>
    )
}

export default MultiAccordion