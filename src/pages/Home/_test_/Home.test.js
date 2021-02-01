import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

describe('Home-component', ()=>{
    test('should fill and validate form', async () =>{
        render(<Home/>);

        await act(async () => {
            const firstName = screen.getByTestId('first_name');
            userEvent.type(firstName, "Test");
        });

        await act(async () => {
            userEvent.click(screen.getByRole('button', { name: /submit/i }));
        });

        const lastName = screen.getByTestId('first_name');
    });
});