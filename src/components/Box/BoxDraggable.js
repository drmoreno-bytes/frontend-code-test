import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import useDraggable from '../../hooks/useDraggable';
import './box.css';

export const BoxDraggable = observer((box) => {
    const boxRef = useRef(null);
    useDraggable(boxRef, box);

    return (
        <div
            ref={boxRef}
            id={box.id}
            className={`box ${box.isSelected ? 'box-selected' : ''}`}
            style={{
                backgroundColor: box.color,
                width: `${box.width}px`,
                height: `${box.height}px`,
                transform: `translate(${box.left}px, ${box.top}px)`,
            }}
            onDoubleClick={() => box.toggleSelection()}
        >
            {box.children}
        </div>
    );
});
