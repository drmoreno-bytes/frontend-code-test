import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../scenes/Dashboard';

test('Renders correctly the Dashboard', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
