import React from 'react'
import { Accordion } from 'react-accordion-collapsible'

const Example = () => {
    return (
        <Accordion
            title="Example title for React Accordion Collapsible"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            animation
            animationDuration={0.5}
        />
    )
}

export default Example