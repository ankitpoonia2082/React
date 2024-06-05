

const root = ReactDOM.createRoot(document.getElementById('root'));

const header = React.createElement('h1', { id: 'header' }, 'Header');
const body = React.createElement('h1', { id: 'body' }, 'Body');
const footer = React.createElement('h1', { id: 'footer' }, 'Footer');
const div = React.createElement('div', {}, header, body, footer);

root.render(div);