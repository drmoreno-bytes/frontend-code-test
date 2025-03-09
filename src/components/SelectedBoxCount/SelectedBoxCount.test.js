import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SelectedBoxCount } from './index';

describe('SelectedBoxCount Component', () => {
    it('should renders "No boxes selected" when selectedBoxes is 0', () => {
        const { getByText } = render(<SelectedBoxCount selectedBoxes={0} />);
        expect(getByText('No boxes selected')).toBeInTheDocument();
    });

    it('should renders "Selected Box: 1" when selectedBoxes is 1', () => {
        const { getByText } = render(<SelectedBoxCount selectedBoxes={1} />);
        expect(getByText('Selected Box: 1')).toBeInTheDocument();
    });

    it('should renders "Selected Boxes: 2" when selectedBoxes is greater than 1', () => {
        const { getByText } = render(<SelectedBoxCount selectedBoxes={2} />);
        expect(getByText('Selected Boxes: 2')).toBeInTheDocument();
    });
});
