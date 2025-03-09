import React from 'react';

import store from '../stores/MainStore';
import Canvas from '../components/Canvas';
import Toolbar from '../components/Toolbar';
import { observer } from 'mobx-react';

function Dashboard() {
    return (
        <div className="dashboard">
            <Toolbar store={store} />
            <Canvas store={store} />
        </div>
    );
}

export default observer(Dashboard);
