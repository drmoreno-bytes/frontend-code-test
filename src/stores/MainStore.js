import { types, applySnapshot, onSnapshot } from 'mobx-state-tree';
import BoxModel from './models/Box';
import { UndoManager } from 'mst-middlewares';

const MainStore = types
    .model('MainStore', {
        boxes: types.array(BoxModel),
        history: types.optional(UndoManager, {}),
    })
    .actions((self) => {
        let undoManager = self.history;
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
                undoManager.startGroup(() => {
                    boxesToMove.forEach((b) => {
                        b.setPosition(b.left + dx, b.top + dy);
                    });
                });
                undoManager.stopGroup();
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

try {
    onSnapshot(store, (snapshot) => {
        localStorage.setItem('geniallyStore', JSON.stringify(snapshot));
    });

    const savedState = localStorage.getItem('geniallyStore');
    if (savedState) {
        applySnapshot(store, JSON.parse(savedState));
    }
} catch (error) {
    console.error('Error accessing localStorage:', error);
}

export default store;
