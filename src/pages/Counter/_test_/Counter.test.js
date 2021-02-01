import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('Counter-component', () => {
    test('should display initial value ', () => {
        //const wrapper = render(<Counter/>);
        //screen.debug();
        render(<Counter/>);

        expect(screen.getByText('Current value: 0')).toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: /\-/i }));
        //screen.debug();
        expect(screen.getByText('Current value: -1')).toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: /\+/i }));
        //screen.debug();
        expect(screen.getByText('Current value: 0')).toBeInTheDocument();

    });

    test('should display initial value ', () => {
        //const wrapper = render(<Counter/>);
        //screen.debug();
        render(<Counter initialValue={12} />);

        expect(screen.getByText('Current value: 12')).toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: /\-/i }));
        //screen.debug();
        expect(screen.getByText('Current value: 11')).toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: /\+/i }));
        //screen.debug();
        expect(screen.getByText('Current value: 12')).toBeInTheDocument();

    });
});