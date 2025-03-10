import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toolbar } from './index';

const mockStore = {
    selectedBoxCount: 0,
    addBox: jest.fn(),
    removeSelectedBoxes: jest.fn(),
    setColorForSelectedBoxes: jest.fn(),
    history: {
        undo: jest.fn(),
        redo: jest.fn(),
        canUndo: true,
        canRedo: true,
    },
};

const mockCanvasSize = { width: 500, height: 500 };

describe('Toolbar Component', () => {
    it('renders Toolbar component', () => {
        render(<Toolbar store={mockStore} canvasSize={mockCanvasSize} />);
        expect(screen.getByLabelText('Add Box')).toBeInTheDocument();
        expect(screen.getByLabelText('Remove Box')).toBeInTheDocument();
        expect(screen.getByLabelText('Undo')).toBeInTheDocument();
        expect(screen.getByLabelText('Redo')).toBeInTheDocument();
        expect(screen.getByLabelText('Select color')).toBeInTheDocument();
    });

    it('calls addBox when plus button is clicked', () => {
        render(<Toolbar store={mockStore} canvasSize={mockCanvasSize} />);
        const addButton = screen.getByLabelText('Add Box');
        fireEvent.click(addButton);
        expect(mockStore.addBox).toHaveBeenCalled();
    });

    it('calls removeSelectedBoxes when trash button is clicked', () => {
        render(<Toolbar store={mockStore} canvasSize={mockCanvasSize} />);
        const trashButton = screen.getByLabelText('Remove Box');
        fireEvent.click(trashButton);
        expect(mockStore.removeSelectedBoxes).toHaveBeenCalled();
    });

    it('calls undo and redo actions when buttons are clicked', () => {
        render(<Toolbar store={mockStore} canvasSize={mockCanvasSize} />);
        fireEvent.click(screen.getByLabelText('Undo'));
        expect(mockStore.history.undo).toHaveBeenCalled();
        fireEvent.click(screen.getByLabelText('Redo'));
        expect(mockStore.history.redo).toHaveBeenCalled();
    });
});
