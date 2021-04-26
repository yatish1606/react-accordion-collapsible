import React from 'react'
import { Accordion } from 'react-accordion-collapsible'
import { ChevronRight, ChevronDown } from 'react-feather'

const Example = () => {
    return (
        <Accordion
            title="Example title for React Accordion Collapsible"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            expandIcon={<ChevronRight size={16}/>}
            collapseIcon={<ChevronDown size={16}/>}
        />
    )
}

export default Example