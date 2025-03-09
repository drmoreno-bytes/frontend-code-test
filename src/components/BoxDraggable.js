import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import interact from 'interactjs';
import store from '../stores/MainStore';

function BoxDraggable(box) {
    const boxRef = useRef(null);

    useEffect(() => {
        if (boxRef.current) {
            interact(boxRef.current).draggable({
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                    }),
                ],
                listeners: {
                    move(event) {
                        const { dx, dy } = event;
                        const selectedBoxes = store.selectedBoxCount;
                        selectedBoxes > 0
                            ? store.moveSelectedBoxes(dx, dy)
                            : box.setPosition(box.left + dx, box.top + dy);
                    },
                },
            });
        }
    }, [boxRef, box]);

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
