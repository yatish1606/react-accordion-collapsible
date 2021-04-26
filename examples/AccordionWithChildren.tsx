import React from 'react'
import { Accordion } from 'react-accordion-collapsible'

const Example = () => {
    return (
        <Accordion
            title="Example title for React Accordion Collapsible"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        >
            <div>
                <p>Children will be rendered below the content and will be hidden when accordion is collapsed</p>
            </div>
        </Accordion>
    )
}

export default Example