import React, { 
    FC, 
    Fragment,
    ReactElement,
    useCallback,
    useState
} from 'react'
import Accordion from './Accordian'

interface AccordionItem {
    title : string,
    content : string,
}

function useForceUpdate () {
    const [value, setValue] = useState(0)
    return () => setValue(value => value + 1)
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

    const [activeAccordion, setActiveAccordion] = useState(allowMultipleExpanded ? [] : Array.from({length: items.length}, i => i = false))
    const [defaultOpenArray, setDefaultOpenArray] = useState(defaultOpen)
    
    const forceUpdate = useForceUpdate()

    console.log('axctiveAcc', activeAccordion)
    const setActiveState = (index : number) => {
        
        if(allowMultipleExpanded) {
            const tempArray : Array<number> = [...defaultOpenArray]
            if(tempArray.indexOf(index) === -1) tempArray.push(index) 
            else tempArray.splice(tempArray.indexOf(index), 1)
            setDefaultOpenArray(tempArray)
            return
        }

        const tempArraySingleExpanded : Array<boolean> = [...activeAccordion]

        // accordion is already open
        if(tempArraySingleExpanded[index]) {
            tempArraySingleExpanded[index] = false
        } else {
            tempArraySingleExpanded.map(i => i = false)[index] = true 
        }
        
        setActiveAccordion(tempArraySingleExpanded)
        console.log( tempArraySingleExpanded, activeAccordion)
        //forceUpdate()
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
                    defaultOpen={allowMultipleExpanded ? defaultOpenArray?.indexOf(index) !== -1 : activeAccordion[index]}
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