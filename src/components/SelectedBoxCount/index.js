import React from 'react';
import { observer } from 'mobx-react';

export const SelectedBoxCount = observer(({ selectedBoxes }) => {
    return (
        <span>
            {selectedBoxes > 0
                ? `Selected ${
                      selectedBoxes > 1 ? 'Boxes' : 'Box'
                  }: ${selectedBoxes}`
                : 'No boxes selected'}
        </span>
    );
});
