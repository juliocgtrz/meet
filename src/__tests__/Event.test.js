// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeAll(async () => {
        allEvents = await getEvents();
    })
    beforeEach(() => {
        EventComponent = render(<Event event={allEvents[0]} />);
    })

    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });
    test('renders event start time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });
    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });
    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });
    test('event details section is hidden by default', () => {
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });
    test("shows event details when user clicks 'show details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button, 'Show Details');
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });
    test("hides event details when user clicks 'hide details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Hide Details');
        await user.click(button, 'Hide Details');
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});