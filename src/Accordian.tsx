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
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: wrap ? 'fit-content' : '100%',
            borderRadius: 5,  
            overflow: 'hidden',
            margin:'10px 0',
            boxShadow : isOpen ? '0px 10px 15px #E5E5E5' : 'none'
        },
    
        titleContainer : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            cursor: 'pointer',
            padding: '20px',
            backgroundColor: isOpen ? '#E5F3FF' : 'transparent'
        },
    
        title : {
            color: '#22242E',
            fontSize: 18,
            letterSpacing: 0.5,
            textAlign: 'left',
            flexGrow: 1,
            margin: 0,
            marginRight: 20,
            fontWeight: 700,
            boxSizing: 'border-box',
            fontFamily:'Manrope'
        },

        content : {
            color: '#636672',
            fontSize: 15,
            lineHeight: '22px',
            letterSpacing: 0.6,
            textAlign: 'justify',
            width: '100%',
            margin: 0,
            visibility : isOpen ? 'visible' : 'hidden',
            transition: 'visibility 0.15s ease-out',
            boxSizing: 'border-box',
            fontFamily:'Manrope',
            fontWeight: 300,
        },

        icon : {
            width: 16,
            height: 16,
            stroke: '#22242E',
            strokeWidth: 2.5,
            strokeLinecap: 'round',
            transition: '0.2s ease-out',
            boxSizing: 'border-box'
        },
    
        contentContainer : {
            boxSizing: 'border-box',
            padding: isOpen ? '20px' : '0 20px',
            height: isOpen ? 'auto' : 0,
            transition: '0.2s ease-out',
            overflow: 'hidden',
        },

    }


    return (

        <div
            className="react-accordion-collapsible-container"
            style = {styleObject.container}
        >

            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700;800&display=swap" rel="stylesheet"></link>
            </head>
            
            <div 
                className="react-accordion-collapsible-title-container" 
                style={styleObject.titleContainer}
                onClick={() => setIsOpen(!isOpen)}
            >
                
                <p className="react-accordion-collapsible-title" style={styleObject.title}>{title}</p>
                
                <React.Fragment>
                {
                    isOpen ? 
                    
                    // Minus icon (accordion open)
                    <svg className="icon" viewBox="0 0 24 24" width={16} height={16} style={styleObject.icon}>
                        <path d="M 2,12 L 22,12" />
                    </svg>

                    : 
                    
                    // Plus icon (accordion closed)
                    <svg className="icon" viewBox="0 0 24 24" width={16} height={16} style={styleObject.icon}>
                        <path d="M 2,12 L 22,12  M 12,2 L 12,22" />
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