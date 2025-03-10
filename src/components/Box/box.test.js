import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from './index';

describe('Box Component', () => {
    it('renders Box component', () => {
        render(<Box />);
        expect(screen.getByText('Box')).toBeInTheDocument();
    });
});
