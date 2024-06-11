import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const header = React.createElement('h1', { id: 'header' }, 'Header');
const body = React.createElement('h1', { id: 'body' }, 'Body');
const footer = React.createElement('h1', { id: 'footer' }, 'Footer');
const div = React.createElement('div', {}, header, body, footer);

// React Element
const head = (<h1 id="jsx" key='jsx'>
    Hello jsx
</h1>);

// React Components

const Heading = ()=>(
    <h1>React Component Heading</h1>
);
const Container = () => (
    <div>
        {/* Header is another component */}
        <Heading/>
        {/* head is a react element */}
        {head}
        <h1 key='hello'>Hello</h1>
        <h1 key='functional'>functional</h1>
        <h1 key='comp'>Component</h1>
        <p>This is a react component which have another component inside it.</p>
    </div>
);

root.render(<Container />);