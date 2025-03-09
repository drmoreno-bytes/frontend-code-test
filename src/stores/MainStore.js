import { types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';

const MainStore = types
    .model('MainStore', {
        boxes: types.array(BoxModel),
    })
    .actions((self) => {
        return {
            addBox(box) {
                self.boxes.push(box);
            },
            removeSelectedBoxes() {
                self.boxes = self.boxes.filter((box) => !box.isSelected);
            },
            setColorForSelectedBoxes(color) {
                self.boxes.forEach((box) => {
                    if (box.isSelected) box.setColor(color);
                });
            },
        };
    })
    .views((self) => ({
        get selectedBoxCount() {
            return self.boxes.filter((box) => box.isSelected).length;
        },
    }));

const store = MainStore.create();

const box1 = BoxModel.create({
    id: uuid(),
    color: getRandomColor(),
    left: 0,
    top: 0,
    isSelected: false,
});

store.addBox(box1);

export default store;
