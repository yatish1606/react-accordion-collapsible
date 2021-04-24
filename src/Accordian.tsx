import React , { useState } from 'react'
import './Accordion.css'


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


    interface style {
        container : Object,
        titleContainer: Object,
        title: Object,
        content: Object,
        icon: Object,
        contentContainer: Object
    }
    
    const styleObject : style = {
        
        container : {
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            width: wrap ? 'fit-content' : '100%'
        },
    
        titleContainer : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
    
        title : {
            color: '#22242E',
            fontSize: 20,
            letterSpacing: 0.3,
            textAlign: 'left',
            flexGrow: 1
        },

        content : {
            color: '#636672',
            fontSize: 15,
            lineHeight: 22,
            textAlign: 'justify',
            width: '100%'
        },

        icon : {
            width: 20,
            height: 20,
            stroke: '#22242E',
            strokeWidth: 4,
        },
    
        contentContainer : {
    
        },

    }


    return (

        <div
            className="react-accordion-collapsible-container"
            style = {styleObject.container}
        >
            
            <div className="react-accordion-collapsible-title-container" style={styleObject.titleContainer}>
                
                <p className="react-accordion-collapsible-title" style={styleObject.title}>{title}</p>
                
                <React.Fragment>
                {
                    isOpen ? 
                    
                    // Minus icon (accordion open)
                    <svg className="icon" viewBox="0 0 24 24" width={20} height={20} style={styleObject.icon}>
                        <path d="M 2,12 L 22,12 M 12,2 L 12,22" />
                    </svg>

                    : 
                    
                    // Plus icon (accordion closed)
                    <svg className="icon" viewBox="0 0 24 24" width={20} height={20} style={styleObject.icon}>
                        <path d="M 2,12 L 22,12" />
                    </svg>

                }
                </React.Fragment>

            </div>

            <div 
                className="react-accordion-collapsible-content-container"
                style={styleObject.contentContainer}
            >
                <p className="content" style={styleObject.content}>{content}</p>
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