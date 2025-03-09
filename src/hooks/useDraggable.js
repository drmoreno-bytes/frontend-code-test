import { useEffect } from 'react';
import interact from 'interactjs';
import store from '../stores/MainStore';

const useDraggable = (boxRef, box) => {
    useEffect(() => {
        if (!boxRef.current) {
            return;
        }
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
    }, [boxRef, box]);
};

export default useDraggable;
