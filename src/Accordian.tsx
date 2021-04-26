import React, { 
    Fragment,
    ReactElement, 
    ReactNode, 
    useState,
    MouseEvent,
    FC
} from 'react'


const Accordion : FC<{

    id ?: number,
    title : string | number,
    content : string | number,
    wrap ?: boolean,
    defaultOpen ?: boolean,
    expandIcon ?: ReactElement | null,
    collapseIcon ?: ReactElement | null,
    animation ?: boolean,
    animationDuration ?: number | string,
    children ?: ReactNode,
    reverseIconPosition ?: boolean,
    iconSize ?: number,
    onClick ?: (event : MouseEvent<HTMLDivElement>) => void,
    onExpand ?: (event : MouseEvent<HTMLDivElement>) => void,
    onCollapse ?: (event : MouseEvent<HTMLDivElement>) => void,
    activeTitleColor ?: string,
    contentCharLimit ?: number | null,

}> = ({ 

    id = Math.floor(Math.random() * Date.now()),
    title, 
    content, 
    wrap = false,
    defaultOpen = false,
    expandIcon = null,
    collapseIcon = null,
    animation = true,
    animationDuration = 0.25,
    children = <></>,
    reverseIconPosition = false,
    iconSize = 16,
    onClick = () => {},
    onExpand = () => {},
    onCollapse = () => {},
    activeTitleColor = '#22242E',
    contentCharLimit = null,

}) => {

    const [isOpen, setIsOpen] = useState(defaultOpen)

    title = title.toString()
    content = content.toString()
    
    if(contentCharLimit !== null) {
        content = content.length > contentCharLimit ? content.slice(0,contentCharLimit).concat(' ... ') : content
    }

    const transitionDuration = animationDuration.toString().indexOf('s') === -1 ? `${animationDuration.toString()}s` : `${animationDuration.toString()}`

    const onClickHandler = (e : MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        
        setIsOpen(!isOpen)
        onClick(e)

        isOpen ? onCollapse(e) : onExpand(e)
    }

    interface style {
        container : Object,
        titleContainer: Object,
        title: Object,
        content: Object,
        icon: Object,
        contentContainer: Object,
        iconContainer : Object
    }
    
    const styleObject : style = {
        
        container : {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: wrap ? 'fit-content' : 'auto',
            borderRadius: 8,  
            overflow: 'hidden',
            margin: isOpen ? '10px' : '0 10px',
            // boxShadow : isOpen ? '0px 10px 15px #E5E5E5' : 'none'
        },
    
        titleContainer : {
            display: 'flex',
            flexDirection: reverseIconPosition ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            cursor: 'pointer',
            padding: isOpen ? '20px' : '10px 20px',
            transition: animation ? '0.2s ease-out' : 'none',
            transitionDuration,
            backgroundColor: isOpen ? '#F0F0F0' : 'transparent'
        },
    
        title : {
            color: isOpen ? activeTitleColor : '#22242E',
            fontSize: 14.5,
            letterSpacing: 0.5,
            lineHeight: '19px',
            textAlign: 'left',
            flexGrow: 1,
            margin: 0,
            marginRight: reverseIconPosition ? 0 : 20,
            marginLeft: reverseIconPosition ? 20 : 0,
            fontWeight: 500,
            boxSizing: 'border-box',
            fontFamily:'Plus Jakarta Display'
        },

        content : {
            color: '#636672',
            fontSize: 13.5,
            lineHeight: '17px',
            letterSpacing: 0.35,
            textAlign: 'justify',
            width: '100%',
            margin: 0,
            visibility : isOpen ? 'visible' : 'hidden',
            transition: 'visibility 0.15s ease-out',
            boxSizing: 'border-box',
            fontFamily:'Plus Jakarta Text',
            fontWeight: 300,
        },

        icon : {
            width: iconSize,
            height: iconSize,
            stroke: '#22242E',
            strokeWidth: 3,
            strokeLinecap: 'round',
            transition: '0.2s ease-out',
            boxSizing: 'border-box'
        },
    
        contentContainer : {
            boxSizing: 'border-box',
            padding: isOpen ? '12px 20px 20px 20px' : '0 20px',
            height: isOpen ? 'auto' : 0,
            transition: animation ? '0.2s ease-out' : 'none',
            transitionDuration,
            overflow: 'hidden',
            backgroundColor:'white',
        },

        iconContainer : {
            height: '100%',
            minWidth : 20,
            disply: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

    }

    return (

        <Fragment>
            
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-text.min.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css"/> 
            </head>
        
            <div
                className="react-accordion-collapsible-container"
                style = {styleObject.container}
                key={id}
            >

                <div 
                    className="react-accordion-collapsible-title-container" 
                    style={styleObject.titleContainer}
                    onClick={e => onClickHandler(e)}
                >
                    
                    <p className="react-accordion-collapsible-title" style={styleObject.title}>{title}</p>
                    
                    <div className="react-accordion-collapsible-icon-container" style={styleObject.iconContainer}>
                    {
                        isOpen ? 
                        
                            collapseIcon !== null ? 
                            
                            <Fragment>
                                {collapseIcon}
                            </Fragment> 
                            
                            : 
                            // Minus icon (accordion open)
                            <svg className="icon" viewBox="0 0 24 24" width={iconSize} height={iconSize} style={styleObject.icon}>
                                <path d="M 2,12 L 22,12" />
                            </svg>

                        : 
                        
                            expandIcon !== null ? 
                            
                            <Fragment>
                                {expandIcon}
                            </Fragment> 
                            
                            :
                            // Plus icon (accordion closed)
                            <svg className="icon" viewBox="0 0 24 24" width={iconSize} height={iconSize} style={styleObject.icon}>
                                <path d="M 2,12 L 22,12  M 12,2 L 12,22" />
                            </svg>

                    }
                    </div>

                </div>

                <div 
                    className="react-accordion-collapsible-content-container"
                    style={styleObject.contentContainer}
                >
                    <p className="content" style={styleObject.content}>{content}</p>

                    {children}

                </div>

            </div>

        </Fragment>
    )
}

export default Accordion
