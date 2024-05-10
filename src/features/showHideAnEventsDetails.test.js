import { render, waitFor, within } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    //Scenario 1
    test('An event element is collapsed by default.', ({ given, when, then }) => {

        let AppComponent;
        given('the user has not clicked on an event to show details', () => {
            AppComponent = render(<App />);
        });

        when('the user views a list of upcoming events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the details should remain hidden', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });
    //Scenario 2
    test('User can expand an event to see details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the event details are hidden', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when('the user clicks show details for a specific event', async () => {
            const showDetails = EventComponent.queryByText('Show Details');
            const user = userEvent.setup();
            await user.click(showDetails);
        });

        then('the event details should be shown', () => {
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
        });
    });
    //Scenario 3
    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the event details are shown', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const user = userEvent.setup();
            await user.click(EventComponent.queryByText('Show Details'));
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
        });

        when('the user clicks hide details for an event that is open', async () => {
            const hideDetails = EventComponent.queryByText('Hide Details');
            const user = userEvent.setup();
            await user.click(hideDetails);
        });

        then('the event details should be hidden', () => {
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
        });
    });
});