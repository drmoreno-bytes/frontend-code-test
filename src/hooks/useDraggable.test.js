import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useDraggable from './useDraggable';
import interact from 'interactjs';

jest.mock('interactjs');

describe('useDraggable', () => {
    const config = () => {
        const boxRef = { current: <div></div> };
        const box = {
            id: 1,
            width: 200,
            height: 100,
            color: '#FFF000',
            left: 200,
            top: 100,
            isSelected: false,
            setPosition: jest.fn(),
        };

        interact.mockReturnValue({
            draggable: jest.fn(({ listeners }) => {
                listeners.move({ dx: 20, dy: 20 });
            }),
        });

        return { box, boxRef };
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should not crash when boxRef is null', () => {
        const boxRef = { current: null };
        const box = { left: 0, top: 0, setPosition: jest.fn() };

        const { result } = renderHook(() => useDraggable(boxRef, box));
        expect(result.error).toBeUndefined();
    });

    it('should call interact.draggable correctly with the right options', () => {
        const { box, boxRef } = config();

        renderHook(() => useDraggable(boxRef, box));

        expect(interact).toHaveBeenCalledWith(boxRef.current);
        expect(interact().draggable).toHaveBeenCalledWith({
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                }),
            ],
            listeners: expect.any(Object),
        });
    });
});
