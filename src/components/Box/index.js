import React from 'react';
import { observer } from 'mobx-react';
import { BoxDraggable } from './BoxDraggable';

export const Box = observer((props) => (
    <BoxDraggable {...props}>
        <div>Box</div>
    </BoxDraggable>
));
