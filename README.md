## React Accordion Collapsible

A simple, clean and highly customizable accordion component for React projects. Does not require the downloading of any external dependencies.

#### Installing

`npm install react-accordion-collapsible`

#### Using the package

`
    import React from 'react'
    import { Accordion } from 'react-accordion-collapsible'

    const Example = () => {
        return (
            <Accordion
                title="Example title for React Accordion Collapsible"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        )
    }

    export default Example

`

#### Props

| prop        | isRequired           | default  | type | description |
| ------------- |:-------------:| :-----:| :-----: | ------: | 
| title | yes | - | `string` | title of the accordion |
| content | yes |  - | `string` | text content of the accordion |
| wrap | - | false | `boolean` | whether to wrap the accordion or let it take full width of parent(default) |
| defaultOpen | - | false | `boolean` | should the accordion be opened(expanded) by default |
| expandIcon | - | + | `ReactElement` | React element to replace the default expand icon (+) |
| collapseIcon | - | - | `ReactElement` | React element to replace the default collapse icon (-) |
| animation | - | true | `boolean` | whether to animate the opening and closing of the accordion |
| animationDuration | - | 0.25 | `number` or `string` | the animation duration |
| children | - | - | `ReactNode` | children of the component, if it is not defined as self closing |
| reverseIconPosition | - | false | `boolean` | reverse the expand and collapse icons positions to left side |
| iconSize | - | 16 | `number` | size of expand and collapse icons |
| onClick | - | - | `function` | function called when the accordion is clicked |
| onExpand | - | - | `function` | function called when the accordion is opened |
| onCollapse | - | - | `function` | function called when the accordion is closed |
| activeTitleColor | - | #22242E | `string` | color of the title when accordion is opened |