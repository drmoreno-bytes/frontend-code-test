import { types } from 'mobx-state-tree';

const BoxModel = types
    .model('Box', {
        id: types.identifier,
        width: 200,
        height: 100,
        color: '#FFF000',
        left: 200,
        top: 100,
        isSelected: false,
    })
    .actions((self) => ({
        toggleSelection() {
            self.isSelected = !self.isSelected;
        },
        setColor(newColor) {
            self.color = newColor;
        },
        setPosition(x, y) {
            self.left = x;
            self.top = y;
        },
    }));

export default BoxModel;
