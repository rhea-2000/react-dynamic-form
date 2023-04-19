import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('App', () => {
    it('renders the heading', () => {
        render(<App />);
        const heading = screen.getByRole('heading', { name: /JCI Dynamic Form POC/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders two dynamic forms', () => {
        render(<App />);
        const forms = screen.getAllByTestId('dynamic-form');
        expect(forms.length).toBe(2);
    });

    it('updates form data on user input', () => {
        render(<App />);
        screen.g
        const input = screen.getByLabelText('Name');
        userEvent.type(input, 'John Doe');
        expect(input.value).toBe('John Doe');
    });
});
