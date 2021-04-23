import React , { useState } from 'react'


const Accordion : React.FC<{
    title : string | number,
    content : string | number,
    wrap ?: boolean,
    defaultOpen ?: boolean,
}> = ({ 
    title, 
    content, 
    wrap = false,
    defaultOpen = false
}) => {

    const [isOpen, setIsOpen] = useState(defaultOpen)

    title = title.toString()
    content = content.toString()

    return (
        <div
            className="react-accordion-collapsible-container"
            style = {{

            }}
        >
            
            <div className="react-accordion-collapsible-title-conainer">
                {title}
            </div>

            <div 
                className="react-accordion-collapsible-content-conainer"
                style={{

                }}
            >
                {content} {wrap.toString()} {defaultOpen.toString()}
            </div>

        </div>
    )
}

export default Accordion

/*

<Accordion 
    title="This is title" 
    content="this is content"
    defaultOpen={true}
    wrap={false}
/>

*/