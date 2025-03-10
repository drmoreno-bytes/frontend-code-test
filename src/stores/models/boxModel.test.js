import BoxModel from './Box';

describe('BoxModel', () => {
    let box;

    beforeEach(() => {
        box = BoxModel.create({ id: '1' });
    });

    it('initializes with default values', () => {
        expect(box.width).toBe(200);
        expect(box.height).toBe(100);
        expect(box.color).toBe('#FFF000');
        expect(box.left).toBe(200);
        expect(box.top).toBe(100);
        expect(box.isSelected).toBe(false);
    });

    it('toggles selection', () => {
        box.toggleSelection();
        expect(box.isSelected).toBe(true);
        box.toggleSelection();
        expect(box.isSelected).toBe(false);
    });

    it('sets color', () => {
        box.setColor('#FF0000');
        expect(box.color).toBe('#FF0000');
    });

    it('sets position', () => {
        box.setPosition(300, 400);
        expect(box.left).toBe(300);
        expect(box.top).toBe(400);
    });
});
