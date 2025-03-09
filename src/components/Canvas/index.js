import React from 'react';

import { observer } from 'mobx-react';
import { Box } from '../Box';

export const Canvas = observer(({ store }) => {
    return (
        <div className="canva">
            {store.boxes.map((box, index) => (
                <Box
                    id={box.id}
                    key={index}
                    color={box.color}
                    left={box.left}
                    top={box.top}
                    width={box.width}
                    height={box.height}
                    isSelected={box.isSelected}
                    toggleSelection={box.toggleSelection}
                    setPosition={box.setPosition}
                    box={box}
                />
            ))}
        </div>
    );
});
