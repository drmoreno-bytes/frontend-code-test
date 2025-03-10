import React from 'react';
import { observer } from 'mobx-react';
import { BoxDraggable } from './BoxDraggable';
import './box.css';

export const Box = observer((props) => (
    <BoxDraggable {...props}>
        <div className={`text-box ${props.isSelected ? 'text-selected' : ''}`}>
            Box {props.isSelected ? 'Selected' : ''}
        </div>
    </BoxDraggable>
));
