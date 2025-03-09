import { types, applySnapshot, onSnapshot } from 'mobx-state-tree';
import BoxModel from './models/Box';
import { UndoManager } from 'mst-middlewares';

const MainStore = types
    .model('MainStore', {
        boxes: types.array(BoxModel),
        history: types.optional(UndoManager, {}),
    })
    .actions((self) => {
        const { history } = self;

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
                if (boxesToMove.length === 0) {
                    return;
                }
                history.startGroup(() => {
                    boxesToMove.forEach((b) => {
                        b.setPosition(b.left + dx, b.top + dy);
                    });
                });
                history.stopGroup();
            },
            undo() {
                history.canUndo && history.undo();
            },
            redo() {
                history.canRedo && history.redo();
            },
        };
    })
    .views((self) => ({
        get selectedBoxCount() {
            return self.boxes.filter((box) => box.isSelected).length;
        },
    }));

const store = MainStore.create();

const saveState = () => {
    try {
        onSnapshot(store, (snapshot) => {
            localStorage.setItem('canvasStore', JSON.stringify(snapshot));
        });

        const savedState = localStorage.getItem('canvasStore');
        if (savedState) {
            applySnapshot(store, JSON.parse(savedState));
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
        localStorage.removeItem('canvasStore');
    }
};

saveState();

export default store;
