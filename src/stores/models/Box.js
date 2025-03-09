import { types } from 'mobx-state-tree';

const BoxModel = types
    .model('Box', {
        id: types.identifier,
        width: 200,
        height: 100,
        color: '#FFF000',
        left: 200,
        top: 100,
        isSelected: true,
    })
    .views((self) => ({}))
    .actions((self) => ({
        toggleSelection() {
            self.isSelected = !self.isSelected;
        },
        setColor(newColor) {
            self.color = newColor;
        },
    }));

export default BoxModel;
