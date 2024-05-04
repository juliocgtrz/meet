// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={[]}/>);
    })

    test('contains element with role "textbox"', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
        expect(numberTextBox).toHaveClass('number-of-events-input');
    });
    test('32 events are rendered by default', async () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue('32');
    });
    test('value of number of events updates correctly when user types in textbox', async () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(numberTextBox, '{backspace}{backspace}10');
        expect(numberTextBox.value).toBe('10');
    });
});