import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import useDraggable from '../hooks/useDraggable';

function BoxDraggable(box) {
    const boxRef = useRef(null);
    useDraggable(boxRef, box);

    return (
        <div
            ref={boxRef}
            id={box.id}
            className="box"
            style={{
                position: 'absolute',
                backgroundColor: box.color,
                width: `${box.width}px`,
                height: `${box.height}px`,
                transform: `translate(${box.left}px, ${box.top}px)`,
                cursor: 'pointer',
                border: box.isSelected ? '3px solid red' : '',
            }}
            onDoubleClick={() => box.toggleSelection()}
        >
            {box.children}
        </div>
    );
}

export default observer(BoxDraggable);
