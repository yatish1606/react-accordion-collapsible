import React from 'react'
import { Accordion } from 'react-accordion-collapsible'

const Example = () => {
    return (
        <Accordion
            title="Example title for React Accordion Collapsible"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            onClick={() => alert('This will run whenever accordion is expanded and collapsed')}
            onExpand={() => alert('This will run whenever accordion is opened')}
            onCollapse={() => alert('This will run whenever accordion is closed')}
        />
    )
}

export default Example