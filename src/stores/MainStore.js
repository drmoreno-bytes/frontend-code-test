import { types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';
import { UndoManager } from 'mst-middlewares';

const MainStore = types
    .model('MainStore', {
        boxes: types.array(BoxModel),
        history: types.optional(UndoManager, {}),
    })
    .actions((self) => {
        let undoManager;
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
            moveSelectedBoxes(dx, dy) {
                const boxesToMove = self.boxes.filter((box) => box.isSelected);
                if (!boxesToMove || boxesToMove.length <= 0) {
                    return;
                }
                boxesToMove.forEach((b) => {
                    b.setPosition(b.left + dx, b.top + dy);
                });
            },
            undo() {
                undoManager.canUndo && undoManager.undo();
            },
            redo() {
                undoManager.canRedo && undoManager.redo();
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
