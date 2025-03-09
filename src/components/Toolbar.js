import React from 'react';
import { observer } from 'mobx-react';
import uuid from 'uuid/v4';
import getRandomColor from '../utils/getRandomColor';

function Toolbar({ store }) {
    const selectedBoxes = store.selectedBoxCount;
    const handleAddBox = () => {
        const canvas = document.querySelector('.canva');
        if (!canvas) return;
        const boxWidth = 200;
        const boxHeight = 100;

        const randomX = Math.floor(
            Math.random() * (canvas.clientWidth - boxWidth)
        );
        const randomY = Math.floor(
            Math.random() * (canvas.clientHeight - boxHeight)
        );
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
            <input
                type="color"
                onChange={handleChangeColor}
                disabled={selectedBoxes <= 0}
            />
            <span>
                {selectedBoxes > 0
                    ? `Selected ${
                          selectedBoxes > 1 ? 'Boxes' : 'Box'
                      }: ${selectedBoxes}`
                    : 'No boxes selected'}
            </span>
        </div>
    );
}

export default observer(Toolbar);
