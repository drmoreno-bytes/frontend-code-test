import React from 'react';
import { observer } from 'mobx-react';
import uuid from 'uuid/v4';
import getRandomColor from '../../utils/getRandomColor';
import { SelectedBoxCount } from '../SelectedBoxCount';

export const Toolbar = observer(({ store, canvasSize }) => {
    const selectedBoxes = store.selectedBoxCount;

    const handleAddBox = () => {
        const { width, height } = canvasSize;
        if (width === 0 || height === 0) return;
        const boxWidth = 200;
        const boxHeight = 100;

        const randomX = Math.floor(Math.random() * (width - boxWidth));
        const randomY = Math.floor(Math.random() * (height - boxHeight));
        store.addBox({
            id: uuid(),
            width: 200,
            height: 100,
            color: getRandomColor(),
            left: randomX,
            top: randomY,
            selected: false,
        });
    };

    const handleRemoveSelectedBoxes = () => {
        store.removeSelectedBoxes();
    };

    const handleChangeColor = (e) => {
        const color = e.target.value;
        store.setColorForSelectedBoxes(color);
    };

    return (
        <div className="toolbar">
            <button onClick={handleAddBox}>Add Box</button>
            <button onClick={handleRemoveSelectedBoxes}>Remove Box</button>
            <button
                onClick={() => store.history.undo()}
                disabled={!store.history.canUndo}
            >
                Undo
            </button>
            <button
                onClick={() => store.history.redo()}
                disabled={!store.history.canRedo}
            >
                Redo
            </button>
            <input
                type="color"
                onChange={handleChangeColor}
                disabled={selectedBoxes <= 0}
            />
            <SelectedBoxCount selectedBoxes={selectedBoxes} />
        </div>
    );
});
