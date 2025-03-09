import React from 'react';
import { observer } from 'mobx-react';

function BoxDraggable(props) {
    return (
        <div
            id={props.id}
            className="box"
            style={{
                backgroundColor: props.color,
                width: props.width,
                height: props.height,
                transform: `translate(${props.left}px, ${props.top}px)`,
                cursor: 'pointer',
                border: props.isSelected ? '3px solid red' : '',
            }}
            onClick={() => props.toggleSelection()}
        >
            {props.children}
        </div>
    );
}

export default observer(BoxDraggable);
